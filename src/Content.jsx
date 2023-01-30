import React from 'react';
import {HomeStyled} from './homepage/Home.styled.jsx';
import { DataContext } from './App.jsx';
import { useContext } from 'react';
import NavigationBar from './NavigationBar/NavigationBar.jsx';
import HomeContent from './homepage/HomeContent.jsx';
import SalesAndMarketingPage from './SalesAndMarketingPage/SalesAndMarketingPage.jsx';
import Footer from './Footer/Footer.jsx';
import {Route, Router, Routes,BrowserRouter} from "react-router-dom";




export default function Content() {
   

  return (
    
    <HomeStyled>
      <NavigationBar/>
<BrowserRouter>
      <Routes>
      <Route  path="/" element={<HomeContent/> } />  
      <Route  path="/sales-and-marketing" element={<SalesAndMarketingPage/> } /> 
      </Routes>
  </BrowserRouter>
  <Footer/>
 </HomeStyled>
  );
}
