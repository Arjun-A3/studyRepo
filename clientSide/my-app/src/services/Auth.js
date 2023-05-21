import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";


const login =(details) => {
    const {email,password} = details;
    return axios.post(API_URL+"login",{email,password})
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
    const {id , username , email , password , role} = details;
    return axios.post(`${API_URL}signup`,JSON.stringify(details));
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