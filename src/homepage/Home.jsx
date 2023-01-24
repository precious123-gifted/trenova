import React from 'react';
import {HomeStyled} from './Home.styled.jsx';
import { DataContext } from '../App.jsx';
import { useContext } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar.jsx';


export default function Home() {
   

  return (
    <HomeStyled>
      <NavigationBar/>
    <div className='home-content'>
   
 </div>  
 </HomeStyled>
  );
}
