import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import log from './log.png';
import {Link, json, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import {Navigate, Outlet} from "react-router-dom";
const API_URL = "http://localhost:8080/auth/login"
let isLoggedIn = "";


export const PrivateRoutes = () => {
    if (isLoggedIn == "Stu") 
        return <Navigate to='/Stu'/>
     else if (isLoggedIn == 'Fac') 
        return <Navigate to='/Upload'/>
     else 
       return <Outlet/>
}


export function Login() {
    const navigate = useNavigate();

    const [details, setDetails] = useState({"email": "", "password": "", "desc": ""})


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
        setDetails((prev) => {
            return {
                ...prev,
                "desc": "Student"
            }
        });
        e.preventDefault();
        console.log(details);
        axios.post(API_URL, details).then((Response) => {
            if (Response) {
                alert(Response.data.message);
                isLoggedIn = "Stu";
                window.location = "/stu"
            } else {
                alert("failed")
            }
        }).catch((e) => {
            alert("Falied to signin...Retry!")
        })

    }
    const handleInputt = (e) => {
        setDetails((prev) => {
            return {
                ...prev,
                "desc": "Faculty"
            }
        })
        e.preventDefault();
        isLoggedIn = "Fac";
        console.log(details);
        axios.post(API_URL, details).then((Response) => {
            if (Response) 
                window.location = "/upload";
             else {
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
                                                <input type="email" id="email" name="email" className="form-control" placeholder="Phone number or email address"
                                                    onChange={handleChange}/>

                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="password" id="password" name="password" className="form-control" placeholder='password'
                                                    onChange={handleChange}/>

                                            </div>

                                            <div className="text-center pt-1 mb-5 pb-1">
                                                <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" name="desc" value="Faculty"
                                                    onClick={()=>{handleChange;handleInputt}}>Log
                                                                                  in as Faculty</button>
                                                <button id="b2" className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" name="desc" value="Student"
                                                    onClick={()=>{handleChange;handleInputt}}>Log
                                                                                  in as Student</button>
                                                {/* {()=>{navigate("/Stu")}} */} </div>

                                            <div className="d-flex align-items-center justify-content-center pb-4">
                                                <p className="mb-0 me-2">Don't have an account?</p>
                                                <button type="button" className="btn btn-outline-danger"
                                                    onClick={
                                                        () => {
                                                            navigate('/Signup')
                                                        }
                                                }>Create new</button>
                                            </div>

                                        </form>

                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                    <div className="text-black px-3 py-4 p-md-5 mx-md-4">
                                        <h4 className="mb-4">What We Are?!</h4>
                                        <p className="small mb-0">Our project aims to develop a web-based platform that facilitates the sharing of learning resources between teachers and students. The platform will consist of two login pages, one for teachers and another for students. Teachers can log in to the platform and upload files such as lecture notes, presentations, and assignments. Students, on the other hand, can log in to the platform and view or download these files for their exam preparation. The files uploaded by teachers will be stored on a server and organized by course and topic for easy access by students. The platform will also include a search function that allows students to search for files by keyword.</p>
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
