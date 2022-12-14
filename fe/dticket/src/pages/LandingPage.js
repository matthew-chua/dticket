import landing from "../assets/landing.png"

function LandingPage() {
	return (
		<div className="h-screen w-full flex flex-row justify-around items-center">
			<div className="text-left">
				<div className="text-7xl font-bold text-white">D'Ticket</div>
				<div className="text-xl text-white italic">Your one stop shop for authentic tickets!</div>
				<div className="mt-3 text-white ease-in-out duration-100">
					"Buy authentic tickets straight from event holders!"
				</div>
			</div>
			<img className="h-3/5" src={landing} alt="landing" />
		</div>
	)
}

export default LandingPage
