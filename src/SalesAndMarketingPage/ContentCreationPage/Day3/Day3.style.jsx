import styled from 'styled-components';

export const Day3Style = styled.div`



@media only screen and (min-width: 700px) {
width:100vw ;
height:160vh ;
background-color: #E5CFC1;
color: #191005;
display:flex ;
justify-content:center ;
padding-top:6vw ;

.content{
    width:90% ;

    .header1{
        font-size:3vw ;
        margin-bottom:3vw ;
       
    } 
    .scroll-item{
        opacity:0 ;
        position:relative ;
        bottom:70px ;
    }
    
    .header2{
        font-size:2vw ;
        margin-bottom:2vw ;
       
    }

    .header3{
        font-size:2.4vw ;
        margin-bottom:2vw ;
       
    }
    .summary1{
        font-family:Arial, Helvetica, sans-serif ;
        font-size:1.6vw ;
        line-height: 3vw;
        word-spacing: 0.8vw;
        margin-bottom:8vw ;
       
    }
    .summary2{
        font-family:Arial, Helvetica, sans-serif ;
        font-size:1.6vw ;
        line-height: 2vw;
        word-spacing: 0.8vw;
        margin-bottom:8vw ;
        text-align:left ;
        li{
            margin-bottom:2vw ;
        }
       
    }


    .get-started-btn {
margin-top:4vw ;
        span{
          cursor:pointer ;
    margin-top:5vw ;
    font-size:1.4vw ;
    padding:1vw ;
    border-radius:0.5vw ;
    background-color: #191502;
    color:white ;
    transition:0.6s ease-in all ;
    user-select:none;
    opacity:1 ;
    &:hover{
        background-color: #B57323;
    color:white ;   
    }   
        }
   
}


}




}


@media only screen and (max-width: 700px) and (orientation: portrait) {


    width:100vw ;
height:495vw ;
background-color: #E5CFC1;
color: #191005;
display:flex ;
justify-content:center ;
padding-top:10vw ;

.content{
    width:90% ;

    .header1{
        font-size:8vw ;
        margin-bottom:15vw ;
       
    }  
    .scroll-item{
        opacity:0 ;
        position:relative ;
        bottom:70px ;
    }
    .header2{
        font-size:6vw ;
        margin-bottom:8vw ;
       
    }
    .header3{
        font-size:6.5vw ;
        margin-bottom:8vw ;
       
    }
    .summary1{
        font-family:Arial, Helvetica, sans-serif ;
        font-size: 5.1vw;
        line-height: 8vw;
        word-spacing: 1.2vw;
        margin-bottom: 14vw;
        
       
    }
    .summary2{
        font-family:Arial, Helvetica, sans-serif ;
        font-size: 5.1vw;
        line-height: 8vw;
        word-spacing: 1.2vw;
        margin-bottom: 14vw;
        text-align:left ;
        li{
            margin-bottom:8vw ;
        }
       
    }

    .get-started-btn{
    cursor:pointer ;
    font-size:5vw ;
    padding:3vw ;
    border-radius:1.6vw ;
    background-color: #191502;
    color:white ;
    user-select:none;
    opacity:1 ;
    margin-top:6vw ;
    &:active{
        background-color: #B57323;
    color:white ;   
    }
}

}

}

  
`;
