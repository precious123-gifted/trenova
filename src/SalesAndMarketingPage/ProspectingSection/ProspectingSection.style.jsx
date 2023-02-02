import styled from 'styled-components';

export const ProspectingSectionStyle = styled.div`
.scroll-item{
        opacity:0 ;
        position:relative ;
        bottom:70px ;
        transition:ease-in all ;
    }

@media only screen and (min-width: 700px) {
width:100vw ;
height:165vh ;
background-color: #A38E8A;
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
       
    }
}




}


@media only screen and (max-width: 700px) and (orientation: portrait) {


    width:100vw ;
height:380vw ;
background-color: #A38E8A;
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
       
    }
}

}

  
`;
