import React from 'react'

export default function Userdata(props) {
  return (
    <div className='flex'>
    <div className='text-left'>
          <span className='font-bold'>MovieName</span><br></br>
          <span className='font-bold'>NoofBookedSeat</span><br></br>
          <span className='font-bold'>Total Amount</span><br></br>
          <span className='font-bold'>Tax</span><br></br>
          <span className='font-bold'>Total Payable Amount</span><br></br>
    </div>
    <div>
          <span>{props.movie}</span><br></br>
          <span>{props.noofBookedSeat}</span><br></br>
          <span>{props.totalamount}</span><br></br>
          <span>{(props.totalamount*20)/100}</span><br></br>
          <span>{props.totalamount + ((props.totalamount*20)/100) }</span><br></br>
    </div>
    </div>
  )
}
