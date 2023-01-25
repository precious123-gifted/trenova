import styled from 'styled-components';

export const PopularCoursesSectionStyle = styled.div`
@media only screen and (min-width: 700px) {
width:100vw ;
height:70vh ;
background-color: #191005;
color:#FFD8D4 ;
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
        font-size:2vw ;
        margin-bottom:2vw ;
       
    }
    .summary{
        font-family:Arial, Helvetica, sans-serif ;
        font-size:1.6vw ;
        line-height: 2vw;
        word-spacing: 0.8vw;
       
    }
}




}


@media only screen and (max-width: 700px) and (orientation: portrait) {


    width:100vw ;
height:120vw ;
background-color: #191005;
color:#FFD8D4 ;
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
        font-size:6vw ;
        margin-bottom:8vw ;
       
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
