package com.project.ServerSide.Repository;


import com.fasterxml.jackson.databind.JsonNode;
import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import com.mongodb.client.gridfs.model.GridFSFile;
import com.project.ServerSide.model.LoadFile;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.commons.io.IOUtils;
import org.bson.BsonValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.data.mongodb.gridfs.GridFsResource;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.stereotype.Service;
import org.springframework.util.StreamUtils;
import org.springframework.web.multipart.MultipartFile;

//import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

@Service
public class FileService {

    @Autowired
    private GridFsTemplate template;

    @Autowired
    private GridFsOperations operations;

    public String addFile(MultipartFile upload, JsonNode metaJson) throws IOException {

        //define additional metadata
        DBObject metadata = new BasicDBObject();
        metadata.put("fileSize", upload.getSize());
        Iterator<String> fieldNames = metaJson.fieldNames();
        while (fieldNames.hasNext()) {
            String fieldName = fieldNames.next();
            JsonNode fieldValue = metaJson.get(fieldName);
            metadata.put(fieldName, fieldValue.asText());
        }


        //store in database which returns the objectID
        Object fileID = template.store(upload.getInputStream(), upload.getOriginalFilename(), upload.getContentType(), metadata);

        //return as a string
        return fileID.toString();
    }

    public LoadFile downloadFile(String id) throws IOException {

        //search file
        GridFSFile gridFSFile = template.findOne( new Query(Criteria.where("_id").is(id)) );


        //convert uri to byteArray
        //save data to LoadFile class
        LoadFile loadFile = new LoadFile();

        if (gridFSFile != null && gridFSFile.getMetadata() != null) {
            loadFile.setFilename( gridFSFile.getFilename() );

            loadFile.setFileType( gridFSFile.getMetadata().get("_contentType").toString() );

            loadFile.setFileSize( gridFSFile.getMetadata().get("fileSize").toString() );

            loadFile.setFile( IOUtils.toByteArray(operations.getResource(gridFSFile).getInputStream()) );
        }

        return loadFile;
    }

    public void downloadFilesAsZip(HttpServletResponse response) throws IOException {

        //get all files in db
        List<GridFSFile> fileList = new ArrayList<>();
        template.find(new Query()).into(fileList);

        //if fileList is not empty, loop through the list
        if (fileList.size() > 0) {

            //create a zip file
            ZipOutputStream zipOutputStream  = new ZipOutputStream(response.getOutputStream());

            for (GridFSFile gridFSFile : fileList) {
                //file id is returning as a bson value
                BsonValue bsonValue = gridFSFile.getId();
                String file_id = String.valueOf(bsonValue.asObjectId().getValue());

                //find and retrieve file (using previoustrestrse download method)
                LoadFile file = downloadFile(file_id);

                //add file to the zip file entry
                ZipEntry zipEntry = new ZipEntry(file.getFilename());
                zipEntry.setSize(Long.parseLong(file.getFileSize()));

                zipOutputStream.putNextEntry(zipEntry);

                ByteArrayResource fileResource = new ByteArrayResource(file.getFile());
                StreamUtils.copy(fileResource.getInputStream(), zipOutputStream);

                zipOutputStream.closeEntry();
            }

            zipOutputStream.finish();
            zipOutputStream.close();
        }

    }
    public LoadFile downloadFileByMetadata(String sem, String subject, String unit, String dept) {
        // Create the query based on the metadata fields
        Query query = new Query();
        query.addCriteria(Criteria.where("metadata.sem").is(sem)
                .and("metadata.subject").is(subject)
                .and("metadata.unit").is(unit)
                .and("metadata.dept").is(dept));

        // Execute the query and retrieve the file from GridFS
        GridFSFile gridFSFile = operations.findOne(query);
        if (gridFSFile == null) {
            return null; // File not found
        }

        // Retrieve the file data from GridFS
        GridFsResource resource = operations.getResource(gridFSFile);
        byte[] fileData;
        try (InputStream inputStream = resource.getInputStream()) {
            fileData = IOUtils.toByteArray(inputStream);
        } catch (IOException e) {
            throw new RuntimeException("Failed to read file data: " + e.getMessage(), e);
        }

        // Create the LoadFile object with the retrieved data
        return new LoadFile(fileData, gridFSFile.getFilename(),gridFSFile.getMetadata());
    }

}