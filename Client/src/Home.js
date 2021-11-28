import React,{useEffect} from 'react';
import Navbar2 from './components/Navbar2';
import AboutUs from './components/AboutUs';
import Body1 from './components/Body1';
import Services from './components/Services';
import Footer from './components/Footer';

const Home = () => {
  const showbar = () => {
    var a = document.getElementById('search-nav');
    a.classList.remove('search-hide');

   
    
}

useEffect(() => {
    showbar();

})
 
  return(
    <>
     
      <Navbar2/>
      <AboutUs/>
      <Body1/>
      <Services/>
      <Footer/>
      
    </>
  );
};

export default Home;
