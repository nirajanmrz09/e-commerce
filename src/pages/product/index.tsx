/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { getProducts } from "../../api/product";
import { useQuery } from "react-query";
import ProductCard from "../../components/product";
import "./productPage.scss";
import discountedPrice from "../../helper/discount";
import { useDispatch, useSelector } from "react-redux";
import { allCart } from "../../reducers/actions";
const ProductPage = () => {
  const dispatch = useDispatch();
  const { data: products } = useQuery("getProducts", getProducts);
  const reducerPayload = useSelector((state: any) => state.cartItem);

  console.log("products", products);
  const handleItem = (product: any) => {
    const item = {
      ...product,
      discountPrice: discountedPrice(product.price, product.discountPercentage),
      count: 1,
    };

    dispatch(allCart("CART_ITEM", item));
  };
  console.log("reducerPayload------", reducerPayload);

  return (
    <div className="productContainer">
      {products?.products.map((product: any, index: number) => {
        return (
          <ProductCard
            category={product.category}
            brand={product.brand}
            key={index}
            rating={product.rating}
            image={product.thumbnail}
            title={product.title}
            price={product.price}
            discount={product.discountPercentage}
            onClick={() => handleItem(product)}
          />
        );
      })}
    </div>
  );
};

export default ProductPage;
