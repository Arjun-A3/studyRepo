'use strict'

let uploadForm = document.querySelector("#fileUploadForm");
let uploadFormInput = document.querySelector("#fileUploadInput");
let downloadFile = document.querySelector("#downloadFileUrl");

function uploadFile(file,deptsemsub,desc) {
    let formData = new FormData();
    formData.append("file", file);
    formData.append("deptsemsub",deptsemsub);
    formData.append("description",desc);
    console.log(formData);

    let req = new XMLHttpRequest();
    req.open("POST", "http://localhost:8080/file/upload")
    req.send(formData);
    req.onload = function () {
        console.log(req.responseText);

        let response = req.responseText;

        if (response !== null) {
            let downloadUrl = "http://localhost:8080/file/download/" + response;

            downloadFile.innerHTML = '<p>File Upoaded Successfully. <br/> <a href="' + downloadUrl + '" target="_self">Download File</a></p>';
            downloadFile.style.display = "block";
        } else {
            alert("Error Occured! No file returned");
        }
    }

  req.send(formData);
}

uploadForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const files = uploadFormInput.files;
    const deptsemsub  =  document.getElementById("dept").value+document.getElementById("sem").value+document.getElementById("sub").value;
    const desc =document.getElementById("desc").value;
     console.log(files[0],deptsemsub);
    if (files.length !== 0 ) {
        uploadFile(files[0],deptsemsub,desc);
        event.preventDefault();
    } else {
        alert('Please select a file')
    }

}, true);