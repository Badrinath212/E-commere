import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import NavBar from './Navbar';

const Home = () => {
  return (
    <div>
      <Header/>
      <NavBar/>
      <Outlet/>
    </div>
  );
};

export default Home;
