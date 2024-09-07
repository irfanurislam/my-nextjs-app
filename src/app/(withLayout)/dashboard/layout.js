import Footer from "@/components/Shared/Footer";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div className="min-h-screen">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default layout;
