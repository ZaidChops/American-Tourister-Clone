import React from "react";

const ProductCarts = () => {
  return (
    <>
      <div
        className=""
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          paddingTop: "50px",
          paddingBottom: "30px",
        }}
      >
        <span>
          <img
            style={{ width: "180px" }}
            src="src/assets/luggage.webp"
            alt=""
          />
          <h3
            style={{
              textAlign: "center",
              fontSize: "20px",
              color: "gray",
              marginTop: "20px",
            }}
          >
            2 size
          </h3>
          <span
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "70px",
                height: "30px",
                borderRadius: "20px",
                textAlign: "center",
                fontSize: "14px",
                fontWeight: "bold",
                paddingTop: "4px",
                backgroundColor: "gray",
                color: "white",
                border: "1px solid gray",
              }}
            >
              Medium
            </div>
            <div
              style={{
                width: "70px",
                height: "30px",
                borderRadius: "20px",
                textAlign: "center",
                fontSize: "14px",
                fontWeight: "bold",
                paddingTop: "4px",
                backgroundColor: "white",
                border: "1px solid gray",
              }}
            >
              Large
            </div>
          </span>

          <h2 style={{ textAlign: "center", marginTop: "15px" }}>RUBIO</h2>
          <h4 style={{ textAlign: "center" }}>Rating</h4>
          <span style={{display:"flex", justifyContent:"space-evenly"}}>
            <h4 style={{fontSize:"24px", fontWeight:"bold", color:"#D11E47"}}>&#8377; 8,100</h4>
            <h6 style={{paddingTop:"10px", fontSize:"14px"}}>
              &#8377;<strike>10,800</strike>
            </h6>
          </span>
          <button style={{ marginTop:"5px",width:"180px", height:"40px", backgroundColor:"#272727", color:"white",border:"none", borderRadius:"30px", fontSize:"19px", fontWeight:"bold"}}>Add to cart</button>
        </span>
      </div>
      <div className="" style={{ backgroundColor: "white" }}>
        <h1>product cards</h1>
      </div>
      <div className="" style={{ backgroundColor: "white" }}>
        <h1>product cards</h1>
      </div>
      <div className="" style={{ backgroundColor: "white" }}>
        <h1>product cards</h1>
      </div>
      <div className="" style={{ backgroundColor: "white" }}>
        <h1>product cards</h1>
      </div>
      <div className="" style={{ backgroundColor: "white" }}>
        <img src="src/assets/luggage.webp" alt="" />
        <h3>2 size</h3>
        <h3>Medium Large</h3>
        <h3>Colour</h3>
        <h1>Name</h1>
        <h3>Rating</h3>
        <h2>Price</h2>
        <button>Add to cart</button>
      </div>
    </>
  );
};

export default ProductCarts;
