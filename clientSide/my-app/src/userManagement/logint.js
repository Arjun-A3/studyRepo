import { useRef, useState } from 'react';

import './cssFile/logint.css';
import { AuthService } from '../services/Auth';
import {  useNavigate } from 'react-router-dom';


export function Logint() {

  const navigate = useNavigate();
  const form = useRef();
  const checkbtn = useRef();
  const [details, setDetails] = useState(
    {
      email: "",
      password: "",
      des:"teacher",
    }
  );

  const [loading,setLoading] = useState(false);
  const [msg , setMsg] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetails((prev) => { return { ...prev, [name]: value } })
  }

  const handleInput = (e) => {
    e.preventDefault();
    

    setMsg("");
    setLoading(false);

    form.current.validateAll();

    if(checkbtn.current._errors.length === 0){
      AuthService.login(details)
      .then(() => {
        navigate("/main");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoading(false);
        setMsg(resMessage);
      }
    );
  } else {
    setLoading(false);
  }
};

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
              <a href="/" id='lf'> 
                <div class="AKM">Student ?
                </div></a>
             
            </div>

          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleInput} >
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">


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
                  <a href="/Signup" className="link-danger">Register</a></p>

                <a href="#!" id="FP">Forgot password?</a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                {/* <button type="submit" className="btn btn-primary btn-lg" 
                >Login</button> */}

                <div class="text-center text-lg-start mt-4 pt-2">

                  <center>
                  <button type='submit' style={{backgroundColor:"transparent" ,  border:"1px solid transparent" , width:"15%"}}>
                    <a  class="bn13">Login</a>
                    </button>
                  </center>
                </div></div>
             
            </form>
          </div>
        </div>
      </div>
    
    </section>
  );
}
