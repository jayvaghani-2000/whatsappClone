import React from "react";
import Sidebar from "./sidebar";

const Dashbard = ({ id }) => {
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <Sidebar id={id} />
    </div>
  );
};

export default Dashbard;
