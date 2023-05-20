import axios from "axios";

const API_URL = "";


const login =(details) => {
    console.log(details);
    return axios.post(API_URL+"login",details)
    .then((Response)=>{
        if(Response.data.username)
        localStorage.setItem("User",JSON.stringify(Response.data));
        return Response.data;
    });
};

const logout = () => {
    localStorage.removeItem("User");
    return axios.post(API_URL+"logout")
    .then((response)=>{return response.data});
}

const signup = (details) => {
    return axios.post(API_URL+"signup",details);

}
const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };


export const AuthService = {
    login,
    logout,
    signup,
    getCurrentUser,
}