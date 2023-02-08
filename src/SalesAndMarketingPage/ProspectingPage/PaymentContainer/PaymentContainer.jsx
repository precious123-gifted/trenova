import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { DataContext } from '../../../App'
import { useState } from 'react'
import { PaymentContainerStyle } from './PaymentContainer.style'



export default function PaymentContainer() {

const {paymentcontainer} = useContext(DataContext)
const [Days,setDays] = useState(true)



const setHeaderColor = () =>{
  let fiveDaysBTN = paymentcontainer.current.querySelector('.header1')
let oneDayBTN = paymentcontainer.current.querySelector('.header2')

fiveDaysBTN.style.color = Days?'white' : null
fiveDaysBTN.style.borderBottom = Days?'2px solid blanchedalmond' : null
oneDayBTN.style.color = !Days?'white' : null
oneDayBTN.style.borderBottom = !Days?'2px solid blanchedalmond' : null

}

const closePaymentContainer = () =>{
let  paymentContainerDiv = paymentcontainer.current
let closeBTN = paymentcontainer.current.querySelector('.close-button')
let fiveDaysBTN = paymentcontainer.current.querySelector('.header1')
let oneDayBTN = paymentcontainer.current.querySelector('.header2')

closeBTN.addEventListener('click' , () =>{
  paymentContainerDiv.style.visibility = 'hidden'
})

}
const switchPaymentDays = () =>{
  let  paymentContainerDiv = paymentcontainer.current
  let fiveDaysBTN = paymentcontainer.current.querySelector('.header1')
  let oneDayBTN = paymentcontainer.current.querySelector('.header2')
  
  paymentContainerDiv.addEventListener('click' , (e) =>{
    if(e.target.classList.contains('header2')){
      setDays(false)
    }
   else if(e.target.classList.contains('header1')){
      setDays(true)
    }
  })
  
  }

useEffect(() => {
closePaymentContainer()
switchPaymentDays()
setHeaderColor()
}, )




  return (
    <PaymentContainerStyle ref={paymentcontainer}>
      <div className="content">

      
      <div className="header-div">
         <div className="header1 header">5 Days</div>  <div className="header2 header">Per Day</div>

         <div className="close-button">cancel</div>
      </div>    
  {
    Days? <div className='section2'>
      <span className='description'>make payment of N43,950 for 3 days</span>
      <a className='get-started-btn' href="https://flutterwave.com/pay/i00gpi7ngaat">

<span>BUY</span>
</a>
    </div>  : null
  }
   {
    !Days? <div className='section2'>
      <span className='description'>make payment of N14,950 for a day</span>
      <a className='get-started-btn' href="https://flutterwave.com/pay/erfuh0ffsjcv">
<span>BUY</span>
</a>
    </div>  : null
  }
</div>
    </PaymentContainerStyle>
  )
}
