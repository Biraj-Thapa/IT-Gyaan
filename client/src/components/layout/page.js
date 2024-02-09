"use client"
import React from "react";
import Nav from "@/components/navbar/page";


const page = ({ children }) => {
  return (
    <div className="app">
      <Nav />
      {children}
      
    </div>
  );
};

export default page;