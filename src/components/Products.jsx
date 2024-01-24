import React from "react";
import ProductCarts from "./ProductCarts";

const Products = () => {
  return (
    <>
      <div style={{ backgroundColor: "#F6F7F9" }}>
        <div className="">
          <img
            src="src/assets/clp-backpack.webp"
            alt=""
            style={{ width: "100%", height: "40vh" }}
          />
        </div>
        <div style={{display:"flex", justifyContent:"center"}}>
        <div className="" style={{
          width:"95%",
          // height:"auto",
          backgroundColor:"",
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap:"20px 20px",
          padding:"10px"
        }}>
          
          <ProductCarts/>

        </div>
        </div>
      </div>
    </>
  );
};

export default Products;
