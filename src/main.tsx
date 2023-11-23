import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil'; 
import './index.css';
import App from './App';
import Index from './pages/Home'
import Accessory from './pages/Accessory'
import Cart from './pages/Cart'
import Fashion from './pages/Fashion';
import NotFound from './pages/NotFound';
import Digital from './pages/Digital';
import Detail from "./components/ProductView";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Index /> },
      {
        path: '/fashion',
        element: <Fashion />,
      },
      {
        path: '/accessory',
        element: <Accessory />,
      },
      {
        path: '/digital',
        element: <Digital />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/product/:id',
        element: <Detail />,
      },
      {
        path: '/NotFound',
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot> 
      <RouterProvider router={router} />
      
    </RecoilRoot>
  </React.StrictMode>
);
