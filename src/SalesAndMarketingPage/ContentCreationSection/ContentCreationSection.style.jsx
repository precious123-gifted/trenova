import styled from 'styled-components';

export const ContentCreationSectionStyle = styled.div`

.scroll-item{
        opacity:0 ;
        position:relative ;
        bottom:70px ;
        transition:ease-in all ;
    }

@media only screen and (min-width: 700px) {
width:100vw ;
height:290vh ;
background-color: #802B27;
color:#F8F4F4 ;
display:flex ;
justify-content:center ;
padding-top:6vw ;

.content{
    width:90% ;

    .header1{
        font-size:3vw ;
        margin-bottom:3vw ;
       
    }  
    .header2{
        margin-bottom:2vw ;
        img{
            width:30% ;
    aspect-ratio:3/4;
    object-fit:contain ;
        }
       
    }
    .summary{
        font-family:Arial, Helvetica, sans-serif ;
        font-size:1.6vw ;
        line-height: 3vw;
        word-spacing: 0.8vw;
        margin-bottom:1vw ;
       
    } 
    #summary1{
        margin-bottom:6vw ;
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
height:690vw ;
background-color: #802B27;
color:#F8F4F4 ;
display:flex ;
justify-content:center ;
padding-top:10vw ;

.content{
    width:90% ;

    .header1{
        font-size:8vw ;
        margin-bottom:15vw ;
       
    }  
    .header2{
        margin-bottom:8vw ;
        img{
            width:70% ;
    aspect-ratio:3/4;
    object-fit:contain ;
        }
       
    }
    .summary{
        font-family:Arial, Helvetica, sans-serif ;
        font-size: 5.1vw;
        line-height: 8vw;
        word-spacing: 1.2vw;
        margin-bottom:13vw ;
       
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
        }}
    
        .get-started-btn{
    cursor:pointer ;
    font-size:5vw ;
    padding:3vw ;
    border-radius:1.6vw ;
    background-color: #191502;
    color:white ;
    user-select:none;
    opacity:1 ;
    margin-top:5vw ;
    &:active{
        background-color: #B57323;
    color:white ;   
    }
}

}

}

  
`;
