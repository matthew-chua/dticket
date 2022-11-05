import { Link } from "react-router-dom"; 
import Button from "../button/Button";
import Buttonsmall from "../button/Button-s";

function CardUser(props) {
    
    return ( 
        <Link to={props.to} className="box-content h-72 my-4 bg-white rounded-2xl flex flex-col justify-start items-center shadow-lg shadow-gray-800 hover:shadow-gray-300 cursor-pointer">
            <img src={props.img} className="box-content h-48 w-full rounded-t-2xl"/>
            <div className="w-full py-1 px-3">
                <div className="h-full w-full flex flex-row justify-between text-base">
                    <div>
                        <h2 className="font-bold text-xl text-left">{props.title}</h2>
                        <div className="text-left">📍 {props.location}</div>
                        <div className="text-left">⏱ {props.time}</div>
                    </div>
                    {/* <div className="h-full flex flex-col justify-center align-center text-right text-3xl">
                        <Buttonsmall className="font-bold" text="Sell"></Buttonsmall>
                    </div> */}
                </div>

            </div>
        </Link>
     );
}

export default CardUser;