import landing from "../assets/landing.png"
import Button from "../components/button/Button";
function LandingPage() {
    return ( 
        <div className="h-screen w-full flex flex-row justify-around items-center">
            <div className="text-left">
                <div className="text-7xl font-bold text-white">
                    D'Ticket
                </div>
                <div className="text-xl text-white italic">Your one stop shop for authentic tickets!</div>
                <div className="mt-3 text-white">Buy authentic tickets straight from event holders!</div>
                <div className="flex flex-row mt-2">
                    <Button reverse={true} text="Events"/>
                    <Button x="ml-2" reverse={false} text="Marketplace"/>
                </div>
            </div>
            <img className="h-3/5" src={landing} />
        </div>
     );
}

export default LandingPage;