function Card(props) {
	return (
		<div className="box-content my-4 bg-white rounded-2xl flex flex-col justify-start items-center shadow-lg shadow-gray-800 hover:shadow-gray-700/50 cursor-pointer max-h-[20rem]">
			<img src={props.img} className="w-full rounded-t-2xl max-h-[12rem]" alt="card img" />
			<div className="w-full p-4">
				<div className="w-full flex flex-row justify-between text-base">
					<div>
						<h2 className="font-bold text-xl text-left">{props.title}</h2>
						<div className="text-left">📍 {props.location}</div>
						<div className="text-left">⏱ {props.time}</div>
					</div>
					<div className="h-full flex flex-col justify-center text-right text-3xl">
						<div className="text-base">prices from</div>
						<div className="font-bold">{props.price}</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card
