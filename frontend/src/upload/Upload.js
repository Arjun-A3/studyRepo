import { useState } from "react";
import "./upload.css";


export function Upload() {
    const [index, setIndex] = useState(0);
    const [deptindex, setdeptindex] = useState(0);
    const options1 = [
        'SELECT DEPARTMENT',
        'COMPUTER SCIENCE AND BUSINESS SYSTEM',
        'ARTIFICIAL INTELLIGENCE AND DATA SCIENCE',
        'COMPUTER SCIENCE ENGINEERING',
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
    let options3 = [
        ["SELECT SUBJECT", "..", "..", "..", ".."],
        //CSBS
        ['SELECT SUBJECT', 'BCVS-I', 'MDC', 'PHYSICS', 'C', 'EG'],
        ['SELECT SUBJECT', 'csbss2demo1', 'csbss2demo2', 'csbss2demo3', 'csbs2sdemo4', 'csbss2demo5'],
        ['SELECT SUBJECT', 'csbss3demo1', 'csbss3demo2', 'csbss3demo3', 'csbss3demo4', 'csbss3demo5'],
        ['SELECT SUBJECT', 'csbs4sdemo1', 'csbss4demo2', 'csbss4demo3', 'csbss4demo4', 'csbss4demo5'],
        ['SELECT SUBJECT', 'csbs5sdemo1', 'csbss5demo2', 'csbss5demo3', 'csbss5demo4', 'csbss5demo5'],
        ['SELECT SUBJECT', 'csbs6sdemo1', 'csbss6demo2', 'csbss6demo3', 'csbss6demo4', 'csbss6demo5'],
        ['SELECT SUBJECT', 'csbs7sdemo1', 'csbss7demo2', 'csbss7demo3', 'csbss7demo4', 'csbss7demo5'],
        ['SELECT SUBJECT', 'csbs8sdemo1', 'csbss8demo2', 'csbss8demo3', 'csbss8demo4', 'csbss8demo5'],
        //AIDS
        ['SELECT SUBJECT', 'aidsS1demo1', 'aidsS2demo2', 'aidss3demo3', 'aidss4demo4', 'aidss1demo5'],
        ['SELECT SUBJECT', 'aidsS2demo1', 'aidsS2demo2', 'aidss3demo3', 'aidss4demo4', 'aidss2demo5'],
        ['SELECT SUBJECT', 'aidsS3demo1', 'aidsS2demo2', 'aidss3demo3', 'aidss4demo4', 'aidss1demo5'],
        ['SELECT SUBJECT', 'aidsS4demo1', 'aidsS2demo2', 'aidss3demo3', 'aidss4demo4', 'aidss1demo5'],
        ['SELECT SUBJECT', 'aidsS5demo1', 'aidsS2demo2', 'aidss3demo3', 'aidss4demo4', 'aidss1demo5'],
        ['SELECT SUBJECT', 'aidsS6demo1', 'aidsS2demo2', 'aidss3demo3', 'aidss4demo4', 'aidss1demo5'],
        ['SELECT SUBJECT', 'aidsS7demo1', 'aidsS2demo2', 'aidss3demo3', 'aidss4demo4', 'aidss1demo5'],
        ['SELECT SUBJECT', 'aidsS8demo1', 'aidsS2demo2', 'aidss3demo3', 'aidss4demo4', 'aidss1demo5'],
        //CSE
        ['SELECT SUBJECT', 'CSES1demo1', 'CSES1demo2', 'CSES1demo3', 'CSES1demo4', 'CSES1demo5'],
        ['SELECT SUBJECT', 'CSES1demo1', 'CSES1demo2', 'CSES1demo3', 'CSES1demo4', 'CSES1demo5'],
        ['SELECT SUBJECT', 'CSES1demo1', 'CSES1demo2', 'CSES1demo3', 'CSES1demo4', 'CSES1demo5'],
        ['SELECT SUBJECT', 'CSES1demo1', 'CSES1demo2', 'CSES1demo3', 'CSES1demo4', 'CSES1demo5'],
        ['SELECT SUBJECT', 'CSES1demo1', 'CSES1demo2', 'CSES1demo3', 'CSES1demo4', 'CSES1demo5'],
        ['SELECT SUBJECT', 'CSES1demo1', 'CSES1demo2', 'CSES1demo3', 'CSES1demo4', 'CSES1demo5'],
        ['SELECT SUBJECT', 'CSES1demo1', 'CSES1demo2', 'CSES1demo3', 'CSES1demo4', 'CSES1demo5'],
        ['SELECT SUBJECT', 'CSES1demo1', 'CSES1demo2', 'CSES1demo3', 'CSES1demo4', 'CSES1demo5'],
        //MCA
        ['MCAS1demo1', 'MCAS1demo1', 'MCAS1demo1', 'MCAS1demo1', 'MCAS1demo1'],
        ['MCAS1demo1', 'MCAS1demo1', 'MCAS1demo1', 'MCAS1demo1', 'MCAS1demo1'],
        ['MCAS1demo1', 'MCAS1demo1', 'MCAS1demo1', 'MCAS1demo1', 'MCAS1demo1'],
        ['MCAS1demo1', 'MCAS1demo1', 'MCAS1demo1', 'MCAS1demo1', 'MCAS1demo1'],
        ['MCAS1demo1', 'MCAS1demo1', 'MCAS1demo1', 'MCAS1demo1', 'MCAS1demo1'],
        ['MCAS1demo1', 'MCAS1demo1', 'MCAS1demo1', 'MCAS1demo1', 'MCAS1demo1'],
        ['MCAS1demo1', 'MCAS1demo1', 'MCAS1demo1', 'MCAS1demo1', 'MCAS1demo1'],
        ['MCAS1demo1', 'MCAS1demo1', 'MCAS1demo1', 'MCAS1demo1', 'MCAS1demo1'],
    ];


    const [selectedOptions, setSelectedOptions] = useState({
        department: '',
        semester: '',
        subject: ''
    });
    const handleDeptChange = (event, type) => {
        setdeptindex(options1.indexOf(event.target.value));
        setSelectedOptions({

            ...selectedOptions,
            [type]: event.target.value
        });
    };
    const handleSemChange = (event, type) => {
        if (deptindex === 1) {
            setIndex(options2.indexOf(event.target.value) + deptindex - 1);
        }
        else if (deptindex === 2) {
            setIndex(options2.indexOf(event.target.value) + (deptindex * 4));
        }
        else if (deptindex === 3) {
            setIndex(options2.indexOf(event.target.value) + (deptindex * 5 + 1));
        }
        else if (deptindex === 4) {
            setIndex(options2.indexOf(event.target.value) + (deptindex * 6+1));
        }
        // else if (deptindex === 5){
        //   setIndex(options2.indexOf(event.target.value) + (deptindex*4+4));
        // }
        setSelectedOptions({
            ...selectedOptions,
            [type]: event.target.value
        });
    };
    const handleSubChange = (event, type) => {
        setSelectedOptions({
            ...selectedOptions,
            [type]: event.target.value
        });
    };


    let uploadFormInput = document.querySelector("#fileUploadInput");

    function uploadFile(file, deptsemsub, desc) {
        let formData = new FormData();
        formData.append("file", file);
        formData.append("deptsemsub", deptsemsub);
        formData.append("description", desc);
        let req = new XMLHttpRequest();
        req.open("POST", "http://localhost:8080/file/upload")
        req.onload = function () {
            console.log(req.responseText);
            let response = JSON.parse(req.responseText);
            if (response.message === "File already exists") {

                alert("File already exists, developers are working on it!!")
            }
            else if(response.message ==="File Uploaded successfully")
            {
                alert("File Uploaded successfully");
            }
            else {
                alert("Error Occured");
            }
        }

        req.send(formData);
    }

    const uploadFrom = (event) => {
        event.preventDefault();
        const files = uploadFormInput.files;
        const deptsemsub = selectedOptions.department + selectedOptions.semester + selectedOptions.subject;
        const desc = document.getElementById("desc").value;
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
                <h2 style={{ color: "black" }}>File Upload Portal</h2>
            </div>
            <div class="file-upload">
                <form onSubmit={uploadFrom}>
                    <h3>File Upload</h3>
                    <div className="dropdown-section">
                        <h5 style={{ color: "black" }}>DEPARTMENT</h5>
                        <select
                            className="dropdown"
                            value={selectedOptions.department}
                            onChange={(event) => handleDeptChange(event, 'department')}
                        >
                            {options1.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="dropdown-section">
                        <h5 style={{ color: "black" }}>SEMESTER</h5>
                        <select
                            className="dropdown"
                            value={selectedOptions.semester}
                            onChange={(event) => handleSemChange(event, 'semester')}
                        >
                            {options2.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="dropdown-section">
                    </div>

                    {selectedOptions.department && selectedOptions.semester && (
                        <div>
                            <div className="dropdown-section">
                                <h5 style={{ color: "black" }}>SUBJECT</h5>
                                <select
                                    className="dropdown"
                                    value={selectedOptions.subject}
                                    onChange={(event) => handleSubChange(event, 'subject')}
                                >
                                    {options3[index].map((option, index) => (
                                        <option key={index} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>

                            </div>
                        </div>)}
                    <center>description:<textarea type="textbox" id="desc" className="input-group-text" /></center><br />
                    <input type="file" name="file" id="fileUploadInput" class="file-input" required />
                    <button type="submit" class="submit-btn">Upload</button>
                </form>
            </div>

            <center><button onClick={() => { window.location = "/main" }} class="submit-btn">Go to Main Page</button></center>
            
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

