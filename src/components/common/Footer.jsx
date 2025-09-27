import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center p-3 mt-auto">
      <p className="mb-0">© {new Date().getFullYear()} MyApp. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
