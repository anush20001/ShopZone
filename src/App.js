import "./App.css";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { productsData } from "./api/api";
import Banner from "./components/home/Banner";
import Signin from "./pages/Signin";
import Registration from "./pages/Registration";
import Cart from "./pages/Cart";
import Checkout from "./pages/checkout";
import Order from "./pages/Order";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,

  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";


const Layout = () => {
  return (
    <div>
      <Header />
    
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} loader={productsData}></Route>
        <Route path="/cart" element={<Cart />}></Route>
       
      </Route>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/order" element={<Order />}></Route>
     
    </Route>
  )
  );
  return (
    <div className="font-bodyFont bg-gray-100   ">
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer/>
  </div>
  );
}

export default App;
