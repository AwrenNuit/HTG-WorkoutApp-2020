import React from 'react';
import './App.css';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Login />
      <Signup />
      <Home />
      <Footer />
    </>
  );
}

export default App;
