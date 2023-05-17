
import { useState } from 'react';
import './loginst.css';


function Loginst(props) {
  const {getInputDetails} = props;

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
    getInputDetails(details);  
  }
 


  
  
  
  return (
    <div className="vh-100" id="st">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
          <div className="mb-4 text-center text-xl-start px-md-8 px-lg-19 px-xl-0">
          <h1 className="display-3 fw-bold mb-3 ls-sm ">
                                <span className="text-primary">StudyRepo</span> <br></br> Place to Get Answer....
                            </h1>
                                   
                    <a href="/loginteacher" target="_blank">   <div className="button_slide slide_down" >
                        <i className="bi bi-cart-check-fill me-2"></i>Teacher ?</div></a>
                           
                            <div className="mt-5">
                            </div>
                        </div>
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleInput}>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              </div>

             


              <div className="form-outline mb-4">
                <input type="email" id="form3Example3" name="email" className="form-control form-control-lg" onChange={handleChange} 
                  placeholder="Enter a valid email address" />
                <label className="form-label" ht="form3Example3" id="E" ><b>Email address</b></label>
              </div>


              <div className="form-outline mb-3">
                <input type="password" id="form3Example4" name="password" className="form-control form-control-lg" onChange={handleChange} 
                  placeholder="Enter password" />
                <label className="form-label" ht="form3Example4" id="P" ><b>Password</b></label>
              </div>

              <div className="d-flex justify-content-between align-items-center">

                <div className="form-check mb-0">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                  <label className="form-check-label" ht="form2Example3" id="R">
                   <b> Remember me</b>
                  </label>
                </div>
                <a href="#!">Forgot password?</a>
              </div>
              <a href="/" className="bn13" ><button type='submit'>Login</button></a>

              <div>
                {/* <button type='Submit' className="bn13">Login</button> */}
                <p className="small fw-bold mt-2 pt-1 mb-0" id="d"><b>Don't have an account?</b> <a href="/signup"
                  className="link-danger">Register</a></p>
              </div>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>
              <center>  
              <p className="lead fw-normal mb-0 me-3" id="s"><b>Sign in with</b></p>
             <br></br><br></br>
              <button type="button" className="btn btn-primary btn-floating mx-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                  </svg>
                </button></center>
            </form>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Loginst;
