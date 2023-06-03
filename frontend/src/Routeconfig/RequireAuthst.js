import React, { useEffect, useState } from 'react'
import { Navigate,Outlet } from 'react-router-dom';

function RequireAuthst() {
  // const [currentUser , setCurrentUser] = useState("");
  // useEffect(()=>{
  //   const user = localStorage.getItem('User')
  //   setCurrentUser(user);
  // })
  // alert(currentUser)
  const user = window.localStorage.getItem("User")
  
  return (
    user === "Student" || user === "Faculty" ? <Outlet/>:<Navigate to="/Log"/>
  )
}

export default RequireAuthst