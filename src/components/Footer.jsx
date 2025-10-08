import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white text-center py-3 mt-10">
      <p>{new Date().getFullYear()} Student Manager | Built using React</p>
    </footer>
  );
};

export default Footer;
