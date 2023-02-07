import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../../components/NavBar/NavBar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;