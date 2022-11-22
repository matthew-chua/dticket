import Button from "../button/Button"

function Modal(props) {
	const { isValid, valid, invalid, onClose } = props
	const content = isValid ? valid : invalid
	const { header, img, text } = content

	return (
		<>
			<div className="h-screen w-full bg-[rgb(0,0,0,0.5)] absolute flex flex-row justify-center items-center z-11">
				<div className="bg-white h-2/5 w-2/5 flex flex-col items-center justify-around rounded-lg">
					<div className="h-3/5 w-3/5 flex flex-col items-center space-around">
						<img className="h-2/5" src={img} alt="modal img" />
						<br />
						<div className="text-3xl font-bold">{header}</div>
						<div className="text-2xl font-bold">{text}</div>
						<br />
						<Button onClick={onClose} text="Close" />
					</div>
				</div>
			</div>
		</>
	)
}

export default Modal
