import './Signup.css';
import validator from 'validator';

import { useState } from 'react';
import { Navigate, json } from 'react-router-dom';
import axios from 'axios';
import { Login } from '../Login/Login';

const API_URL = "http://localhost:8080/auth/"
export function Signup() {
  const [isvalidP, setisvalidP] = useState(false);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const validate = (value) => {

    if (validator.isStrongPassword(value, {
      minLength: 6, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setisvalidP(true);
    } else {
      setisvalidP(false);
    }
  }
  const [details, setDetails] = useState(
    {
      "firstName": "",
      "lastName": "",
      "email": "",
      "password": "",
      "desc": "",
    }
  );


  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetails((prev) => {
      return { ...prev, [name]: value }
    })

  }
  const handleChangeEmail = (event) => {
    const { name, value } = event.target;
    if (!isValidEmail(value)) {
      const validationSymbol = document.querySelector('.validation-symbol');
            validationSymbol.classList.remove('valid');
    }
    else {
      axios.post(`${API_URL}verify`, details)
        .then((Response) => {
          if (Response.data.message === "Valid") {
            setDetails((prev) => {
              return { ...prev, [name]: value }
            })
            const validationSymbol = document.querySelector('.validation-symbol');
            validationSymbol.classList.add('valid');
          }
          else {
            alert(Response.data.message);
          }
        })
        .catch(e => console.log("Error"))
    }
  }
  const handleChangePass = (event) => {
    const { name, value } = event.target;
    validate(value);
    if (isvalidP) {
      setDetails((prev) => {
        return { ...prev, [name]: value }
      })
      const validationSymbolp = document.querySelector('.passvalid');
      validationSymbolp.classList.add('valid');
    }
    else{
      const validationSymbolp = document.querySelector('.passvalid');
      validationSymbolp.classList.remove('valid');
    }
  }
  const handleInput = (event) => {
    event.preventDefault();
    console.log(details);
    if (details.desc === "Faculty") {
      const response = window.prompt("What is the Faculty Passcode")
      if (response === "9979") {
        axios.post(`${API_URL}signup`, details)
          .then((Response) => { if (Response) window.location = "/" })
          .catch(e => alert("Failed to register,please contact dev"))
      }
      else {
        alert("Wrong Passcode !!!")
        window.location.reload();
      }
    }
    else {
      axios.post(`${API_URL}signup`, details)
        .then((Response) => { if (Response) window.location = "/" })
        .catch(e => alert("Failed to register,please contact dev"))

    }
  }




  return (
    <div class="vh-100 gradient-custom">
      <div class="container1 py-5 h-100">
        <div class="row justify-content-center align-items-center h-100">
          <div class="col-12 col-lg-9 col-xl-7">
            <div class="card shadow-2-strong card-registration" id='con' >
              <div class="card-body p-4 p-md-5">
                <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                <form onSubmit={handleInput}>

                  <div class="row">
                    <div class="col-md-6 mb-4">

                      <div class="form-outline">
                        <input type="text" name="firstName" class="form-control form-control-lg" placeholder='First Name' onChange={handleChange} />

                      </div>

                    </div>
                    <div class="col-md-6 mb-4">

                      <div class="form-outline">
                        <input type="text" name="lastName" class="form-control form-control-lg" placeholder='Lastname' onChange={handleChange} />

                      </div>

                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-4 d-flex align-items-center">

                      <div class="form-outline datepicker w-100">
                        <div class="validation-symbol" is></div>
                        <input type="text" class="form-control form-control-lg" name='email' placeholder='Email' onKeyUp={handleChangeEmail} isvalidE />
                      </div>

                    </div>
                    <div class="col-md-6 mb-4">

                      <h6 class="mb-2 pb-1">Role: </h6>

                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="desc" id="S" onChange={handleChange}
                          value="Student" />
                        <label class="form-check-label" for="S">Student</label>
                      </div>

                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="desc" id="F" onChange={handleChange}
                          value="Faculty" />
                        <label class="form-check-label" for="F">Faculty</label>
                      </div>



                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-4 pb-2">

                      <div class="form-outline">
                      <div class="validation-symbol passvalid" is></div>
                        <input type="password" name="password" class="form-control form-control-lg" placeholder='Password' onChange={handleChangePass} isvalidP />

                      </div>

                    </div>
                    <div class="col-md-6 mb-4 pb-2">



                    </div>
                  </div>

                  <div class="row">
                    <div class="col-12">

                      {/* <select class="select form-control-lg">
                      <option value="1" disabled>Choose option</option>
                      <option value="2">Subject 1</option>
                      <option value="3">Subject 2</option>
                      <option value="4">Subject 3</option>
                    </select>
                    <label class="form-label select-label">Choose option</label> */}

                    </div>
                  </div>
                  {/* ()=>{settologin(true)} */}

                  <div class="mt-4 pt-2">
                    <input class="btn btn-primary btn-lg" type="submit" value="Submit" />
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}