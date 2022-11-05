// import Backdrop from "./Backdrop";

import Button from "../button/Button";

function Modal(props) {
    const valid = "This ticket is verified and ready to be used!"
    const invalid = "Heads up! This ticket is NOT verified."
    return ( 
        <>
            <div className="h-screen w-full bg-[rgb(0,0,0,0.5)] absolute flex flex-row justify-center items-center z-10">
                <div className="bg-white h-2/5 w-2/5 flex flex-col items-center justify-around rounded-lg">
                    <div className="h-3/5 w-3/5 flex flex-col items-center space-around">
                    <img className="h-2/5" src={props.img}></img>
                    {props.valid ? <div className="text-3xl font-bold">Authentic!</div> : <div className="text-3xl font-bold">Fake!</div>}
                    {props.valid ? <div className="text-2xl font-bold">{valid}</div> : <div className="text-2xl font-bold">{invalid}</div>}
                    <Button onClick={props.close} text="close" />
                    </div>

                </div>
            </div>
        </> 

     );
}

export default Modal;