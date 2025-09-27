// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";

// function ProductList() {
//   // Mock data for products
//   const [products, setProducts] = useState([
//     { id: uuidv4(), name: "Laptop", price: 75000 },
//     { id: uuidv4(), name: "Headphones", price: 3000 },
//     { id: uuidv4(), name: "Keyboard", price: 1500 },
//   ]);

//   const handleDelete = (id) => {
//     setProducts(products.filter((product) => product.id !== id));
//   };

//   return (
//     <div>
//       <h2 className="mb-4">Product List</h2>
//       <Link to="/admin/products/add" className="btn btn-primary mb-3">
//         + Add Product
//       </Link>
//       <table className="table table-bordered table-striped">
//         <thead className="table-dark">
//           <tr>
//             <th>Name</th>
//             <th>Price (₹)</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.length > 0 ? (
//             products.map((p) => (
//               <tr key={p.id}>
//                 <td>{p.name}</td>
//                 <td>{p.price}</td>
//                 <td>
//                   <Link
//                     to={`/admin/products/update/${p.id}`}
//                     state={{ product: p }}
//                     className="btn btn-sm btn-warning me-2"
//                   >
//                     Edit
//                   </Link>
//                   <button
//                     className="btn btn-sm btn-danger"
//                     onClick={() => handleDelete(p.id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="3" className="text-center">
//                 No products found.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ProductList;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function ProductList() {
  const [products, setProducts] = useState([
    { id: uuidv4(), name: "Laptop", price: 75000 },
    { id: uuidv4(), name: "Headphones", price: 3000 },
    { id: uuidv4(), name: "Keyboard", price: 1500 },
  ]);

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      <h2 className="mb-4">Product List</h2>
      <Link to="/admin/products/add" className="btn btn-primary mb-3">
        + Add Product
      </Link>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Price (₹)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.price}</td>
                  <td>
                    <Link
                      to={`/admin/products/update/${p.id}`}
                      state={{ product: p }}
                      className="btn btn-sm btn-warning me-2"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(p.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;