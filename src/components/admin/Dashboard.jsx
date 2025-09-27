// import React from "react";

// function Dashboard() {
//   return (
//     <div>
//       <h2 className="mb-4">Admin Dashboard</h2>
//       <div className="row">
//         {/* Total Products */}
//         <div className="col-md-4 mb-3">
//           <div className="card text-bg-primary h-100">
//             <div className="card-body">
//               <h5 className="card-title">Total Products</h5>
//               <p className="card-text fs-4">25</p> {/* Replace with dynamic data */}
//             </div>
//           </div>
//         </div>

//         {/* Total Users */}
//         <div className="col-md-4 mb-3">
//           <div className="card text-bg-success h-100">
//             <div className="card-body">
//               <h5 className="card-title">Total Users</h5>
//               <p className="card-text fs-4">12</p> {/* Replace with dynamic data */}
//             </div>
//           </div>
//         </div>

//         {/* Pending Orders */}
//         <div className="col-md-4 mb-3">
//           <div className="card text-bg-warning h-100">
//             <div className="card-body">
//               <h5 className="card-title">Pending Orders</h5>
//               <p className="card-text fs-4">5</p> {/* Replace with dynamic data */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
import React from "react";

function Dashboard() {
  return (
    <div>
      <h2 className="mb-4">Admin Dashboard</h2>
      <div className="row">
        {/* Total Products */}
        <div className="col-md-4 mb-3">
          <div className="card text-bg-primary h-100">
            <div className="card-body">
              <h5 className="card-title">Total Products</h5>
              <p className="card-text fs-4">25</p>
            </div>
          </div>
        </div>

        {/* Total Users */}
        <div className="col-md-4 mb-3">
          <div className="card text-bg-success h-100">
            <div className="card-body">
              <h5 className="card-title">Total Users</h5>
              <p className="card-text fs-4">12</p>
            </div>
          </div>
        </div>

        {/* Pending Orders */}
        <div className="col-md-4 mb-3">
          <div className="card text-bg-warning h-100">
            <div className="card-body">
              <h5 className="card-title">Pending Orders</h5>
              <p className="card-text fs-4">5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;