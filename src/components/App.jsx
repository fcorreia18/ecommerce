import React from 'react';
import Home from './Home';
import Store from './Store';
import Product from './Product';
import Checkout from './Checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
 
export default function () {

    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" exact element={<Home/>} />
                    <Route path="/store" element={<Store/>} />
                    <Route path="/product" element={<Product/>} />
                    <Route path="/checkout" element={<Checkout/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
