package com.project.ServerSide.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.ServerSide.model.LoadFile;
import com.project.ServerSide.Repository.FileService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.io.IOException;
import java.util.Calendar;

@RestController
@CrossOrigin("*")
@RequestMapping("file")
public class FileController {

    @Autowired
    private FileService fileService;

    @PostMapping("/upload")
    public ResponseEntity<?> upload(@RequestParam("file")MultipartFile file,@RequestParam("metadata") String metadata) throws IOException {

        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode metaJson = objectMapper.readTree(metadata);


        return new ResponseEntity<>(fileService.addFile(file,metaJson), HttpStatus.OK);
    }

    @GetMapping("/download/{id}")
    public ResponseEntity<ByteArrayResource> download(@PathVariable String id) throws IOException {
        LoadFile loadFile = fileService.downloadFile(id);

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(loadFile.getFileType() ))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + loadFile.getFilename() + "\"")
                .body(new ByteArrayResource(loadFile.getFile()));
    }
    @GetMapping("/download")
    public ResponseEntity<ByteArrayResource> download(@RequestParam("sem") String sem,
                                                      @RequestParam("subject") String subject,
                                                      @RequestParam("unit") String unit,
                                                      @RequestParam("dept") String dept) throws IOException {
        LoadFile loadFile = fileService.downloadFileByMetadata(sem, subject, unit, dept);

        if (loadFile == null) {
            return ResponseEntity.notFound().build();
        }

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