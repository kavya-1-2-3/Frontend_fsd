// import React from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../components/common/Navbar";
// import Footer from "../components/common/Footer";

// function HomePage() {
//   return (
//     <div className="d-flex flex-column vh-100">
//       {/* Top Navbar */}
//       <Navbar />

//       {/* Main content */}
//       <div className="container flex-grow-1 d-flex flex-column justify-content-center align-items-center">
//         <h1 className="mb-3">Welcome to MyApp 🎉</h1>
//         <p className="lead text-center mb-4">
//           This is a demo app built with React + Bootstrap.  
//           You can explore authentication, product management, user management, and more.
//         </p>
//         <div>
//           <Link to="/login" className="btn btn-primary me-2">
//             Login
//           </Link>
//           <Link to="/signup" className="btn btn-success">
//             Signup
//           </Link>
//         </div>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }

// export default HomePage;
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function HomePage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Top Navbar */}
      <Navbar />

      {/* Main content */}
      <div className="container flex-grow-1 d-flex flex-column justify-content-center align-items-center">
        <h1 className="mb-3">Welcome to MyApp 🎉</h1>
        <p className="lead text-center mb-4">
          This is a demo app built with React + Bootstrap. You can explore
          authentication, product management, user management, and more.
        </p>
        <div>
          <Link to="/login" className="btn btn-primary me-2">
            Login
          </Link>
          <Link to="/signup" className="btn btn-success">
            Signup
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;