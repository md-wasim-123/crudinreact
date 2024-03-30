import React from 'react'
import './App.css';
import { Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage'
import Navbar from './components/Navbar'
import NoPage from './pages/NoPage';
import ListData from './pages/ListData';
import { useSelector } from 'react-redux';
import Editdata from './components/Editdata';

const App = () => {
  const log = useSelector((state) => state.logged)
  console.log(log)
  return (
    <div className='bg-color'>
      <Navbar />
      <Routes>
        {!log ?
          (<Route path="/" element={<LoginPage />} />
          )
          : (
            <>
            <Route path="list" element={<ListData />} />
            <Route path="edit/:id" element={<Editdata />} />
            </>
          )
        }
        <Route path="*" element={<NoPage />} />
      </Routes>

    </div>
  )
}

export default App

