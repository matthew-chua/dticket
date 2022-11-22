import qr from "../assets/qr.png"
import adele from "../assets/adele.png"
import Button from "../components/button/Button"
import SellModal from "../components/modal/SellModal"
import ListModal from "../components/modal/ListModal"
import { useState } from "react"
import CONTRACTS from "../contracts"

function TicketPage() {
	const [sell, setSell] = useState(null)

	const openSell = () => {
		setSell(true)
	}
	const onClose = () => {
		setSell(null)
	}
	const onSold = () => {
		setSell(false)
	}

	return (
		<>
			{sell ? (
				<SellModal
					img={adele}
					title="Adele"
					location="Berkeley, CA"
					date="24 Mar, 08:00"
					onClose={onClose}
					onSold={onSold}
					contract={CONTRACTS.ADELENFT}
					tokenId="7" // todo: update for demo
				/>
			) : sell === false ? (
				<ListModal isValid={true} onClose={onClose} />
			) : null}
			<div className="h-screen w-full flex flex-col justify-center items-center">
				<div className="flex flex-row">
					<div className="h-full w-1/2 bg-white rounded-lg flex flex-col justify-start align-center pb-2">
						<div className="h-2/3 w-full">
							<img className="h-full w-full rounded-t-lg" src={adele} alt="adele" />
						</div>
						<div className="font-bold text-xl mt-4">Adele</div>
						<div>Berkeley, CA</div>
						<div>24 Mar, 08:00</div>
					</div>
					<div className="h-full w-1/2 bg-white rounded-lg flex justify-center items-center">
						<img src={qr} className="h-2/3 w-2/3" alt="qr" />
					</div>
				</div>
				<Button text="Sell" x="mt-5" onClick={openSell} />
			</div>
		</>
	)
}

export default TicketPage
