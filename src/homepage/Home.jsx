import React from 'react';
import {HomeStyled} from './Home.styled.jsx';
import { DataContext } from '../App.jsx';
import { useContext } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar.jsx';
import HomeContent from './HomeContent.jsx';


export default function Home() {
   

  return (
    <HomeStyled>
      <NavigationBar/>
  <HomeContent/>
 </HomeStyled>
  );
}
