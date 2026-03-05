import React from "react";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Shop Products</h1>
      <ProductList/>
    </div>
  );
};

export default Home;
