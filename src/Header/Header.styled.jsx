import styled from 'styled-components';

export const HeaderStyle = styled.div`
  
  @media only screen and (min-width: 700px) and (orientation: landscape) {

width:100% ;
height:43vw ;
display:flex ;
justify-content:center ;
align-items:center ;
.content{
    height:100% ;
    width: 90%;
    display:flex ;
    justify-content:space-between ;
    align-items:center ;
    overflow: hidden;
   


    .section1{
        height:70% ;
width:40% ;
display:flex ;
flex-direction:column ;
align-items:flex-start ;
color:#191005 ;

.header-text{
    font-size:5vw ;
    text-align: left;
}

.get-started-btn{
    cursor:pointer ;
    margin-top:5vw ;
    font-size:1.4vw ;
    padding:1vw ;
    border-radius:0.5vw ;
    background-color: #191005;
    color:white ;
    transition:0.6s ease-in all ;
    user-select:none;
    &:hover{
        background-color: #B57323;
    color:white ;   
    }
}
    } 
    .section2{
        width: 60%;
     .helping-hand{
        width: 100%;
  object-fit: cover;
  aspect-ratio: 4/3;
     }
    
}
}


  }


@media only screen and (max-width: 700px) and (orientation: portrait) {
    width:100% ;
height:150vw ;
display:flex ;
justify-content:center ;
align-items:center ;
.content{
    height:100% ;
    width: 90%;
    display:flex ;
    flex-direction:column ;
    overflow:hidden ;


    .section1{
        height:24% ;
width:100% ;
display:flex ;
flex-direction:column ;
align-items:flex-start ;
color:#191005 ;

.header-text{
    font-size:10vw ;
    text-align: left;
}


    } 
    .section2{
        width: 100%;
        height:60% ;
        display:flex ;
    flex-direction:column ;
    align-items:center ;
    .helping-hand{
        width: 130%;
  object-fit: contain;
  aspect-ratio: 4/3;
     
     }
    .get-started-btn{
    cursor:pointer ;
    font-size:5vw ;
    padding:3vw ;
    border-radius:1.6vw ;
    background-color: #191005;
    color:white ;
    user-select:none;
    &:active{
        background-color: #B57323;
    color:white ;   
    }
}
}
}
}

`;
