import React, { useEffect, useRef, useState } from 'react';
import './main.css';
import axios from 'axios';


const YourComponent = () => {
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
    ['SELECT SUBJECT', 'BCVS-I', 'MDC', 'PHYSICS', 'C', 'EG'],
    ['csbss2demo1', 'csbss2demo2', 'csbss2demo3', 'csbs2sdemo4', 'csbss2demo5'],
    ['csbss3demo1', 'csbss3demo2', 'csbss3demo3', 'csbss3demo4', 'csbss3demo5'],
    ['csbs4sdemo1', 'csbss4demo2', 'csbss4demo3', 'csbss4demo4', 'csbss4demo5'],
    ['csbs5sdemo1', 'csbss5demo2', 'csbss5demo3', 'csbss5demo4', 'csbss5demo5'],
    ['csbs6sdemo1', 'csbss6demo2', 'csbss6demo3', 'csbss6demo4', 'csbss6demo5'],
    ['csbs7sdemo1', 'csbss7demo2', 'csbss7demo3', 'csbss7demo4', 'csbss7demo5'],
    ['csbs8sdemo1', 'csbss8demo2', 'csbss8demo3', 'csbss8demo4', 'csbss8demo5'],
    ['aidsS1demo1', 'aidsS1demo2', 'aidss1demo3', 'aidss1demo4', 'aidss1demo5'],
    ['aidsS2demo1', 'aidsS2demo2', 'aidss2demo3', 'aidss2demo4', 'aidss2demo5'],
    ['aidsS1demo1', 'aidsS1demo2', 'aidss1demo3', 'aidss1demo4', 'aidss1demo5'],
    ['aidsS1demo1', 'aidsS1demo2', 'aidss1demo3', 'aidss1demo4', 'aidss1demo5'],
    ['aidsS1demo1', 'aidsS1demo2', 'aidss1demo3', 'aidss1demo4', 'aidss1demo5'],
    ['aidsS1demo1', 'aidsS1demo2', 'aidss1demo3', 'aidss1demo4', 'aidss1demo5'],
    ['aidsS1demo1', 'aidsS1demo2', 'aidss1demo3', 'aidss1demo4', 'aidss1demo5'],
    ['aidsS1demo1', 'aidsS1demo2', 'aidss1demo3', 'aidss1demo4', 'aidss1demo5'],
    ['CSES1demo1', 'aidsS1demo2', 'aidss1demo3', 'aidss1demo4', 'aidss1demo5'],
  ];


  const [selectedOptions, setSelectedOptions] = useState({
    department: '',
    semester: '',
    subject: ''
  });
  const Logout = () => {
    caches.keys().then((names)=>{names.forEach((name)=>{caches.delete(name);})})
    window.location.reload();
  }

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
      setIndex(options2.indexOf(event.target.value) + (deptindex*4));
    }
    else if (deptindex === 3) {
      setIndex(options2.indexOf(event.target.value) + (deptindex*5+1));
    }
    else if (deptindex === 4){
      setIndex(options2.indexOf(event.target.value) + (deptindex*8));
    }
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


  // useEffect(() => {
  //   if (selectedOptions.department === "COMPUTER SCIENCE AND BUSINESS SYSTEM") {
  //     if (selectedOptions.semester === "SEMESTER -1") {
  //       indexref.current = 1;
  //     } else if (selectedOptions.semester === "SEMESTER -2") {
  //       indexref.current = 2;
  //     } else if (selectedOptions.semester === "SEMESTER -3") {
  //       indexref.current = 3;
  //     } else if (selectedOptions.semester === "SEMESTER -4") {
  //       indexref.current = 4;
  //     } else if (selectedOptions.semester === "SEMESTER -5") {
  //       indexref.current = 5;
  //     } else if (selectedOptions.semester === "SEMESTER -6") {
  //       indexref.current = 6;
  //     } else if (selectedOptions.semester === "SEMESTER -7") {
  //       indexref.current = 7;
  //     } else if (selectedOptions.semester === "SEMESTER -8") {
  //       indexref.current = 8;
  //     }
  //   }
  // });


  function handleDownload() {
    const url = "http://localhost:8080/file/downloadbyDSS/" + selectedOptions.department + selectedOptions.semester + selectedOptions.subject;
    axios.get(url)
      .then((Response) => {
        console.log(Response.headers);
        window.location = url;
      })
      .catch((e) => {
        alert("File Not Found");
      });
  }

  return (
    <div className="container">
      <div className="gradient-background">
        <div className="dropdown-section">
          <h1><b>Welcome to Study Repo....</b></h1>
          <p>Please selected the required Department,Semseter and Subject Accordingly</p>
          <h2>DEPARTMENT</h2>
          <select
            className="dropdown"
            value={selectedOptions.department}
            onChange={(event) => handleDeptChange(event, 'department')}
          >
            {options1.map((option, index) => (
              <option key={index} value={option} >
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
            onChange={(event) => handleSemChange(event, 'semester')}
          >
            {options2.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

        </div>
        
        {selectedOptions.department && selectedOptions.semester && (
          <div>
            <div className="dropdown-section">
              <h2>SUBJECT</h2>
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
          </div>
        )}
        {selectedOptions.department && selectedOptions.semester && selectedOptions.subject && (
          <div className="message-section">
            <p id='PC'>
              You have selected <strong>{selectedOptions.department}</strong> department,{' '}
              <strong>{selectedOptions.semester}</strong> semester, and the subject{' '}
              <strong>{selectedOptions.subject}</strong>. Do you want to download the file?
            </p><br></br>
            <button className="button" onClick={handleDownload}>
              Download
            </button>

          </div>

        )}
        <h3><button className="btn btn-outline-danger" onClick={Logout}>Logout</button></h3>

      </div>
    </div>
  );
};

export default YourComponent;
