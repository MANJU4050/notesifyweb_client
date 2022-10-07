import React from "react";
import { Outlet } from "react-router-dom";
import {  Navigate } from "react-router-dom";
import Navbar from "../features/navbar/Navbar";

const SharedLayout = () => {
  
  const token = localStorage.getItem("token");

  return token ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default SharedLayout;
