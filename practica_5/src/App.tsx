import React from 'react';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import './App.css';
import {Home} from './Pages/Home';
import {ServicesList} from './components/ServicesList';
import RoutesApp from './components/RoutesApp';

function App() {
  return (
    <RoutesApp/>
  );
}

export default App;