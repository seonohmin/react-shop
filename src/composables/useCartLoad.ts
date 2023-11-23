import { useEffect } from "react";
import { useRecoilValue } from 'recoil';
import { cartState } from '../store/cart'

export const CART_ITEM = 'CART_ITEM';

export const useCartLoad = () => {
  const cart = useRecoilValue(cartState); // Correct variable name
  const setCartData = () => {
    localStorage.setItem(CART_ITEM, JSON.stringify(cart)); // Corrected 'JSON'
  }
  
  useEffect(() => {
    setCartData();
  }, [cart, setCartData]); // Include setCartData in the dependency array
}
