import styled from 'styled-components';

export const HeaderStyle = styled.div`
  
  @media only screen and (min-width: 700px)  {

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
   
   


    .section1{
        height:70% ;
width:40% ;
display:flex ;
flex-direction:column ;
align-items:flex-start ;
color:#191005 ;

.header-text{
    font-size:4.7vw ;
    text-align: left;
    position: relative;
    top:-30%;
    opacity:0 ;
}


.summary{
        font-family:Arial, Helvetica, sans-serif ;
        font-size:1.6vw ;
        line-height: 3vw;
        word-spacing: 0.8vw;
        margin-bottom:1vw ;
        text-align: left;
       
    } 

.get-started-btn{
    cursor:pointer ;
    margin-top:5vw ;
    font-size:1.4vw ;
    padding:1vw ;
    border-radius:0.5vw ;
    background-color: #191005;
    color:#F4EEE6 ;
    transition:0.6s ease-in all ;
    user-select:none;
    opacity:0 ;
    &:hover{
        background-color: #B57323;
    color:white ;   
    }
}
    } 
    .section2{
        width: 60%;
        display:flex ;
        justify-content:flex-end ;
     .helping-hand{
        width: 100%;
  object-fit: contain;
  object-position: right;
  aspect-ratio: 4/3;
  opacity:0 ;
  position: relative;
  margin-top: 100%;

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
        height:38% ;
width:100% ;
display:flex ;
flex-direction:column ;
align-items:flex-start ;
color:#191005 ;

.header-text{
    font-size:10vw ;
    text-align: left;
    position: relative;
    top:-30%;
    opacity:0 ;
}

.summary{
        font-family:Arial, Helvetica, sans-serif ;
        font-size: 5.1vw;
        line-height: 8vw;
        word-spacing: 1.2vw;
        margin-bottom: 14vw;
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
        width: 100%;
  object-fit: contain;
  aspect-ratio: 4/3;
  opacity:0 ;
  margin-top: 100%;
     
     }
    .get-started-btn{
    cursor:pointer ;
    font-size:5vw ;
    padding:3vw ;
    border-radius:1.6vw ;
    background-color: #191005;
    color:#F4EEE6 ;
    user-select:none;
    opacity:0 ;
    &:active{
        background-color: #B57323;
    color:white ;   
    }
}
}
}
}

`;
