import React from "react";
import "./product.scss";
import { AiFillStar } from "react-icons/ai";
import discountedPrice from "../../helper/discount";
type ProductCardTypes = {
  image: string;
  brand: string;
  rating: number;
  category?: string;
  title: string;
  price: number;
  discount?: number;
  onClick?: () => void;
};
const ProductCard = (props: ProductCardTypes) => {
  const { image, brand, rating, category, title, price, discount, onClick } =
    props;
  const actualPrice = discountedPrice(price, discount);
  return (
    <div className="productWrapper">
      <div className="discount">{discount}%</div>
      <div className="productImage">
        <img src={image} />
      </div>
      <div className="productContent">
        <div className="producBrandRating">
          <p>
            Brand: <span>{brand}</span>
          </p>
          <p className="rating">
            <AiFillStar color={"#FACA15"} />
            Rating <span>{rating}</span>
          </p>
        </div>
        <div className="productDetails">
          <h4>{title}</h4>
          <div className="addToCart">
            <p>
              <s>${price} </s>
              <span>{actualPrice}</span>
            </p>
            <button className="buttonCart" onClick={onClick}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
