import styled from 'styled-components';

export const PaymentContainerStyle = styled.div`
visibility:hidden ;
a{
  text-decoration:none ;
  color:inherit;
 
}
@media only screen and (min-width: 700px) {
border-radius:6px ;
color:white ;
  position:fixed ;
  height:15vw ;
  width:30vw ;
  background-color:#80804D ;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display:flex ;
  justify-content:center ;
  align-items:center ;

  .content{
    width:90% ;
    height:90% ;
    display:flex ;
    flex-direction:column ;
    align-items:center ;

    .header-div{
      width:100% ;
      display:flex ;
  justify-content:space-between ;
  align-items:center ;
  font-size:2vw ;
 
  border-bottom:2px solid #1A1005;

  .header{
    cursor: pointer;
    color: #1A1005;
    &:active{
      color:white ;
      border-bottom:2px solid blanchedalmond ;
      
    }
  }
  .close-button{
    cursor: pointer;
 position: absolute;
 left:75% ;
 top:70% ;
 font-size:1.5vw ;
  }
    }
    .section2{

display:flex ;
flex-direction:column ;
align-items:center ;
    .description{
font-size:1.7vw ;
margin-bottom:1.8vw ;

    }


.get-started-btn{
  border-radius:3px ; 
  background-color:#62218E ; 
  
  font-size:1.9vw ;
  cursor: pointer;
  &:active{
    background-color:#62211E ;
  }
  span{
    padding:3vw ;
  }
}

  }}


}




@media only screen and (max-width: 700px) and (orientation: portrait) {
  border-radius:6px ;
color:white ;
  position:fixed ;
  height:35vw ;
  width:90vw ;
  background-color:#80804D ;
  position: fixed;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
  display:flex ;
  justify-content:center ;
  align-items:center ;

  .content{
    width:90% ;
    height:90% ;
    display:flex ;
    flex-direction:column ;
    align-items:center ;

    .header-div{
      width:100% ;
      display:flex ;
  justify-content:space-between ;
  align-items:center ;
  font-size:7vw ;
 
  border-bottom:2px solid #1A1005;

  .header{
    cursor: pointer;
    color: #1A1005;
    &:active{
      color:white ;
      border-bottom:2px solid blanchedalmond ;
      
    }
  }
  .close-button{
    cursor: pointer;
 position: absolute;
 left:78% ;
 top:80% ;
 font-size:5vw ;
  }
    }

    .section2{

display:flex ;
flex-direction:column ;
align-items:center ;
    
    .description{
font-size:5vw ;
margin-bottom:1.8vw ;

    }


.get-started-btn{
  border-radius:3px ; 
  background-color:#62218E ; 
  width:60% ;
  font-size:6vw ;
  cursor: pointer;
  &:active{
    background-color:#62211E ;
  }
  span{
    padding:3vw ;
  }
}
    }
  }






}


`;
