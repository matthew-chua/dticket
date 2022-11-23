import Button from "../button/Button"

function Modal(props) {
	const { isValid, valid, invalid, onClose } = props
	const content = isValid ? valid : invalid
	const { header, img, text } = content

	return (
		<>
			<div className="h-screen w-full bg-[rgb(0,0,0,0.5)] absolute flex flex-row justify-center items-center z-20">
				<div className="bg-white flex p-20 flex-col items-center justify-around rounded-lg">
					<div className="flex flex-col items-center space-around">
						<img src={img} alt="modal img" />
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
