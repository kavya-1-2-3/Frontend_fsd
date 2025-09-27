// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";

// function AddProduct() {
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newProduct = { id: uuidv4(), name, price: Number(price) };
//     console.log("Product added:", newProduct);

//     // After adding, navigate back to product list
//     navigate("/admin/products");
//   };

//   return (
//     <div>
//       <h2 className="mb-4">Add Product</h2>
//       <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
//         <div className="mb-3">
//           <label className="form-label">Product Name</label>
//           <input
//             type="text"
//             className="form-control"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter product name"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Price (₹)</label>
//           <input
//             type="number"
//             className="form-control"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             placeholder="Enter price"
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

// export default AddProduct;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = { id: uuidv4(), name, price: Number(price) };
    console.log("Product added:", newProduct);

    navigate("/admin/products");
  };

  return (
    <div>
      <h2 className="mb-4">Add Product</h2>
      <div className="card shadow-sm">
        <div className="card-body p-4" style={{ maxWidth: "400px" }}>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Product Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter product name"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Price (₹)</label>
              <input
                type="number"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter price"
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

export default AddProduct;