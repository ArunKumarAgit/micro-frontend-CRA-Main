import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import BGCComponent from './components/BGC/BGCComponent';
import InitiateBGC from './components/BGC/initiateBGC/InitiateBGC';
// import Table from './components/table/Table';
import DetailComponent from './components/Common/DetailComponent';
import Home from './components/home/Home';
function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/bgc" element={<BGCComponent />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bgc/reqDetailComp/addbgc" element={<InitiateBGC />} />
        <Route path="/bgc/reqDetailComp" element={<DetailComponent />} />
      </Routes>
    </>
  );
}

export default App;
