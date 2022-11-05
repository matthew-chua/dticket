import { useState } from "react";
import landing from "../assets/landing.png"
import Button from "../components/button/Button";
function LandingPage() {
    const [statement, setStatement] = useState("Buy authentic tickets straight from event holders!")

    
    return ( 
        <div className="h-screen w-full flex flex-row justify-around items-center">
            <div className="text-left">
                <div className="text-7xl font-bold text-white">
                    D'Ticket
                </div>
                <div className="text-xl text-white italic">Your one stop shop for authentic tickets!</div>
                <div className="mt-3 text-white ease-in-out duration-100">{statement}</div>
                <div className="flex flex-row mt-2">
                    <Button reverse={true} text="Events" onHover={() => setStatement("Buy authentic tickets straight from event holders!")}/>
                    <Button x="ml-2" reverse={false} text="Marketplace" onHover={() => setStatement("Buy verified tickets from trusted resellers!")}/>
                </div>
            </div>
            <img className="h-3/5" src={landing} />
        </div>
     );
}

export default LandingPage;