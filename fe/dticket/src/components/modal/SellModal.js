// import Backdrop from "./Backdrop";

import { useState } from "react";
import Button from "../button/Button";

function SellModal(props) {
    const [price, setPrice] = useState(0)
    const submitHandler = (e) =>{
        e.preventDefault();
    }
    const valid = "This ticket is verified and ready to be used!"
    const invalid = "Heads up! This ticket is NOT verified."
    return ( 
        <>
            <div className="h-screen w-full bg-[rgb(0,0,0,0.5)] absolute flex flex-row justify-center items-center z-10">
                <div className="bg-white h-3/5 w-2/5 flex flex-col items-center justify-start rounded-lg pt-10">
                    <div className="h-3/5 flex flex-col items-center space-around">
                    <div className="text-xl font-bold">You are selling:</div>
                    <div className="flex flex-row justify-between h-2/5 w-full border-black rounded-md border-2 mt-5">
                        <img className="h-full rounded-l-md" src={props.img}></img>
                        <div className="flex flex-col text-left w-full ml-3 justify-center">
                            <div className="font-bold">{props.title}</div>
                            <div>{props.location}</div>
                            <div>{props.date}</div>
                        </div>
                    </div>
                    <div className="text-xl font-bold mt-5">Enter your sell price:</div>
                    <form className="flex flex-col mt-5 items-center">
                        <div className="flex flex-row items-end">
                            <input className="py-5 px-3 border-2 rounded-xl text-right" type="number" onChange={(e) => {setPrice(e.target.value)}}></input>
                            <div className="text-2xl font-bold ml-2">Eth</div>
                        </div>
                        <div className="flex flex-row w-full justify-around mt-5">
                            <Button reverse={true} text="Cancel" x="border-2 w-24 border-rose-400" onClick={props.close}></Button>
                            <Button onClick={submitHandler} text="Sell" x="border-2 w-24 border-rose-400"></Button>

                        </div>

                    </form>
                    </div>

                </div>
            </div>
        </> 

     );
}

export default SellModal;