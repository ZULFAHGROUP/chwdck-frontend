import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './pages/contact/Contact';
import Customer from './pages/customersPage/Customer';
import Relay from './components/relayComponents/Relay';
import Riders from './riders/Riders';
import Vendors from './pages/vendors/Vendors';
import FAQS from './pages/faq/Faq'
import Blog from './pages/blog/Blog';
// import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Customer />
  },
  {
    path: '/vendors',
    element: <Vendors />
  },
  {
    path: '/contact',
    element: <Contact/>
  },
  {
    path: '/relay',
    element: <Relay />
  },
  {
    path: '/riders',
    element: <Riders />
  },
  {
    path: '/faqs',
    element: <FAQS />

  },
  {
    path:'/blog' ,
    element: <Blog  />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
