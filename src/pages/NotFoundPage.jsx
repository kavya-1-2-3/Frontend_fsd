// import React from "react";
// import { Link } from "react-router-dom";

// function NotFoundPage() {
//   return (
//     <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
//       <h1 className="display-1 text-danger">404</h1>
//       <h3 className="mb-3">Page Not Found</h3>
//       <p className="mb-4">Oops! The page you’re looking for doesn’t exist.</p>
//       <Link to="/" className="btn btn-primary">
//         Go Home
//       </Link>
//     </div>
//   );
// }

// export default NotFoundPage;
import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
      <h1 className="display-1 text-danger">404</h1>
      <h3 className="mb-3">Page Not Found</h3>
      <p className="mb-4">Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>
    </div>
  );
}

export default NotFoundPage;