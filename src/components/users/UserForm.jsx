// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";

// function UserForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newUser = { id: uuidv4(), name, email };
//     console.log("User added:", newUser);

//     // After adding, navigate back
//     navigate("/admin/users");
//   };

//   return (
//     <div>
//       <h2 className="mb-4">Add User</h2>
//       <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
//         <div className="mb-3">
//           <label className="form-label">Name</label>
//           <input
//             type="text"
//             className="form-control"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter name"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Email</label>
//           <input
//             type="email"
//             className="form-control"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter email"
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-success">
//           Save
//         </button>
//       </form>
//     </div>
//   );
// }

// export default UserForm;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = { id: uuidv4(), name, email };
    console.log("User added:", newUser);

    navigate("/admin/users");
  };

  return (
    <div>
      <h2 className="mb-4">Add User</h2>
      <div className="card shadow-sm">
        <div className="card-body p-4" style={{ maxWidth: "400px" }}>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                required
              />
            </div>
            <button type="submit" className="btn btn-success">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserForm;