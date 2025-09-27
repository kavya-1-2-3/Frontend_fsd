// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// function UpdateProduct() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Get product passed from ProductList
//   const product = location.state?.product;

//   const [name, setName] = useState(product?.name || "");
//   const [price, setPrice] = useState(product?.price || "");

//   const handleUpdate = (e) => {
//     e.preventDefault();

//     const updatedProduct = { ...product, name, price: Number(price) };
//     console.log("Updated product:", updatedProduct);

//     // After updating, navigate back
//     navigate("/admin/products");
//   };

//   if (!product) {
//     return <p className="text-danger">No product selected for update.</p>;
//   }

//   return (
//     <div>
//       <h2 className="mb-4">Update Product</h2>
//       <form onSubmit={handleUpdate} style={{ maxWidth: "400px" }}>
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
//         <button type="submit" className="btn btn-primary">
//           Update
//         </button>
//       </form>
//     </div>
//   );
// }

// export default UpdateProduct;
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function UpdateProduct() {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product;

  const [name, setName] = useState(product?.name || "");
  const [price, setPrice] = useState(product?.price || "");

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedProduct = { ...product, name, price: Number(price) };
    console.log("Updated product:", updatedProduct);

    navigate("/admin/products");
  };

  if (!product) {
    return <p className="text-danger">No product selected for update.</p>;
  }

  return (
    <div>
      <h2 className="mb-4">Update Product</h2>
      <div className="card shadow-sm">
        <div className="card-body p-4" style={{ maxWidth: "400px" }}>
          <form onSubmit={handleUpdate}>
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
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateProduct;