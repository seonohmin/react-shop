import React from 'react';
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Product, productsListSelctor } from "../store/products";
import { cartState } from "../store/cart";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Rating from "./Rating";
import Breadcrumb from "./Breadcrumb";

const Index = () => {
  const setCartList = useSetRecoilState<Product[]>(cartState);
  const productsList = useRecoilValue(productsListSelctor);
  const { id } = useParams();

  const [product, setProudct] = useState<Product | null>(null);

  const navigate = useNavigate();

  const addCart = () => {
    if (product) {
      setCartList((old) => {
        const newList = [...old, product];
        localStorage.setItem("cart", JSON.stringify(newList));
        return newList;
      });
    }
  };

  useEffect(() => {
    const findProduct = productsList.find(
      (product) => product.id == Number(id)
    );
    if (findProduct == null) {
      navigate("/error");
      return;
    }
    setProudct(findProduct);
  }, [id, productsList, navigate]);

  return product ? (
    <div className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <div>
        <Breadcrumb category={product.category} crumb={product.title} />
        <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
          <figure className="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image">
            <img src={product.image} className="object-contain w-full h-72" />
          </figure>
          <div className="card-body px-1 lg:px-12">
            <h2 className="card-title">
              {product.title}
              <span className="badge badge-accent ml-2">NEW</span>
            </h2>
            <p>{product.description}</p>
            <Rating rate={product.rating.rate} count={product.rating.count} />
            <p className="mt-2 mb-4 text-3xl">${product.price}</p>
            <div className="card-actions">
              <button onClick={addCart} className="btn btn-primary">
                장바구니에 담기
              </button>
              <Link to="/cart" className="btn btn-outline ml-1">
                장바구니로 이동
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Index;
