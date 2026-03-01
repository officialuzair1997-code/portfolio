import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../common/Navbar/Nav";
import Footer from "../common/footer/Footer";
const LayoutMain = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar hamesha top me */}
      <Nav />

      {/* Page content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer hamesha bottom me */}
      <Footer />
    </div>
  );
};

export default LayoutMain;
