import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import AboutUs from './pages/about-us';
import Contact from './pages/contact';
import Error from './pages/error';

const router = createBrowserRouter(createRoutesFromElements([<Route path="/" element={<Home />} />, <Route path="/about" element={<AboutUs />} />, <Route path="/contact" element={<Contact />} />, <Route path="*" element={<Error />} />]));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
