import React from 'react';
import {HomeStyled} from './homepage/Home.styled.jsx';
import { DataContext } from './App.jsx';
import { useContext } from 'react';
import NavigationBar from './NavigationBar/NavigationBar.jsx';
import HomeContent from './homepage/HomeContent.jsx';
import SalesAndMarketingPage from './SalesAndMarketingPage/SalesAndMarketingPage.jsx';
import ProfessionalMarketingPage from './SalesAndMarketingPage/ProfessionalMarketingPage/ProfessionalMarketingPage.jsx';
import Footer from './Footer/Footer.jsx';
import { HashRouter } from 'react-router-dom';
import { Route ,Routes} from 'react-router-dom';


export default function Content() {
   

  return (
 <HashRouter >
    <HomeStyled>
      <NavigationBar/>
 
     
      <Routes>
      <Route exact path="/"  element={<HomeContent/> } />
      <Route exact path="/sales-and-marketing" element={<SalesAndMarketingPage/> }/>
     <Route path='/sales-and-marketing/professional-telemarketing' element={<ProfessionalMarketingPage/>} />
     </Routes> 
   
  <Footer/>
 </HomeStyled>   </HashRouter>
  );
}
