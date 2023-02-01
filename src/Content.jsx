import React from 'react';
import {HomeStyled} from './homepage/Home.styled.jsx';
import { DataContext } from './App.jsx';
import { useContext } from 'react';
import NavigationBar from './NavigationBar/NavigationBar.jsx';
import HomeContent from './homepage/HomeContent.jsx';
import SalesAndMarketingPage from './SalesAndMarketingPage/SalesAndMarketingPage.jsx';
import Footer from './Footer/Footer.jsx';
import { HashRouter } from 'react-router-dom';
import { Route ,Routes} from 'react-router-dom';


export default function Content() {
   

  return (
 <HashRouter basename={process.env.PUBLIC_URL}>
    <HomeStyled>
      <NavigationBar/>
 
     
      <Routes>
      <Route exact path="/"  element={<HomeContent/> } />
      <Route  path="/sales-and-marketing" element={<SalesAndMarketingPage/> } /> 
     
     </Routes> 
   
  <Footer/>
 </HomeStyled>   </HashRouter>
  );
}
