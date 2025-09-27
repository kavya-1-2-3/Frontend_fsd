// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";

// function UserList() {
//   const [users, setUsers] = useState([
//     { id: uuidv4(), name: "Alice", email: "alice@example.com" },
//     { id: uuidv4(), name: "Bob", email: "bob@example.com" },
//   ]);

//   const handleDelete = (id) => {
//     setUsers(users.filter((u) => u.id !== id));
//   };

//   return (
//     <div>
//       <h2 className="mb-4">User List</h2>
//       <Link to="/admin/users/add" className="btn btn-primary mb-3">
//         + Add User
//       </Link>
//       <table className="table table-bordered table-striped">
//         <thead className="table-dark">
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.length > 0 ? (
//             users.map((u) => (
//               <tr key={u.id}>
//                 <td>{u.name}</td>
//                 <td>{u.email}</td>
//                 <td>
//                   <button
//                     className="btn btn-sm btn-danger"
//                     onClick={() => handleDelete(u.id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="3" className="text-center">
//                 No users found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default UserList;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function UserList() {
  const [users, setUsers] = useState([
    { id: uuidv4(), name: "Alice", email: "alice@example.com" },
    { id: uuidv4(), name: "Bob", email: "bob@example.com" },
  ]);

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div>
      <h2 className="mb-4">User List</h2>
      <Link to="/admin/users/add" className="btn btn-primary mb-3">
        + Add User
      </Link>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((u) => (
                <tr key={u.id}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(u.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;