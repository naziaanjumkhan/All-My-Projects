import React from "react";
import ProductCart from "./ProductCart";

const products = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Andoride", price: 800 },
  { id: 3, name: "grinder", price: 800 },
  { id: 4, name: "mobile", price: 800 },
  { id: 5, name: "HeadPhones", price: 800 },
];

const ProductList = () => {
  return (
    <div className="row">
      {products.map((p) => (
        <div key={p.id} className="col-md-3 mb-4">
          <ProductCart product={p} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
