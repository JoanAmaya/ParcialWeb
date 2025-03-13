import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Food from './components/Food';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <BrowserRouter>
   <Routes>
    <Route path="" element={<Login/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="home/:titulo" element={<Food/>}/>
    </Routes>
    </BrowserRouter>
    
  </>
);


