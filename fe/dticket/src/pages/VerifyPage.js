import React, { useState } from 'react'
import Button from '../components/button/Button'
import Modal from '../components/modal/Modal'
import tick from "../assets/tick.png"
import cross from "../assets/cross.png"

export default function VerifyPage() {
  const [validity, setValidity] = useState(true)
  return (
    <>
      {validity ? <Modal valid={true} img={tick} close ={() => setValidity(null)}/> : validity === false ? <Modal valid={false} img={cross} close ={() => setValidity(null)}/> : null} 
      <div className='h-screen w-full pt-36 flex flex-col justify-start items-center text-white'>
      <div className='text-5xl font-bold w-4/5 text-left'>Verify</div>
      <div className='mt-3 text-lg w-4/5 text-left'>Enter a ticket’s contract address and tokenID to verify its authenticity!</div>
      <div className='w-4/5 text-left italic'>Click here if you’re not sure what the contract address and tokenID are.</div>

      <div className='text-3xl mt-10 w-4/5 text-left'>Contract Address</div>
      <input className="text-black mt-4 h-12 w-4/5 rounded-lg" type="text"></input>
      <div className='text-3xl mt-10 w-4/5 text-left'>TokenID</div>
      <input className="text-black mt-4 h-12 w-4/5 rounded-lg" type="text"></input>

      <Button x="mt-10" text="Verify Ticket" />
    </div>
    </>

  )
}
