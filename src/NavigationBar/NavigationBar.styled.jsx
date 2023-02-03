import styled from "styled-components";






export const NavigationBarStyle = styled.div`

a{
    text-decoration:none ;
    color:inherit ;
}

@media only screen and (min-width: 700px) {

color:white ;
width: 100%;
height:5vw ;
background-color: #1A1005 ;
display:flex ;
justify-content:center ;
align-items:center ;
margin-bottom:2vw ;
position: absolute;
top:-20% ;

.content{
    width:90% ;
    height: 100%;
    display:flex ;
    justify-content:space-between ;
    align-items:center ;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
    #trenova-logo{
        width: 7%;
  object-fit: contain;
  aspect-ratio: 4/3;
    cursor: pointer;
    
    }
    
    a {
 text-decoration:none ;
 color:inherit;
}

    .navigations{
        width: 40% ;
        height: 100%;
        display:flex ;
        justify-content:space-between ;
        align-items:center ;
     .navlink{
        display:flex ;
        font-size:1.3vw ;
        justify-content:center ;
        align-items:center ;
        height: 100%;
        cursor: pointer;
        transition:0.5s ease-in all ;
        &:hover,:active{
            font-size:1.8vw ;
            margin-bottom:20px ;
            color: #FFC3BD;
        }
     }
        
    }
}
}



@media only screen and (max-width: 700px) and (orientation: portrait) {

    color:white ;
width: 100%;
height:15vw ;
background-color: #1A1005 ;
display:flex ;
justify-content:center ;
align-items:center ;
margin-bottom:21px ;
position: absolute;
top:-20% ;




.content{
    width:90% ;
    height: 100%;
    display:flex ;
    justify-content:space-between ;
    align-items:center ;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
    #trenova-logo{
    width: 20%;
  object-fit: contain;
  aspect-ratio: 4/3;
    cursor: pointer;
    
    }



    
.menu-icon{
    cursor: pointer;
    display:flex ;
    justify-content:space-between ;
    align-items:center ;
    width:30% ;


    .courses-icon{
        font-size:4.5vw ;
    }

    .menu-hambuger{
        width: 10.2vw;
  object-fit: contain;
  aspect-ratio: 4/3;  
    }
}

}


}
`