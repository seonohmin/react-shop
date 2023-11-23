import React from 'react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import Slider from '../components/Slider';
import ProductList from "../components/ProductList";
import { productsListSelctor } from "../store/products";
import { accessoryListSelctor } from "../store/products";
import { digitalListSelctor } from "../store/products";

export default function Home() {
  const productsList = useRecoilValue(productsListSelctor);
  const accessoryList = useRecoilValue(accessoryListSelctor);
  const digitalList = useRecoilValue(digitalListSelctor);

  return (
    <RecoilRoot>
      <Slider />
      <article className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
        <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
          패션
        </h2>
        <ProductList data={productsList.slice(0, 4)} />
      </article>
      <article className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
        <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
          액세서리
        </h2>
        <ProductList data={accessoryList.slice(0, 4)} />
      </article>
      <article className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 mb-20 xl:container mx-auto">
        <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
          디지털
        </h2>
        <ProductList data={digitalList.slice(0, 4)} />
      </article>
    </RecoilRoot>
  );
}

