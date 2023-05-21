import React from 'react'
import './cssFile/Upload.css';

export function Upload() {
  let uploadform = document.querySelector("#WWE");
  let downloadFile = document.querySelector("#downloadFile");


  function uploadfile(file){
    let formData = new FormData();
    formData.append("file", file);

    let req = new XMLHttpRequest();
    req.open("POST", "http://localhost:8080/file/upload")

    req.onload = function () {
        console.log(req.responseText);

        let response = req.responseText;

        if (response !== null) {
            let downloadUrl = "http://localhost:8080/file/download/" + response;

            downloadFile.innerHTML = '<p>File Uploaded Successfully. <br/> <a href="' + downloadUrl + '" target="_self">Download File</a></p>';
            downloadFile.style.display = "block";
        } else {
            alert("Error Occured! No file returned");
        }
    }

    req.send(formData);
  }


  return (
    <div>
    <br/><br/><br/><br/>
	<form id='WWE' >
        
		<h1>Upload Documents</h1>
        <div >
        <label htmlFor='fileName'>FileName : </label>
        <input type = "text" name ="filename"/>
        
        <label htmlFor='dept'>Department : </label>
        <input type = "text" name ="dept"/>
        
        <label htmlFor='sem'>Semester : </label>
        <input type = "text" name ="sem"/>

        <label htmlFor='sub'>Subject : </label>
        <input type = "text" name ="sub"/>

        <label htmlFor='unit'>Unit : </label>
        <input type = "text" name ="unit"/>
        </div>

		<input type="file" name="file" id="file"/>
        <input type="submit" value="Done" name="submit"/>
	</form>
    <br/><br/><br/>
    <div><center>
      <div id="downloadFile"></div>
        <button class="btn btn-primary" type="button" >Click Here to see Student page</button></center>
    </div>
    </div>
  );
}

