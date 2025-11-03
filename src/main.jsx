
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Rooms from './pages/Rooms.jsx'
import './styles.css'
import Home from './pages/Home'
createRoot(document.getElementById('root')).render(
  <BrowserRouter><Routes><Route path='/' element={<Home/>} /></Routes></BrowserRouter>
)
