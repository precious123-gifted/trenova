import styled from 'styled-components';
import textBackground1 from '../../assets/background-simple-inject.png'
import textBackground2 from '../../assets/background-simple-inject2.png'
import textBackground3 from '../../assets/background-simple-inject3.png'
import textBackground4 from '../../assets/background-simple-inject4.png'





export const CoursesSectionStyle = styled.div`

@media only screen and (min-width: 700px) {

    a{
        text-decoration:none ;
        color:inherit ;
    }
    display:flex ;
justify-content:center ;
align-items:center ;
color: #1A1005 ;
margin-top:15vw ;
width:100vw ;
.content{
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    width:90% ;
.header{
font-size:3vw ;
margin-bottom:6vw;
}

.courses{
#illustration{
    width:30vw ;
    aspect-ratio:4/4;
    object-fit:contain ;
}
    .school-growth-training{
        display: flex;
        justify-content:space-between ;
        align-items:center ;
        margin-bottom:15vw ;

        .text-box{
            width:40% ; 
            height:30vw ;
            background-image:url('${textBackground2}') ;
            background-size:contain ;
            background-position:center ;
            background-repeat:no-repeat ;
            display:flex ;
            flex-direction:column ;
            justify-content:center ;
            align-items:center ;

            .text-box-header{
                font-size:1.6vw ;
                margin-bottom:1.5vw ;
            }

            .text-box-summary{
                font-size:1.4vw;
                line-height:2vw ;
                word-spacing:0.8vw;
                margin-bottom:1.2vw ;
            }

            .learn-more-btn{
                padding:0.6vw ;
                background-color:#1A1005 ;
                border-radius:0.3vw ;
                color:#F4EEE6 ;
                cursor: pointer;
                font-size:1vw ;
                transition:0.6s ease-in all ;
    user-select:none;
                &:hover{
        background-color: #B57323;
    color:#F4EEE6 ;   
    }
            }
        }
    }


    .selling-skills-training{
        display: flex;
        justify-content:space-between ;
        align-items:center ;
        margin-bottom:15vw ;

        .text-box{
            width:40% ; 
            height:30vw ;
            background-image:url('${textBackground1}') ;
            background-size:contain ;
            background-position:center ;
            background-repeat:no-repeat ;
            display:flex ;
            flex-direction:column ;
            justify-content:center ;
            align-items:center ;

            .text-box-header{
                font-size:1.6vw ;
                margin-bottom:1.5vw ;
            }

            .text-box-summary{
                font-size:1.4vw ;
                line-height:2vw ;
                word-spacing:0.8vw;
                margin-bottom:1.2vw ;
            }

            .learn-more-btn{
                padding:0.6vw ;
                background-color:#1A1005 ;
                border-radius:0.3vw ;
                color:#F4EEE6 ;
                cursor: pointer;
                font-size:1vw ;
                transition:0.6s ease-in all ;
    user-select:none;
                &:hover{
        background-color: #B57323;
    color:#F4EEE6 ;   
    }
            }
        }
    }



    .business-growth-training{
        display: flex;
        justify-content:space-between ;
        align-items:center ;
        margin-bottom:15vw ;

        .text-box{
            width:40% ; 
            height:30vw ;
            background-image:url('${textBackground3}') ;
            background-size:contain ;
            background-position:center ;
            background-repeat:no-repeat ;
            display:flex ;
            flex-direction:column ;
            justify-content:center ;
            align-items:center ;

            .text-box-header{
                font-size:1.6vw ;
                margin-bottom:1.5vw ;
            }

            .text-box-summary{
                font-size:1.4vw ;
                line-height:2vw ;
                word-spacing:0.8vw;
                margin-bottom:1.2vw ;
            }

            .learn-more-btn{
                padding:0.6vw ;
                background-color:#1A1005 ;
                border-radius:0.3vw ;
                color:#F4EEE6 ;
                cursor: pointer;
                font-size:1vw ;
                transition:0.6s ease-in all ;
    user-select:none;
                &:hover{
        background-color: #B57323;
    color:#F4EEE6 ;   
    }
            }
        }
    }



    .graduate-skills-training{
        display: flex;
        justify-content:space-between ;
        align-items:center ;
        margin-bottom:15vw ;

        .text-box{
            width:40% ; 
            height:30vw ;
            background-image:url('${textBackground4}') ;
            background-size:contain ;
            background-position:center ;
            background-repeat:no-repeat ;
            display:flex ;
            flex-direction:column ;
            justify-content:center ;
            align-items:center ;

            .text-box-header{
                font-size:1.6vw ;
                margin-bottom:1.5vw ;
            }

            .text-box-summary{
                font-size:1.4vw ;
                line-height:2vw ;
                word-spacing:0.8vw;
                margin-bottom:1.2vw ;
            }

            .learn-more-btn{
                padding:0.6vw ;
                background-color:#1A1005 ;
                border-radius:0.3vw ;
                color:#F4EEE6 ;
                cursor: pointer;
                font-size:1vw ;
                transition:0.6s ease-in all ;
    user-select:none;
                &:hover{
        background-color: #B57323;
    color:#F4EEE6 ;   
    }
            }
        }
    }




}
}



}

@media only screen and (max-width: 700px) and (orientation: portrait) {
    display:flex ;
justify-content:center ;
align-items:center ;
width:100vw ;


.content{
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    width:90% ;
.header{
font-size:8vw ;
margin-bottom:30vw ;
}

.courses{
    .school-growth-training{
        display: flex;
        justify-content:center ;
        align-items:center ;
        margin-bottom:30vw ;
        .text-box{
            width:100% ; 
            height:100vw ;
            background-image:url('${textBackground2}') ;
            background-size:contain ;
            background-position:center ;
            background-repeat:no-repeat ;
            display:flex ;
            flex-direction:column ;
            justify-content:center ;
            align-items:center ;

            .text-box-header{
                font-size:6vw ;
                margin-bottom:6vw ;
            }

            .text-box-summary{
                font-family:Arial, Helvetica, sans-serif ;
                font-size:5.1vw ;
                line-height:8vw ;
                word-spacing:1.2vw;
                margin-bottom:6vw ;
            }

            .learn-more-btn{
                padding:2vw ;
                background-color:#1A1005 ;
                border-radius:1.2vw ;
                color:#F4EEE6 ;
                cursor: pointer;
                font-size:4vw ;
                transition:0.6s ease-in all ;
    user-select:none;
                &:hover{
        background-color: #B57323;
    color:#F4EEE6 ;   
    }
            }
        }
    }



    .selling-skills-training{
        display: flex;
        justify-content:center ;
        align-items:center ;
        margin-bottom:30vw ;
        .text-box{
            width:100% ; 
            height:100vw ;
            background-image:url('${textBackground1}') ;
            background-size:contain ;
            background-position:center ;
            background-repeat:no-repeat ;
            display:flex ;
            flex-direction:column ;
            justify-content:center ;
            align-items:center ;
            .text-box-header{
                font-size:6vw ;
                margin-bottom:6vw ;
            }

            .text-box-summary{
                font-family:Arial, Helvetica, sans-serif ;
                font-size:5.1vw ;
                line-height:8vw ;
                word-spacing:1.2vw;
                margin-bottom:6vw ;
            }

            .learn-more-btn{
                padding:2vw ;
                background-color:#1A1005 ;
                border-radius:1.2vw ;
                color:#F4EEE6 ;
                cursor: pointer;
                font-size:4vw ;
                transition:0.6s ease-in all ;
    user-select:none;
                &:hover{
        background-color: #B57323;
    color:#F4EEE6 ;   
    }
            }
        }
    }


    .business-growth-training{
        display: flex;
        justify-content:center ;
        align-items:center ;
        margin-bottom:30vw ;
        .text-box{
            width:100% ; 
            height:100vw ;
            background-image:url('${textBackground3}') ;
            background-size:contain ;
            background-position:center ;
            background-repeat:no-repeat ;
            display:flex ;
            flex-direction:column ;
            justify-content:center ;
            align-items:center ;

            .text-box-header{
                font-size:6vw ;
                margin-bottom:6vw ;
            }

            .text-box-summary{
                font-family:Arial, Helvetica, sans-serif ;
                font-size:5.1vw ;
                line-height:8vw ;
                word-spacing:1.2vw;
                margin-bottom:6vw ;
            }

            .learn-more-btn{
                padding:2vw ;
                background-color:#1A1005 ;
                border-radius:1.2vw ;
                color:#F4EEE6 ;
                cursor: pointer;
                font-size:4vw ;
                transition:0.6s ease-in all ;
    user-select:none;
                &:hover{
        background-color: #B57323;
    color:#F4EEE6 ;   
    }
            }
        }
    }



    .graduate-skills-training{
        display: flex;
        justify-content:center ;
        align-items:center ;
        margin-bottom:30vw ;
        .text-box{
            width:100% ; 
            height:100vw ;
            background-image:url('${textBackground3}') ;
            background-size:contain ;
            background-position:center ;
            background-repeat:no-repeat ;
            display:flex ;
            flex-direction:column ;
            justify-content:center ;
            align-items:center ;

            .text-box-header{
                font-size:6vw ;
                margin-bottom:6vw ;
            }

            .text-box-summary{
                font-family:Arial, Helvetica, sans-serif ;
                font-size:5.1vw ;
                line-height:8vw ;
                word-spacing:1.2vw;
                margin-bottom:6vw ;
            }

            .learn-more-btn{
                padding:2vw ;
                background-color:#1A1005 ;
                border-radius:1.2vw ;
                color:#F4EEE6 ;
                cursor: pointer;
                font-size:4vw ;
                transition:0.6s ease-in all ;
    user-select:none;
                &:hover{
        background-color: #B57323;
    color:#F4EEE6 ;   
    }
            }
        }
    }



}
}


}
`;
