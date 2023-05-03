import React from 'react'

export default function Userdata(props) {
  return (
    <div>
          <span className='font-bold'>MovieName</span><span>{props.movie}</span><br></br>
          <span className='font-bold'>NoofBookedSeat</span><span>{props.noofBookedSeat}</span><br></br>
          <span className='font-bold'>Total Amount</span><span>{props.totalamount}</span><br></br>
          <span className='font-bold'>Tax</span><span>{props.tax}</span><br></br>
          <span className='font-bold'>Total Payable Amount</span><span></span><br></br>
    </div>
  )
}
