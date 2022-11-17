import React, { useState } from "react"
import Button from "../components/button/Button"
import Modal from "../components/modal/Modal"
import tick from "../assets/tick.png"
import cross from "../assets/cross.png"
import { ethers } from "ethers"
import MotherABI from "../ABIs/mother"

export default function VerifyPage() {
	const [validity, setValidity] = useState(null)
	const [contract, setContract] = useState(null)
	const CONTRACT = "0xe63032C48f9e66A63149e66401091E69d2060ffB"

	const submitHandler = async (e) => {
		e.preventDefault()
		let provider = ethers.getDefaultProvider("https://goerli.optimism.io")
		const new_contract = new ethers.Contract(CONTRACT, MotherABI, provider)
		let tx = await new_contract.verify(contract)
		setValidity(tx)
	}
	return (
		<>
			{validity ? (
				<Modal valid={true} img={tick} close={() => setValidity(null)} />
			) : validity === false ? (
				<Modal valid={false} img={cross} close={() => setValidity(null)} />
			) : null}
			<div className="h-screen w-full pt-36 flex flex-col justify-start items-center text-white">
				<div className="text-5xl font-bold w-4/5 text-left">Verify</div>
				<div className="mt-3 text-lg w-4/5 text-left">
					Enter a ticket’s contract address and tokenID to verify its authenticity!
				</div>
				<div className="w-4/5 text-left italic">
					Click here if you’re not sure what the contract address and tokenID are.
				</div>
				<form className="flex flex-col w-4/5">
					<div className="text-3xl mt-10 w-4/5 text-left">Contract Address</div>
					<input
						className="text-black mt-4 h-12 w-4/5 rounded-lg"
						type="text"
						onChange={(e) => {
							setContract(e.target.value)
						}}></input>
					<Button x="mt-10 w-32" text="Verify Ticket" onClick={submitHandler} />
				</form>
			</div>
		</>
	)
}
