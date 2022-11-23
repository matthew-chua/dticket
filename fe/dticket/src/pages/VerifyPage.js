import React, { useState } from "react"
import Button from "../components/button/Button"
import VerifyModal from "../components/modal/VerifyModal"
import { ethers } from "ethers"
import MotherABI from "../ABIs/mother"
import CONTRACTS from "../contracts"

export default function VerifyPage() {
	const [validity, setValidity] = useState(null)
	const [contract, setContract] = useState(null)

	const submitHandler = async (e) => {
		e.preventDefault()
		let provider = ethers.getDefaultProvider("https://goerli.optimism.io")
		const new_contract = new ethers.Contract(CONTRACTS.MOTHER, MotherABI, provider)
		let tx = await new_contract.verify(contract)
		setValidity(tx)
	}
	return (
		<>
			{validity ? (
				<VerifyModal isValid={true} onClose={() => setValidity(null)} />
			) : validity === false ? (
				<VerifyModal isValid={false} onClose={() => setValidity(null)} />
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
						className="text-black mt-4 w-4/5 rounded-lg p-3"
						type="text"
						onChange={(e) => {
							setContract(e.target.value)
						}}></input>
					<Button x="mt-10 w-40 py-3" text="Verify Ticket" onClick={submitHandler} />
				</form>
			</div>
		</>
	)
}
