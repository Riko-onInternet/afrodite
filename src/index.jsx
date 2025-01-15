import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import './index.css';

import { ChakraProvider } from '@chakra-ui/react';

import { createBrowserRouter, RouterProvider, } from "react-router-dom";

/* Import page */
import Home from './main.jsx';
import About from './assets/page/about';
import Cart from './assets/page/carrello';
import Checkout from './assets/page/checkout';
import Contact from './assets/page/contact';
import Material from './assets/page/material';
import Products from './assets/page/prodotti';
import Prodotto from './assets/page/product.jsx';
import Finale from './assets/page/finalpage.jsx';

import CartProvider from './component/cartprovider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "checkout",
    element: <Checkout />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "material",
    element: <Material />,
  },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "bag",
    element: <Prodotto />,
  },
  {
    path: "finale",
    element: <Finale />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </CartProvider>
  </React.StrictMode>
)
