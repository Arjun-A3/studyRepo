
import { useState } from 'react';
import './cssFile/loginst.css';


function Loginst(props) {
  const { getInputDetails } = props;

  const [details, setDetails] = useState(
    {
      email: "",
      password: "",
      role:"student",
    }
  );


  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetails((prev) => { return { ...prev, [name]: value } })
  }

  const handleInput = (e) => {
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
              <div>
                <a href="/loginteacher">   
                  <div className="AKM" >
                  Teacher?!
                  </div>
                </a>

                <div className="mt-5">
                </div>
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
                <p className="small fw-bold mt-2 pt-1 mb-0" id="d"><b>Don't have an account?</b> <a href="/signup"
                  className="link-danger">Register</a></p>
               
                <a href="#!">Forgot password?</a>
              </div>
              <br></br><br></br><center>
                <button type='submit' style={{backgroundColor:"transparent" ,  border:"1px solid transparent" , width:"15%"}}>
                <a  class="bn13">Login</a>
                </button>

              </center>

              <div>
                

              </div>
           
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Loginst;
