import React from 'react'
import { Navigate,Outlet } from 'react-router-dom';

function RequireAuthst() {
  const user = localStorage.getItem("User");
  return (
    user === "Student" || user === "Faculty" ? <Outlet/>:<Navigate to="/Log"/>
  )
}

export default RequireAuthst