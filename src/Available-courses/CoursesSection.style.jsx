import styled from 'styled-components';
import textBackground1 from '../assets/background-simple-inject.png'
import textBackground2 from '../assets/background-simple-inject2.png'
import textBackground3 from '../assets/background-simple-inject3.png'




export const CoursesSectionStyle = styled.div`

@media only screen and (min-width: 700px) and (orientation: landscape) {

    display:flex ;
justify-content:center ;
align-items:center ;
color: #1A1005 ;
margin-top:200px ;
width:100vw ;
.content{
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    width:90% ;
.header{
font-size:35px ;
margin-bottom:70px ;
}

.courses{

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
                font-size:22px ;
                margin-bottom:18px ;
            }

            .text-box-summary{
                font-size:17px ;
                line-height:25px ;
                word-spacing:8px;
                margin-bottom:15px ;
            }

            .learn-more-btn{
                padding:10px ;
                background-color:#1A1005 ;
                border-radius:10px ;
                color:white ;
                cursor: pointer;
                font-size:13px ;
                transition:0.6s ease-in all ;
    user-select:none;
                &:hover{
        background-color: #B57323;
    color:white ;   
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
                font-size:22px ;
                margin-bottom:18px ;
            }

            .text-box-summary{
                font-size:17px ;
                line-height:25px ;
                word-spacing:8px;
                margin-bottom:15px ;
            }

            .learn-more-btn{
                padding:10px ;
                background-color:#1A1005 ;
                border-radius:10px ;
                color:white ;
                cursor: pointer;
                font-size:13px ;
                transition:0.6s ease-in all ;
    user-select:none;
                &:hover{
        background-color: #B57323;
    color:white ;   
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
                font-size:22px ;
                margin-bottom:18px ;
            }

            .text-box-summary{
                font-size:17px ;
                line-height:25px ;
                word-spacing:8px;
                margin-bottom:15px ;
            }

            .learn-more-btn{
                padding:10px ;
                background-color:#1A1005 ;
                border-radius:10px ;
                color:white ;
                cursor: pointer;
                font-size:13px ;
                transition:0.6s ease-in all ;
    user-select:none;
                &:hover{
        background-color: #B57323;
    color:white ;   
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
font-size:30px ;
margin-bottom:70px ;
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
                font-size:22px ;
                margin-bottom:18px ;
            }

            .text-box-summary{
                line-height:25px ;
                word-spacing:8px;
                margin-bottom:15px ;
            }

            .learn-more-btn{
                padding:10px ;
                background-color:#1A1005 ;
                border-radius:10px ;
                color:white ;
                cursor: pointer;
                font-size:13px ;
                transition:0.6s ease-in all ;
    user-select:none;
                &:hover{
        background-color: #B57323;
    color:white ;   
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
                font-size:22px ;
                margin-bottom:18px ;
            }

            .text-box-summary{
                line-height:25px ;
                word-spacing:8px;
                margin-bottom:15px ;
            }

            .learn-more-btn{
                padding:10px ;
                background-color:#1A1005 ;
                border-radius:10px ;
                color:white ;
                cursor: pointer;
                font-size:13px ;
                transition:0.6s ease-in all ;
    user-select:none;
                &:hover{
        background-color: #B57323;
    color:white ;   
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
                font-size:22px ;
                margin-bottom:18px ;
            }

            .text-box-summary{
                line-height:25px ;
                word-spacing:8px;
                margin-bottom:15px ;
            }

            .learn-more-btn{
                padding:10px ;
                background-color:#1A1005 ;
                border-radius:10px ;
                color:white ;
                cursor: pointer;
                font-size:13px ;
                transition:0.6s ease-in all ;
    user-select:none;
                &:hover{
        background-color: #B57323;
    color:white ;   
    }
            }
        }
    }




}
}


}
`;
