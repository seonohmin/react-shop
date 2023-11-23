import { selector } from "recoil";

const productsURL = 'https://fakestoreapi.com/products'

interface Rating {
  readonly rate?: 0;
  readonly count?: 0;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
  rating: Rating;
}

export const productsList = selector<Product[]>({
  key: 'productsList',
  get: async () => {
    try {
      const response = await fetch(productsURL);
      return (await response.json()) || [];
    } catch (error) {
      console.log(`Error: \n${error}`);
      return [];
    }
  },
}); 

export const productsListSelctor = selector<Product[]>({
  key: "productsListSelctor",
  get: async () => {
    try {
      const response = await fetch(productsURL as string);
      return (await response.json()) || [];
    } catch (error) {
      console.log(`Error: \n${error}`);
      return [];
    }
  },
});

export const fashionListSelctor = selector<Product[]>({
  key: "fashionListSSelctor",
  get: ({ get }) => {
    const productsList = get(productsListSelctor);
    return (
      productsList.filter((product) => product.category.includes("clothing")) ||
      []
    );
  },
});

export const digitalListSelctor = selector<Product[]>({
  key: "digitalListState",
  get: ({ get }) => {
    const productsList = get(productsListSelctor);
    return (
      productsList.filter((product) => product.category == "electronics") || []
    );
  },
});

export const accessoryListSelctor = selector<Product[]>({
  key: "accessoryListSelctor",
  get: ({ get }) => {
    const productsList = get(productsListSelctor);
    return (
      productsList.filter((product) => product.category == "jewelery") || []
    );
  },
});
