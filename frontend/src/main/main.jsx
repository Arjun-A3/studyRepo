import React, { useState } from 'react';
import './main.css';


const YourComponent = () => {
  const [semIndex , setSemIndex] = useState();
  const [deptIndex , setDeptIndex] = useState();
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
    'EG',];

  const [selectedOptions, setSelectedOptions] = useState({
    department: '',
    semester: '',
    subject: ''
  });
  const Logout = () =>{
    localStorage.removeItem("User");
    window.location.reload();
  }

  const handleDeptChange = (event, type) => {
    alert(event.target.key)
    setSelectedOptions({
      ...selectedOptions,
      [type]: event.target.value
    });
  };
  const handleSemChange = (event, type) => { 
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
  
  
  

  const handleDownload = () => {
    const url = "http://localhost:8080/file/downloadbyDSS/" + selectedOptions.department + selectedOptions.semester + selectedOptions.subject;
    window.location = url;
  };

  return (
    <div className="container">
      <div className="gradient-background">
        <div className="dropdown-section">
          <h2>DEPARTMENT</h2>
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
        <div className="dropdown-section">
          <h2>SUBJECT</h2>
          <select
            className="dropdown"
            value={selectedOptions.subject}
            onChange={(event) => handleSubChange(event, 'subject')}
          >
            {options3.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
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
        <h3><button onClick={Logout}>Logout</button></h3>
       
      </div>
    </div>
  );
};

export default YourComponent;
