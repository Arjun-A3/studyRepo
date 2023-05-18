import { useState } from 'react';
import './cssFile/signup.css';

export function Signup() {
    const [details , setDetails] = useState(
        {
            fullName:"",
            email:"",
            password:"",
            options:"",

        }
    );
    const handleChange = (event) =>{
        const {name,value} = event.target;
        setDetails((prev)=>{
            return {...prev,[name]:value}
        })
        
    }
    const handleInput = (event) =>{
     event.preventDefault();
     if(!(details.password===details.password2))
     {
        alert("please type the same password");
     }
     else{
        console.log(details);

     }

    }
    return (
        <section className="vh-100" style={{ backgroundcolor: "#eee" }}>
              
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                    
                        <div className="card text-black" style={{ borderRadius: "25px" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                        <form onSubmit={handleInput} className="mx-1 mx-md-4">
                                            <div className="btn-group d-flex flex-row align-items-center mb-5" data-toggle="buttons" id='B'>
                                                
                                                <label className="btn btn-primary">
                                                    <input type="radio" name="options" id="Teacher" onChange={handleChange} autoComplete="off" value="T"/> Teacher
                                                </label>
                                                <label className="btn btn-primary">
                                                    <input type="radio" name="options" id="Student" onChange={handleChange} autoComplete="off" value="S"/> Student
                                                </label>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" id="form3Example1c" className="form-control" name='fullName' onChange={handleChange}/>
                                                    <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="email" id="form3Example3c" className="form-control" name='email' onChange={handleChange}/>
                                                    <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4c" className="form-control" name='password' onChange={handleChange}/>
                                                    <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4cd" className="form-control" name='password2' onChange={handleChange} />
                                                    <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                                                </div>
                                            </div>
                                          



                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4" >
                                                <button type="submit" className="btn btn-primary btn-lg">Register</button>
                                            </div>

                                        </form>

                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                            className="img-fluid" alt="Sample image" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    );

}
