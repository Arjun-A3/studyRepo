import React, { useEffect, useState } from 'react'
import { Navigate,Outlet } from 'react-router-dom';

function RequireAuthst(props) {
  let user = props.user;
  return (
    user === "Student" || user === "Faculty" ? <Outlet/>:<Navigate to="/Log"/>
  )
}

export default RequireAuthst