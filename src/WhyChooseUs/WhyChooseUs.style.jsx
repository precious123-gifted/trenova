import styled from 'styled-components';

export const WhyChooseUsStyle = styled.div`
  @media only screen and (min-width: 700px) {
width:100vw ;
height:220vh ;
background-color:#FCFBFA ;
display:flex ;
justify-content:center ;
align-items:center ;
color:#191005 ;

.content{
width:90% ;
height:80% ;

.why-choose-us-section{
    width:100% ;
    margin-bottom:5vw ;
    .header{
        font-size: 3vw;
margin-bottom: 3vw;
    }

    .components{
        width:100% ;
        display:flex ;
        justify-content:space-between ;
        align-items:center ;

        .svg-section{

width:40% ;
.que-svg{
    width:80% ;
    aspect-ratio:3/4;
    object-fit:contain ;
}
        }

        .writeup-section{
            width:50% ;
            font-size: 1.6vw;
            line-height: 2vw;
            text-align:left ;
            margin-bottom:2vw ;

            .write-up{
                margin-bottom:2vw ;
            }
            .registration-btn{
font-size: 1.4vw;
padding: 0.6vw;
border-radius: 0.5vw;
background-color: #191005;
color: #F4EEE6;
transition: 0.6s ease-in all;
user-select: none;
 cursor: pointer;
 width:25% ;
 display:flex ;
 justify-content:center ;
 align-items:center ;
 &:hover{
    background-color: #B57323;
color: white;
 }
}

        }
        
    }
}


.speak-section{

    width:100% ;
    .header{
        font-size: 3vw;
margin-bottom: 2vw;
    }


    .components{
        width:100% ;
        display:flex ;
        justify-content:space-between ;
        align-items:center ;

        .svg-section{

width:40% ;
.contact-us-svg{
    width:80% ;
    aspect-ratio:3/4;
    object-fit:contain ;
}
        }

        .writeup-section{
            width:50% ;
            font-size: 2vw;
            line-height: 2vw;
            text-align:left ;
            margin-bottom:2vw ;

            .write-up{
                margin-bottom:2vw ;
                display:flex ;
                flex-direction:column ;

                .phone{
                    margin-bottom:1vw ;
                }
            }
    


        }
        
    }


}

}

  }


  @media only screen and (max-width: 700px) and (orientation: portrait) {

    width:100vw ;
height:195vh ;
background-color:#FCFBFA ;
display:flex ;
justify-content:center ;
align-items:center ;
color:#191005 ;

.content{
width:90% ;
height:80% ;

.why-choose-us-section{
    width:100% ;
    margin-bottom:18vw ;
    .header{
        font-size: 8vw;

    }

    .components{
        width:100% ;
        display:flex ;
        flex-direction:column ;
        align-items:center ;

        .svg-section{

width:100% ;
.que-svg{
    width:80% ;
    aspect-ratio:3/4;
    object-fit:contain ;
}
        }

        .writeup-section{
            width:100% ;
            font-family: Arial,Helvetica,sans-serif;
            font-size: 5.1vw;
            line-height: 8vw;
            word-spacing: 1.2vw;
            display:flex ;
            flex-direction:column ;
            align-items:center ;

            .write-up{
                margin-bottom:2vw ;
            }
            .registration-btn{
font-size: 4vw;
padding: 0.6vw;
border-radius: 1vw;
background-color: #191005;
color: #F4EEE6;
transition: 0.6s ease-in all;
user-select: none;
 cursor: pointer;
 width:40% ;
 display:flex ;
 justify-content:center ;
 align-items:center ;
 &:hover{
    background-color: #B57323;
color: white;
 }
}

        }
        
    }
}


.speak-section{

    width:100% ;
    .header{
font-size: 8vw;
margin-bottom: 15vw;
    }


    .components{
        width:100% ;
        display:flex ;
        flex-direction:column-reverse ;
        align-items:center ;

        .svg-section{

width:100% ;
.contact-us-svg{
    width:100% ;
    aspect-ratio:3/4;
    object-fit:contain ;
}
        }

        .writeup-section{
            width:100% ;
            font-size: 5vw;
            line-height: 2vw;
            text-align:left ;
            margin-bottom:2vw ;

            .write-up{
                margin-bottom:2vw ;
                display:flex ;
                flex-direction:column ;

                .phone{
                    margin-bottom:6vw ;
                }
            }
    


        }
        
    }


}

}

  }

`;
