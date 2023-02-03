import styled from 'styled-components';

export const ContactPageStyle = styled.div`
  
  .scroll-item{
        opacity:0 ;
        position:relative ;
        bottom:70px ;
    }

  @media only screen and (min-width: 700px) {

    width:100vw ;
height:150vh ;
background-color: #191005;
color:white;
display:flex ;
justify-content:center ;
padding-top:6vw ;

.content{
    width:90% ;
    height:90% ;
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    .header1{
        font-size:3vw ;
        margin-bottom:3vw ;
       
    }

form{
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    height:75% ;
width:40% ;

    .input-div{
        height:40% ;
        width:100% ;
        display:flex ;
        flex-direction:column ;
        align-items:center ;
        justify-content:space-between ;
        margin-bottom:5vw ;

        .input-wrapper{
            display:flex ;
        flex-direction:column ;
        font-size:1.4vw ;
        align-items:flex-start ;
        justify-content:space-between ; 
         width:100% ;
         height:25% ;
        }
        input{
            background-color:white ;
            border-radius:0.2vw;
            border:none ;
            outline:none ;
            width:100% ;
            height:80% ;
            font-size:1.2vw ;
            padding-left:6px ;
            padding-right:6px ;
        }
    }



.textarea-div{
width:100% ;
textarea{
border:none ;
border-radius:0.3vw ;
resize:none ;
outline:none ;
width:100% ;
font-size:1.2vw ;
            padding-left:6px ;
            padding-right:6px ;

}

}


}


.get-started-btn{
    cursor:pointer ;
    font-size:1.4vw ;
    padding:1vw ;
    border-radius:0.5vw ;
    background-color:white ;
    color:#191502 ;
    user-select:none;
    opacity:1 ;
    margin-top:2vw ;
    transition:0.2s ease-in all ;
    &:active{
        background-color: #B57323;
    color:white ;   
    }
    &:hover{
        background-color: #B57323;
    color:white ;   
    }
}

}
  }


  @media only screen and (max-width: 700px) and (orientation: portrait) {


    width:100vw ;
height:165vw ;
background-color: #191005;
color:#FFD8D4 ;
display:flex ;
justify-content:center ;
padding-top:10vw ;

.content{
    width:90% ;
height:100% ;
    .header1{
        font-size:8vw ;
        margin-bottom:15vw ;
       
    } 


   form{
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    height:80% ;
    width:100% ;

    .input-div{
        height:40% ;
        width:100% ;
        display:flex ;
        flex-direction:column ;
        align-items:center ;
        justify-content:space-between ;
        margin-bottom:7vw ;

        .input-wrapper{
            display:flex ;
        flex-direction:column ;
        font-size:5.5vw ;
        
        justify-content:space-between ; 
        align-items:center ;
         width:100% ;
         height:25% ;

span{
    align-self:flex-start ;
}

     input{
            background-color:white ;
            border-radius:0.9vw;
            border:none ;
            outline:none ;
            width:97% ;
            height:80% ;
            font-size:4vw ;
            padding-left:6px ;
            padding-right:6px ;
        }  
    
    
    }
        
    }



.textarea-div{
width:100% ;
display:flex ;
flex-direction:column ;
align-items:center ;
label{
    width:100% ;
display:flex ;
flex-direction:column ;
align-items:center ;


textarea{
border:none ;
border-radius:0.9vw ;
resize:none ;
outline:none ;
width:97% ;
font-size:4vw ;
            padding-left:6px ;
            padding-right:6px ;

}
}


}
}



.get-started-btn{
    cursor:pointer ;
    font-size:5vw ;
    padding:1.9vw ;
    border-radius:0.9vw ;
    background-color:white ;
    color:#191502 ;
    user-select:none;
    opacity:1 ;
    margin-top:8vw ;
    &:active{
        background-color: #B57323;
    color:white ;   
    }
}






}

 





  }


`;
