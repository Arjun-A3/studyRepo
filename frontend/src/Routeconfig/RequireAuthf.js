import React, { useEffect, useState } from 'react'
import { Navigate,Outlet } from 'react-router-dom';

function RequireAuthf() {
  const user = window.localStorage.getItem("User")
  return (
    user == "Faculty"? <Outlet/>:<Navigate to="/Log"/>
  )
}

export default RequireAuthf;