/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "./cart.scss";
import CartComponent from "./cartComponent";
import { useDispatch, useSelector } from "react-redux";
import { allCart } from "../../reducers/actions";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector((state: any) => state.cartItem);
  const dispatch = useDispatch();
  const nagivate = useNavigate();
  // const total = cartItems
  //   .map((item: any) => item.count * item.price)
  //   .reduce((acc: any, current: any) => acc + current, 0);
  const total = cartItems
    .reduce((acc: any, item: any) => acc + item.count * item.discountPrice, 0)
    .toFixed(2);
  console.log("total", total);
  const handleDecrement = (cartItem: any) => {
    console.log("in");
    dispatch(allCart("DECREMENT", cartItem));
  };
  const handleIncrement = (cartItem: any) => {
    console.log("in");
    dispatch(allCart("INCREMENT", cartItem));
  };
  const handleClear = () => {
    dispatch(allCart("CLEAR", {}));
    nagivate("/");
  };
  return (
    <div className="tableContainer">
      <table className="table">
        <tr>
          <th>Item </th>
          <th>Price </th>
          <th>Quantity </th>
          <th>Total </th>
        </tr>
        {cartItems.map((cartItem: any, index: number) => {
          return (
            <CartComponent
              key={index}
              image={cartItem.thumbnail}
              title={cartItem.title}
              brand={cartItem.title}
              price={cartItem.price}
              discountPrice={cartItem.discountPrice}
              count={cartItem.count}
              total={(cartItem.discountPrice * cartItem.count).toFixed(2)}
              handleDecrement={() => handleDecrement(cartItem)}
              handleIncrement={() => handleIncrement(cartItem)}
            />
          );
        })}
        <tr className="totalPrice">
          <td colSpan={2}>Total </td>
          <td colSpan={3}>$ {total}</td>
        </tr>
      </table>
      <div className="cartButton">
        <button className="buttonCart" onClick={handleClear}>
          Clear Cart
        </button>
        <button className="buttonCheckout" onClick={handleClear}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
