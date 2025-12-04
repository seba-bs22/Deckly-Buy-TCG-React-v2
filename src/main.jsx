import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import App from './App.jsx';
import Categories from './pages/Categories.jsx';
import Home from './pages/Home.jsx';
import Offers from './pages/Offers.jsx';
import Contact from './pages/Contact.jsx';
import Login from './pages/Login.jsx';
import Search from './pages/Search.jsx';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to="/login" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="offers" element={<Offers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
