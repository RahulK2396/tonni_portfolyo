import React, { useEffect } from 'react';
import { Fragment } from 'react';
import './styles/globals.css';
import Header from './components/layout/Header';
import About from './components/About';
import { activeSkillProgress } from './utilits';
import MobileMenu from './components/layout/MobileMenu';
import Layout from './components/layout/Layout';
import Home from './components/Home';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import TimeLine from './components/TimeLine';
import Priceing from './components/Priceing';
import Testimonials from './components/Testimonials';
import News from './components/News';
import Contact from './components/Contact';
import Mouse from './components/layout/Mouse';
import PogressBar from './components/layout/PogressBar';
import store from './Store';
import {  storePortfolioDetils } from './Action';

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    fetchData()
    window.addEventListener("scroll", activeSkillProgress);
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      store.dispatch(storePortfolioDetils(data.user))
    } catch (error) {
      alert(error)
      console.error('Error fetching data:', error);
      throw error; // or dispatch an action with the error
    }
  };

  return (
    <Fragment>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <Layout>
      <MobileMenu />
      <Header />
      <Home />
      {/* /HERO */}
      {/* ABOUT */}
      <About />
      {/* /ABOUT */}
      {/* SERVICE */}
      <Service />
      {/* /SERVICE */}
      {/* PORTFOLIO */}
      <Portfolio />
      {/* /PORTFOLIO */}
      {/* TIMELINE */}
      <TimeLine />
      {/* /TIMELINE */}
      {/* PRICING */}
      <Priceing />
      {/* /PRICING */}
      {/* TESTIMONIALS */}
      <Testimonials />

      {/* /TESTIMONIALS */}
      {/* NEWS */}
      <News />
      {/* /NEWS */}
      {/* CONTACT */}
      <Contact />
      <Mouse />
      <PogressBar />
    </Layout>
    </Fragment>
  );
};

export default App;
