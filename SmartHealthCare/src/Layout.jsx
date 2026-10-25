import React from "react";
import { Outlet } from "react-router-dom";
import BottomNavbar from "./Common/BottomNavbar";
import TopNavbar from "./Common/TopNavbar";
import Footer from "./Components/Footer";
const Layout = () => {
  return (
    <div>
      <BottomNavbar />
      <TopNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
