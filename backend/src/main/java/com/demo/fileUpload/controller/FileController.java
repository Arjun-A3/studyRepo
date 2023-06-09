package com.demo.fileUpload.controller;

import com.demo.fileUpload.model.LoadFile;
import com.demo.fileUpload.payload.Response.messageResponse;
import com.demo.fileUpload.service.FileService;
import org.apache.logging.log4j.message.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Calendar;



@RestController
@CrossOrigin("*")
@RequestMapping("file")
public class FileController {

    @Autowired
    private MongoTemplate mongoTemplate;


    @Autowired
    private FileService fileService;

    @PostMapping("/upload")
    public ResponseEntity<?> upload(@RequestParam("file") MultipartFile file, @RequestParam("deptsemsub") String dss,@RequestParam("description") String desc) throws IOException {
        Query query = new Query();
        query.addCriteria(Criteria.where("metadata.deptsemsub").is(dss));
        boolean deptSemSubExists = mongoTemplate.exists(query, "fs.files");

        if (deptSemSubExists) {
            return ResponseEntity.ok(new messageResponse("File already exists"));
        }
        fileService.addFile(file, dss,desc);
        return  ResponseEntity.ok(new messageResponse(("File Uploaded successfully")));
    }

    @RequestMapping(value = "/downloadbyDSS/{deptsemsub}", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<ByteArrayResource> downloadFile(@PathVariable("deptsemsub") String deptsemsub) throws IOException {
        LoadFile loadFile = fileService.downloadFileByDSS(deptsemsub);
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(loadFile.getFileType()))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + loadFile.getFilename() + "\"")
                .body(new ByteArrayResource(loadFile.getFile()));
    }

    @GetMapping("/download/{id}")
    public ResponseEntity<ByteArrayResource> download(@PathVariable String id) throws IOException {
        LoadFile loadFile = fileService.downloadFile(id);

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(loadFile.getFileType()))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + loadFile.getFilename() + "\"")
                .body(new ByteArrayResource(loadFile.getFile()));
    }

    @GetMapping("/downloadZipFile")
    public void downloadAsZip(HttpServletResponse response) throws IOException {

        //Getting the time in milliseconds to create the zip file name
        Calendar calendar = Calendar.getInstance();
        String zipFileName = calendar.getTimeInMillis() + ".zip";

        //set headers to the response
        response.setContentType("application/zip");
        response.setHeader(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + zipFileName + "\"");

        //retrieve zip file to the response
        fileService.downloadFilesAsZip(response);

        //set status to OK
        response.setStatus(HttpServletResponse.SC_OK);

    }
}


