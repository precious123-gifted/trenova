import styled from 'styled-components';

export const SevenHoursWorkshopSectionStyle = styled.div`

@media only screen and (min-width: 700px) {
width:100vw ;
height:160vh ;
background-color:#E9D5BD ;

display:flex ;
justify-content:center ;
align-items:center ;

.content{
    width:90% ;
    height:80% ;
    display:flex ;
    flex-direction:column ;
    align-items:center ;

    .header{
        color:#191005 ;
        font-size: 2vw;
        margin-bottom:10vw ;
    }
    .boxes-container{
        width:100% ;
        display:flex ;
    flex-direction:column ;
    align-items:center ;

    #box{
        border-radius:0.8vw;
        color:#D4B3AD ;
        width:40vw ;
        height:45vh ;
        background-color:#191005 ;
        font-family: Arial,Helvetica,sans-serif;
font-size: 1.4vw;
line-height: 2vw;
word-spacing: 0.8vw;
padding:1.2vw ;
    }
    .section1{
        width:100% ;
        display:flex ;
        justify-content:space-between ;
        margin-bottom:8vw ;


        
    }

    .section2{
        width:100% ;
        display:flex ;
        justify-content:space-between ;  
    }
    }
}


}


@media only screen and (max-width: 700px) and (orientation: portrait) {



}

  
`;
