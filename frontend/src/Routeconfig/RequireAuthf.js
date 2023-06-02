import React, { useEffect, useState } from 'react'
import { Navigate,Outlet } from 'react-router-dom';

function RequireAuthf(props) {
  let user = props.user;
  alert(user);
  console.log(user);
  return (
    user === "Faculty"? <Outlet/>:<Navigate to="/Log"/>
  )
}

export default RequireAuthf;