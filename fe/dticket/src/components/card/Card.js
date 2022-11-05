function Card(props) {
    return ( 
        <div className="box-content h-72 my-4 bg-white rounded-lg flex flex-col justify-start items-center">
            <img src={props.img} className="box-content h-48 w-full rounded-t-md"/>
            <div className="w-full py-1 px-3">
                <div className="w-full flex flex-row justify-between text-base">
                    <div>
                        <h2 className="font-bold text-xl">{props.title}</h2>
                        <div>📍 {props.location}</div>
                        <div>⏱ {props.time}</div>
                    </div>
                    <div className="h-full flex flex-col justify-center text-right text-3xl">
                        <div className="text-base">prices from</div>
                        <div className="font-bold">{props.price}</div>
                    </div>
                </div>

            </div>
        </div>
     );
}

export default Card;