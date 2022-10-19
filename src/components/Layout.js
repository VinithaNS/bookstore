import { Outlet } from "react-router-dom";

import React from "react";

import "../App.css";

function Layout() {
  return (
    <>
    <div >
      <div className="d-flex lay">
        <div className="cent border">
          <div className="expand-lg text-center ">
            <div className="header"><h1>Welcome</h1></div>
            <div><Outlet /></div>
                          
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Layout;