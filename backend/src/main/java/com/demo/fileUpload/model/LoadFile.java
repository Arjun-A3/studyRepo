package com.demo.fileUpload.model;

public class LoadFile {

    private String filename;
    private String fileType;
    private String fileSize;
    private String deptsemsub;
    private String description;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    private byte[] file;

    public String getDeptsemsub() {
        return deptsemsub;
    }

    public void setDeptsemsub(String deptsemsub) {
        this.deptsemsub = deptsemsub;
    }

    public LoadFile() {
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }

    public String getFileSize() {
        return fileSize;
    }

    public void setFileSize(String fileSize) {
        this.fileSize = fileSize;
    }

    public byte[] getFile() {
        return file;
    }

    public void setFile(byte[] file) {
        this.file = file;
    }
}
