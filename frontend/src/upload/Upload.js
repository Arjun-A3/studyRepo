import { useState } from "react";
import "./upload.css";


export function Upload() {
    const options1 = [
        'SELECT DEPARTMENT',
        'COMPUTER SCIENCE AND BUSINESS SYSTEM',
        'COMPUTER SCIENCE ENGINEERING',
        'ARTIFICIAL INTELLIGENCE AND DATA SCIENCE',
        'ELECTRICAL ELECTRONIC AND COMMUNICATION ENGINEERING',
        'AERONATICAL ENGINEERING',
        'BIOMEDICAL ENGINEERING ',
        'MECHANICAL ENGINEERING',
        'ELECRTRICAL AND ELECTRONIC ENGINEERING',
        'AGRICULTURAL ENGINEERING',
        'BIOTECHNOLOGY',
        'MASTER OF BUSINESS ADMINISTRATION',
        'MASTER OF COMPUTER APPLICATION'
    ];

    const options2 = [
        'SELECT SEMESTER',
        'SEMESTER -1',
        'SEMESTER -2',
        'SEMESTER -3',
        'SEMESTER -4',
        'SEMESTER -5',
        'SEMESTER -6',
        'SEMESTER -7',
        'SEMESTER -8'
    ];

    const options3 = [
        'SELECT SUBJECT',
        'BCVS-I',
        'MDC',
        'PHYSICS',
        'C',
        'EG'
    ];

    const [selectedOptions, setSelectedOptions] = useState({
        department: '',
        semester: '',
        subject: ''
    });

    const handleOptionChange = (event, type) => {
        setSelectedOptions({
            ...selectedOptions,
            [type]: event.target.value
        });
    };
    let uploadFormInput = document.querySelector("#fileUploadInput");

    function uploadFile(file, deptsemsub, desc) {
        let formData = new FormData();
        alert("part2")
        formData.append("file", file);
        formData.append("deptsemsub", deptsemsub);
        formData.append("description", desc);
        console.log(formData);

        let req = new XMLHttpRequest();
        req.open("POST", "http://localhost:8080/file/upload")
        req.onload = function () {
            console.log(req.responseText);

            let response = req.responseText;

            if (response !== null) {
                alert("files uploaded")
            } else {
                alert("Error Occured");
            }
        }

        req.send(formData);
    }

    const uploadFrom = (event) => {
        event.preventDefault();
        alert("part1")
        const files = uploadFormInput.files;
        const deptsemsub = selectedOptions.department + selectedOptions.semester + selectedOptions.subject;
        const desc = document.getElementById("desc").value;
        console.log(files[0], deptsemsub);
        if (files.length !== 0) {
            uploadFile(files[0], deptsemsub, desc);
            event.preventDefault();
        } else {
            alert('Please select a file')
        }
    }





    return (
        <div class="file-container">
            <div class="file-upload-header">
                <h2 style={{color:"black"}}>File Upload Portal</h2>
            </div>
            <div class="file-upload">
                <form onSubmit={uploadFrom}>
                    <h3>File Upload</h3>
                    <div className="dropdown-section">
                        <h2>DEPARTMENT</h2>
                        <select
                            className="dropdown"
                            value={selectedOptions.department}
                            onChange={(event) => handleOptionChange(event, 'department')}
                        >
                            {options1.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="dropdown-section">
                        <h2>SEMESTER</h2>
                        <select
                            className="dropdown"
                            value={selectedOptions.semester}
                            onChange={(event) => handleOptionChange(event, 'semester')}
                        >
                            {options2.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="dropdown-section">
                        <h2>SUBJECT</h2>
                        <select
                            className="dropdown"
                            value={selectedOptions.subject}
                            onChange={(event) => handleOptionChange(event, 'subject')}
                        >
                            {options3.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <center>description:<textarea type="textbox" id="desc" className="input-group-text" /></center><br />
                    <input type="file" name="file" id="fileUploadInput" class="file-input" required />
                    <button type="submit" class="submit-btn">Upload</button>
                </form>
            </div>

            <center><button onClick={() => { window.location = "/Stu" }} class="submit-btn">Go to Main Page</button></center>
            {/* 
        <div class="file-upload">
            <div id="downloadZip">
                <h3>Download All Files as a Zip</h3>
                <a href="http://localhost:8080/file/downloadZipFile" style={{textDecoration:"none",paddingTop:"5px"}} class="submit-btn">Download As Zip</a>
            </div>
        </div>

        <div class="file-download">
            <div id="downloadFileUrl"></div>
        </div> */}
        </div>
    );

}

