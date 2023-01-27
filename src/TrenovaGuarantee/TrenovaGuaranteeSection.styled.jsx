import styled from 'styled-components';

export const TrenovaGuaranteeSectionStyle = styled.div`
@media only screen and (min-width: 700px) {

width:100vw ;
height:75vh ;
background-color: #F8F4EF;
color:#191005 ;
display:flex ;
justify-content:center;
align-items:center ;


.content{
    width:90% ;
    .writeup{
        font-family:Arial, Helvetica, sans-serif ;
        font-size: 1.6vw;
line-height: 2vw;
word-spacing: 0.8vw;
    }
}

}


@media only screen and (max-width: 700px) and (orientation: portrait) {


    width:100vw ;
height:235vw ;
background-color: #F8F4EF;
color:#191005 ;
display:flex ;
justify-content:center;
align-items:center ;


.content{
    width:90% ;
    .writeup{
        font-family:Arial, Helvetica, sans-serif ;
        font-size: 5.1vw;
line-height: 8vw;
word-spacing: 1.2vw;
    }
}

}

  
`;
