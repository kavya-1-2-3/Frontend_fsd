// import React from "react";
// import { Outlet } from "react-router-dom";
// import Navbar from "../common/Navbar";
// import Sidebar from "../common/Sidebar";
// import Footer from "../common/Footer";

// function AdminLayout() {
//   return (
//     <div className="d-flex flex-column vh-100">
//       {/* Top Navbar */}
//       <Navbar />

//       <div className="d-flex flex-grow-1">
//         {/* Sidebar */}
//         <Sidebar />

//         {/* Main content */}
//         <main className="flex-grow-1 p-4 bg-light">
//           <Outlet /> {/* Nested routes (Dashboard, Products, Users) will appear here */}
//         </main>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }

// export default AdminLayout;
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Sidebar from "../common/Sidebar";
import Footer from "../common/Footer";

function AdminLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Top Navbar */}
      <Navbar />

      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <main className="flex-grow-1 p-4 bg-light">
          <Outlet /> {/* Nested routes (Dashboard, Products, Users) will appear here */}
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AdminLayout;