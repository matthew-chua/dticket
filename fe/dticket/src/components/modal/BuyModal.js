import tick from "../../assets/tick.png"
import cross from "../../assets/cross.png"
import Modal from "./Modal"

function BuyModal(props) {
	const { isValid, onClose } = props

	const valid = {
		header: "Successful purchase!",
		img: tick,
		text: "The ticket has been successfully purchased!"
	}
	const invalid = {
		header: "Unsuccessful purchase!",
		img: cross,
		text: "There is an error with the purchase."
	}

	return <Modal isValid={isValid} valid={valid} invalid={invalid} onClose={onClose} />
}

export default BuyModal
