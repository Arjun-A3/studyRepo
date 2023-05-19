import { useState } from 'react';

import './cssFile/logint.css';


 export function Logint() {
  const [details , setDetails] = useState(
    {
      email:"",
      password:"",
    }
  );

  const handleChange = (event) =>{
    const {name ,value} = event.target;
    setDetails((prev)=> {return {...prev, [name]:value}})   
  }
   
  const handleInput = (e) =>{
    e.preventDefault();
    console.log(details);
  }
 
  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
          <div className="mb-4 text-center text-xl-start px-md-8 px-lg-19 px-xl-0">
                            <h1 className="display-3 fw-bold mb-3 ls-sm ">
                                <span className="text-primary">StudyRepo</span> <br></br> To Teach is to Touch a Life Forever....
                            </h1>
                            
                    
                            {/* <a href="/" className="btn btn-light" target="_blank"><i className="bi bi-cart-check-fill me-2"></i>Student ?</a> */}
                            <a href="/" id='lf'> <div id="outer">
  <div class="button_slide slide_down">Student ?
</div></div></a>
                            <div className="mt-5">
                    
                            </div>
                        </div>
        
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleInput} >
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
               

                {/* <button type="button" className="btn btn-primary btn-floating mx-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </button>

                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </button> */}
              </div>

             

<br></br>
              <div className="form-outline mb-4">
                <input type="email" id="form3Example3" className="form-control form-control-lg" name="email" onChange={handleChange}
                  placeholder="Enter a valid email address" />
                <label className="form-label" htmlFor="form3Example3" id="E"><b>Email address</b></label>
              </div>


              <div className="form-outline mb-3">
                <input type="password" id="form3Example4" className="form-control form-control-lg" name="password" onChange={handleChange}
                  placeholder="Enter password" />
                <label className="form-label" htmlFor="form3Example4" id="P"><b>Password</b></label>
              </div>

              <div className="d-flex justify-content-between align-items-center">
              <p className="small fw-bold mt-2 pt-1 mb-0" id="d"><b>Don't have an account?</b> 
                   <a href="/Signup"className="link-danger">Register</a></p>
                
                <a href="#!" id="FP">Forgot password?</a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                {/* <button type="submit" className="btn btn-primary btn-lg" 
                >Login</button> */}
              
                 <div class="text-center text-lg-start mt-4 pt-2">
                   
                  <center>
   <a href="/Main" class="bn13">Login</a>

               
                 </center>
            </div></div>
              {/* <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div> */}
              {/* <center>  
              <p className="lead fw-normal mb-0 me-3" id="s"><b>Sign in with</b></p>
             <br></br><br></br>
              <button type="button" className="btn btn-primary btn-floating mx-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                  </svg>
                </button></center> */}
            </form>
          </div>
        </div>
      </div>
      {/* <div
        className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

        <div className="text-white mb-3 mb-md-0">
          Copyright © 2023. All rights reserved.
        </div>



        <div>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="#!" className="text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

      </div> */}
    </section>
  );
}
