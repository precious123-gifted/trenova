import styled from 'styled-components';

export const FooterStyle = styled.div`
a{
    color:inherit ;
    text-decoration:none ;
    &:hover{
        text-decoration:underline ;
    }
}

.whatsapp-container{
    position:fixed ;
    background: radial-gradient(39.37% 56% at 40.91% 60.63%, #2F1715 0%, #191005 100%) ;
    height:70px ;
    width:100px ;
    top:50% ;
    left:92.5% ;
    border-bottom-left-radius:4px;
    border-top-left-radius:4px;
    display:flex ;
    justify-content:center;
    align-items:center ;

    .con{
        height:100% ;
        width:100% ;
        display:flex ;
        justify-content:space-around ;
        align-items:center ;

        .leftArrow{
            cursor: pointer;
        }
        .whatsappLogo{
            cursor: pointer;
        }
    }
}
  @media only screen and (min-width: 700px) {

width:100vw ;
height:17vw ;
background: radial-gradient(39.37% 56% at 40.91% 60.63%, #2F1715 0%, #191005 100%) ;
color:#FFC3BD ;
display:flex ;
flex-direction:column;
align-items:center ;
justify-content:space-between ;
.content{
    margin-top:2vw ;
width:90% ;
display:flex ;
justify-content:space-between ;


.header{
        font-size:1.5vw ;
        margin-bottom:2vw ;
    }
    #box{
        font-family:Arial, Helvetica, sans-serif ;
        width:27% ;
        display:flex ;
        flex-direction:column ;
        align-items:flex-start ;
        text-align:left ;
    }
}

footer{
    width:100% ;
    display:flex ;
    justify-content:center ;
    align-items:center ;
    background-color:#0C0702 ;
}




  }


  @media only screen and (max-width: 700px) and (orientation: portrait) {
    width:100vw ;
height:210vw ;
background: radial-gradient(39.37% 56% at 40.91% 60.63%, #2F1715 0%, #191005 100%) ;
color:#FFC3BD ;
display:flex ;
flex-direction:column;
align-items:center ;

.content{
    width:90% ;  
    height:100% ;
    display:flex ;
    flex-direction:column ;
    justify-content:space-between ;
    align-items:flex-start ;
    margin-top:6vw ;
    margin-bottom:4vw ;

    .header{
        font-size:7vw ;
        
    }
    #box{
        width:100% ;
        display:flex ;
        flex-direction:column ;
        align-items:flex-start ;
        text-align:left ;
        font-family: Arial,Helvetica,sans-serif;
font-size: 5.1vw;
line-height: 8vw;
word-spacing: 1.2vw;
    }
}


footer{
    width:100% ;
    display:flex ;
    justify-content:center ;
    align-items:center ;
    background-color:#0C0702 ;
}

  }


`;
