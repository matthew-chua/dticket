import { Link } from "react-router-dom"

function CardUser(props) {
	return (
		<Link
			to={props.to}
			className="box-content my-4 bg-white rounded-2xl flex flex-col justify-start items-center shadow-lg shadow-gray-800 hover:shadow-gray-700/50 cursor-pointer ">
			<img src={props.img} className="box-content w-full rounded-t-2xl" alt="card user img" />
			<div className="w-full p-4">
				<div className="h-full w-full flex flex-row justify-between text-base">
					<div>
						<h2 className="font-bold text-xl text-left">{props.title}</h2>
						<div className="text-left">📍 {props.location}</div>
						<div className="text-left">⏱ {props.time}</div>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default CardUser
