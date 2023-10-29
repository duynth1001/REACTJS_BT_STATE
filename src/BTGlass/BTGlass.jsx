import React, { useState } from "react";
import "./style.css";
import data from "./dataGlasses.json";
import modelImg from  './model.jpg'
import { ProductList } from "./ProductList";
export const BTGlass = () => {
  const [productDetail, setProductDetail] = useState({
    "id": 1,
    "price": 30,
    "name": "GUCCI G8850U",
    "url": "./glassesImage/v1.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
});
const handleProductDetail = (product) => {
  setProductDetail(product);
};
  return (
    <div className="view ">
      <br />
      <div className="container-justify-content-center">
        <div className="black-text text-center ">
          <h2>TRY GLASSES APP ONLINE</h2>
          <br />
          <br />
        </div>
        <div className="card-group d-flex justify-content-center">
          <div className="card-justify-content-center">
            <img
              className="card-img-top "
              src={modelImg}
              style={{
                width: "15rem",
                height: "15rem",
                position:'relative'
              }}
            />
          
            <div className="card-body">
              <br />
              <div
                className="container"
                style={{
                  width: "15rem",
                  backgroundColor: "#FFDFDF",
                }}
              >
                <h3 className="card-text-center">{productDetail.name}</h3>

                <p className="card-text-center">
               {productDetail.desc}
                </p>
              </div>
            </div>
          </div>
          <div className="card-justify-content-center px-5">
            <img 
              src={modelImg}
              style={{
                width: "15rem",
                height: "15rem",
                position: 'relative'
              }}
            />
              <img  src={productDetail.url}
              style={{
                width: "8rem",
                position:'absolute',
                left: '33.8%',
                top: '25%',
                opacity: '0.5'
              }} />
          </div>
        </div>
        <div className="black-text text-center container  "
         style={{
          width: "80rem",
          backgroundColor: "#FFDFDF",
        }}
        >
      <ProductList 
              handleProductDetail={handleProductDetail}
      data={data}/>

          <br />
          <br />
        </div>
      </div>
    </div>
  );
};
