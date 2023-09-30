import React from "react";
import "./cart.scss";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
type CartComponent = {
  image?: string;
  title?: string;
  brand?: string;
  discountPrice?: string;
  price?: string;
  count: string;
  total?: string;
  handleIncrement?: () => void;
  handleDecrement?: () => void;
};
const CartComponent = (props: CartComponent) => {
  const {
    image,
    title,
    brand,
    discountPrice,
    price,
    count,
    total,
    handleDecrement,
    handleIncrement,
  } = props;
  return (
    <tr className="tableBody">
      <td>
        <div className="tableItem">
          <img src={image} alt="" />
          <div className="tableTitle">
            <h4>{title}</h4>
            <p>brand: {brand}</p>
          </div>
        </div>{" "}
      </td>
      <td>
        <div className="price">
          <s>{price} </s> <p> {discountPrice}</p>
        </div>{" "}
      </td>
      <td>
        {" "}
        <div className="quantity">
          <AiFillCaretLeft
            onClick={handleDecrement}
            style={{ cursor: "pointer" }}
          />
          <div className="count">{count}</div>

          <AiFillCaretRight
            onClick={handleIncrement}
            style={{ cursor: "pointer" }}
          />
        </div>
      </td>
      <td>{total} </td>
    </tr>
  );
};

export default CartComponent;
