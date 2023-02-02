import styled from 'styled-components';

export const ObjectionSectionStyle = styled.div`
@media only screen and (min-width: 700px) {
width:100vw ;
height:240vh ;
background-color: #E5C7C1;
color:#191005 ;
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
}




}


@media only screen and (max-width: 700px) and (orientation: portrait) {


    width:100vw ;
height:580vw ;
background-color: #E5C7C1;
color:#191005 ;
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
    
}

}

  
`;
