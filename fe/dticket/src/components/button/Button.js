function Button(props) {
	const reverse =
		"opacity-95 px-4 py-2 rounded-md font-bold hover:text-white hover:bg-rose-400 text-rose-400 bg-white ease-in-out duration-100"

	const noReverse =
		"opacity-95 px-4 py-2 rounded-md font-bold hover:text-rose-400 hover:bg-white text-white bg-rose-400 ease-in-out duration-100"
	// console.log(styles)
	return (
		<button
			onMouseOver={props.onHover}
			onClick={props.onClick}
			className={`${props.x} ${props.reverse ? reverse : noReverse}`}
			disabled={props.disabled}>
			<div>{props.text}</div>
		</button>
	)
}

export default Button
