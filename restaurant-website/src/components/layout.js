import React from "react";
import Footer from "../components/footer";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
