import qr from "../assets/qr.png"
import adele from "../assets/adele.png"
import Button from "../components/button/Button"
import SellModal from "../components/modal/SellModal"
import { useState } from "react"

function TicketPage() {
	const [sell, setSell] = useState(false)
	const close = () => {
		setSell(null)
	}
	const openSell = () => {
		setSell(true)
		// console.log(sell)
	}

	return (
		<>
			{sell && <SellModal img={adele} title="Adele" location="Berkeley, CA" date="24 Mar, 08:00" close={close} />}
			<div className="h-screen w-full flex flex-col justify-center items-center">
				<div className="h-1/3 w-1/3 flex flex-row">
					<div className="h-full w-1/2 bg-white rounded-lg flex flex-col justify-start align-center">
						<div className="h-2/3 w-full">
							<img className="h-full w-full rounded-t-lg" src={adele} />
						</div>
						<div className="font-bold text-xl">Adele</div>
						<div>Berkeley, CA</div>
						<div>24 Mar, 08:00</div>
					</div>
					<div className="h-full w-1/2 bg-white rounded-lg flex justify-center items-center">
						<img src={qr} className="h-2/3 w-2/3" />
					</div>
				</div>
				<Button
					text="Sell"
					x="mt-5"
					onClick={() => {
						openSell()
					}}
				/>
			</div>
		</>
	)
}

export default TicketPage
