import React, { useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/Navbar';
import { DarkModeProvider } from './context/DarkModeContext';
import Drawer from "./components/Drawer";
import { cartState } from './store/cart';
import Footer from './components/Footer';

const queryClient = new QueryClient();

function App() {
  const $hamburger = useRef<HTMLInputElement>(null);
  const setCartList = useSetRecoilState(cartState);

  useEffect(() => {
    const cartListString = localStorage.getItem("cart");
    if (cartListString) {
      const cartList = JSON.parse(cartListString);
      setCartList(cartList);
    }
  }, [setCartList]);

  const closeOverlay = () => {
    $hamburger?.current?.click();
  }

  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <input type="checkbox" id="side-menu" className="drawer-toggle" ref={$hamburger} />
        <section className="drawer-content">
          <Navbar />
          <section className="main main pt-16">
            <Outlet />
          </section>
          <Footer />
        </section>
        <Drawer closeOverlay={closeOverlay} />
      </DarkModeProvider>
    </QueryClientProvider>
  );
}

export default App;
