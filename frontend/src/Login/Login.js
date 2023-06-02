import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import log from './log.png';
import {useState} from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
const API_URL = "http://localhost:8080/auth/login"

export function Login() {
    const nav = useNavigate();
    

    const [details, setDetails] = useState({"email": "", "password": ""})

    const addDataIntoCache = (cacheName , url , response) =>{
        const data = new Response(JSON.stringify(response));
        if('caches' in window){
        caches.open(cacheName)
        .then((cache)=>{cache.put(url,data);alert("userInfro added to cache!")});
    }
    }
    const handleChange = (event) => {
        const {name, value} = event.target;
        setDetails((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleInputst = (e) => {
        e.preventDefault();
        if (details.desc === undefined || details.desc === null) {
            details.desc = "Student";
          }
        console.log(details);
        axios.post(API_URL, details).then((Response) => {   
            if (Response) {
                addDataIntoCache('userInfo','http://localhost:3000',Response.data.message);
                nav('/main');     
            } else {
                alert("failed")
            }
        }).catch((e) => {
            alert("Falied to signin...Retry!")
        })
    }
    const handleInputt = (e) => {
        e.preventDefault();
        if (details.desc === undefined || details.desc === null  ) {
            details.desc = "Faculty";
          }
        console.log(details);
        axios.post(API_URL, details).then((Response) => {
            if (Response) {      
                addDataIntoCache('userInfo','http://localhost:3000',Response.data.message);
                nav('/upload')
            } else {
                alert("failed")
            }
        }).catch((e) => {
            alert("Falied to signin...Retry!")
        })

    }
    return (
        <>
            <div id="con" className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="card rounded-3 text-black">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="card-body p-md-5 mx-md-4">

                                        <div className="text-center">
                                            <center>
                                                <img src={log}
                                                    id="image"
                                                    alt="logo"/></center>

                                        </div>

                                        <form>
                                            <p id="fontcolor">Please Login To Your Account</p>

                                            <div className="form-outline mb-4">
                                                <input type="email" id="email" name="email" className="form-control" placeholder="email address"
                                                    onChange={handleChange}/>

                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="password" name="password" className="form-control" placeholder='password'
                                                    onChange={handleChange}/>

                                            </div>

                                            <div className="text-center pt-1 mb-5 pb-1">
                                                <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button"
                                                    onClick={handleInputt}>Login as Faculty</button>
                                                <button id="b2" className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button"
                                                    onClick={handleInputst}>Login as Student</button>
                                                {/* {()=>{navigate("/Stu")}} */} </div>

                                            <div className="d-flex align-items-center justify-content-center pb-4">
                                                <p className="mb-0 me-2">Don't have an account?</p>
                                                <button type="button" className="btn btn-outline-danger"
                                                    onClick={()=>{window.location="/signup"}}>Create new</button>
                                            </div>

                                        </form>

                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                    <div className="text-black px-3 py-4 p-md-5 mx-md-4">
                                        <h4 className="mb-4">What We Are?!</h4>
                                        <p className="small mb-0">Our project aims to develop a web-based platform that facilitates the sharing of learning resources between teachers and students. The platform will consist of two login pages, one for teachers and another for students. Teachers can log in to the platform and upload files such as lecture notes, presentations, and assignments. Students, on the other hand, can log in to the platform and  download these files for their exam preparation. The files uploaded by teachers will be stored on a server and organized by course and topic for easy access by students. The robustness, efficiency, and security of this website are enhanced through the utilization of React.js, Spring Boot, and MongoDB in its development.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
