import tick from "../../assets/tick.png"
import cross from "../../assets/cross.png"
import Modal from "./Modal"

function ListModal(props) {
	const { isValid, onClose } = props

	const valid = {
		header: "Ticket successfully listed!",
		img: tick,
		text: "This ticket has been successfully listed on the resale marketplace!"
	}
	const invalid = {
		header: "Ticket listing unsuccessful!",
		img: cross,
		text: "There is an error with the ticket listing."
	}

	return <Modal isValid={isValid} valid={valid} invalid={invalid} onClose={onClose} />
}

export default ListModal
