import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Breadcrumb from "../components/Breadcrumb";
import { Product } from "../store/products";
import { cartState } from "../store/cart";
import Confirm from "../components/Confirm";
import CartList from "./CartList";

const CartView = () => {
  const cartItems = useRecoilValue<Product[]>(cartState);
  
  const [itemCounts, setItemCounts] = useState<{ [key: string]: number }>(() => {
    const storedItemCounts = localStorage.getItem("itemCounts");
    return storedItemCounts
      ? JSON.parse(storedItemCounts)
      : Object.fromEntries(cartItems.map((item) => [item.id.toString(), 1]));
  });
  
  const calculateTotalPrice = () => {
    let sumPrice = 0;
    for (const item of cartItems) {
      const count = itemCounts[item.id.toString()] || 1;
      sumPrice += item.price * count;
    }
    return sumPrice;
  };

  const [totalPrice, setTotalPrice] = useState<number>(() => {
    const storedTotalPrice = localStorage.getItem("totalPrice");
    return storedTotalPrice ? parseFloat(storedTotalPrice) : calculateTotalPrice();
  });

  const handleItemCountChange = (id: number, count: number) => {
    const updatedItemCounts = { ...itemCounts, [id.toString()]: count };
    setItemCounts(updatedItemCounts);
  };

  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
    localStorage.setItem("itemCounts", JSON.stringify(itemCounts));
    localStorage.setItem("totalPrice", totalPrice.toString());
  }, [itemCounts, totalPrice]);

  return (
    <>
      <Breadcrumb category="홈" crumb="장바구니" />
      <div className="mt-6 md:mt-14 px-2 lg:px-0">
        {cartItems.length === 0 ? (
          <div>
            <h1 className="text-2xl">장바구니에 물품이 없습니다.</h1>
            <Link to="/" className="btn btn-primary mt-10">
              담으러 가기
            </Link>
          </div>
        ) : null}
      </div>
      <div className="lg:flex justify-between mb-20">
        <CartList
          cartItems={cartItems}
          itemCounts={itemCounts}
          onItemCountChange={handleItemCountChange}
        />
        <div className="self-start shrink-0 flex items-center mt-10 mb-20">
          <span className="text-xl md:text-2xl">
            총: ${totalPrice.toFixed(2)}
          </span>
          <label
            htmlFor="confirm-modal"
            className="modal-button btn btn-primary ml-5"
          >
            구매하기
          </label>
        </div>
      </div>
      <Confirm />
    </>
  );
};

export default CartView;
