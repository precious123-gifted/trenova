import styled from 'styled-components';

export const HeaderStyle = styled.div`
  
  @media only screen and (min-width: 700px)  {

width:100% ;
height:43vw ;
display:flex ;
justify-content:center ;
align-items:center ;
margin-bottom:10vw ;
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



    } 
    .section2{
        width: 60%;
        display:flex ;
        justify-content:flex-end ;


     .helping-hand{
        width: 130%;
  object-fit: contain;
  object-position:right ;
  aspect-ratio: 4/3;
  opacity:0 ;
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
margin-bottom:18vw ;
.content{
    height:100% ;
    width: 90%;
    display:flex ;
    flex-direction:column ;
    overflow:hidden ;


    .section1{
        height:30% ;
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
  opacity:0 ;
  margin-top: 100%;
 
     
     }

}
}
}

`;
