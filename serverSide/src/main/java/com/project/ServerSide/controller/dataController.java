package com.project.ServerSide.controller;

import com.project.ServerSide.Repository.DataRepo;
import com.project.ServerSide.model.pdfData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class dataController {
        @Autowired
        private DataRepo Repo;
        @PostMapping("/addPdf")
        public String SavePdf(@RequestBody pdfData pdfData){
                Repo.save(pdfData);
                return "added pdf with id" + pdfData.getId();
        }

        @GetMapping("/findPdf")
        public List<pdfData> getPdf(){
                return Repo.findAll();
        }

        @GetMapping("/findPdf/{Id}")
        public Optional<pdfData> findById(@PathVariable int Id){
                return Repo.findById(Id);
        }
        @DeleteMapping("/deletePdf/{Id}")
        public String DeletePdf(@PathVariable int Id){
                Repo.deleteById(Id);
                return "Pdf Deleted";
        }



}
