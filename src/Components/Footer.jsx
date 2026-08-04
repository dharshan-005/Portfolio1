import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div>{/* Logo */}</div>
        <p className="text-cream/40">
          © {new Date().getFullYear()} Dharshan. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
