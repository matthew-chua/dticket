import tick from "../../assets/tick.png"
import cross from "../../assets/cross.png"
import Modal from "./Modal"

function VerifyModal(props) {
	const { isValid, onClose } = props

	const valid = {
		header: "Authentic!",
		img: tick,
		text: "This ticket is verified and ready to be used!"
	}
	const invalid = {
		header: "Fake!",
		img: cross,
		text: "Heads up! This ticket is NOT verified."
	}

	return <Modal isValid={isValid} valid={valid} invalid={invalid} onClose={onClose} />
}

export default VerifyModal
