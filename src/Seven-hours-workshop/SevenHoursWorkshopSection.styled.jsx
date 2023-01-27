import styled from 'styled-components';

export const SevenHoursWorkshopSectionStyle = styled.div`

@media only screen and (min-width: 700px) {
width:100vw ;
height:180vh ;
background-color:#E9D5BD ;

display:flex ;
justify-content:center ;
align-items:center ;

.content{
    width:90% ;
    
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
.heading{
    width:90% ;
    height:40% ;
    .number-div{
        font-size:1.4vw ;
width: 16%;
height:40% ;
border-radius:1000px ;
background-color:#E9D5BD;
color:#191005 ;
display:flex ;
justify-content:center ;
align-items:center ;
    }
}
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

    width:100vw ;
height:455vw ;
background-color:#E9D5BD ;

display:flex ;
justify-content:center ;
align-items:center ;

.content{
    width:90% ;
   
    display:flex ;
    flex-direction:column ;
    align-items:center ;

    .header{
        color:#191005 ;
        font-size: 5.1vw;
        line-height: 8vw;
        word-spacing: 1.2vw;
        margin-bottom:15vw ;
    }
    .boxes-container{
        width:100% ;
        display:flex ;
    flex-direction:column ;
    align-items:center ;

    #box{
        border-radius:1.5vw;
        color:#D4B3AD ;
        width:100% ;
        height:70vw ;
        background-color:#191005 ;
        font-family: Arial,Helvetica,sans-serif;
        font-size: 5.1vw;
        line-height: 8vw;
        word-spacing: 1.2vw;
        padding:1.2vw ;
        margin-bottom:20vw ;
.heading{
    width:90% ;
    height:20% ;
    .number-div{
        font-size:5vw ;
width: 16%;
height:40% ;
border-radius:1000px ;
background-color:#E9D5BD;
color:#191005 ;
display:flex ;
justify-content:center ;
align-items:center ;
    }
}
    }
    .section1{
        width:100% ;
        display:flex ;
        flex-direction:column ;
        align-items:center ;
        justify-content:space-between ;
        margin-bottom:8vw ;


        
    }

    .section2{
        width:100% ;
        display:flex ;
        flex-direction:column ;
        align-items:center ;
        justify-content:space-between ;
        
    }
    }
}



}

  
`;
