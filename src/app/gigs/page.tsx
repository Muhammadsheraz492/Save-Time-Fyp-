"use client";
import After_login_NavBar from "@/homepage/componet/after_login_nav/page";
import React from "react";

import Tab from "@/homepage/componet/tabs/page";
import { FaInfoCircle } from "react-icons/fa";
import Image from "next/image";

function Page() {
  return (
    <div>
      <After_login_NavBar />
      <div
        style={{
          height: 20,
        }}
      />
      <Tab />
      <div
        style={{
          height: 20,
        }}
      />
     
    </div>
  );
}

export default Page;
