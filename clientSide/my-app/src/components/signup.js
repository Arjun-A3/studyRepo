import './signup.css';

export function Signup() {
    return (
        <form >
            <div class="x" >
                <div class="text-center mb-3">
                    <p>Sign in with:</p>

                    <button type="button" class="btn btn-link btn-floating mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                        </svg>
                    </button>

                   
                </div>

                <p class="text-center">or:</p>


                <div class="form-outline mb-4">
                    <input type="email" id="loginName" class="form-control" />
                    <label class="form-label" for="loginName">Email or username</label>
                </div>


                <div class="form-outline mb-4">
                    <input type="password" id="loginPassword" class="form-control" />
                    <label class="form-label" for="loginPassword">Password</label>
                </div>


                <div class="row mb-4">
                    <div class="col-md-6 d-flex justify-content-center">

                        <div class="form-check mb-3 mb-md-0">
                            <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                            <label class="form-check-label" for="loginCheck"> Remember me </label>
                        </div>
                    </div>

                    <div class="col-md-6 d-flex justify-content-center">

                        <a href="#!">Forgot password?</a>
                    </div>
                </div>


                <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>


                <div class="text-center">
                    <p>Not a member? <a href="#!">Register</a></p>
                </div>
                </div>
            {/* <div
                class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary" id="footer">
                
            </div> */}

        </form>



    );

}
