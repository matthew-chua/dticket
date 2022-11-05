function Button(props) {
    let styles = "opacity-95 px-4 py-2 rounded-md font-bold hover:opacity-100"
    // if (!props.reverse){
    //     let text = "text-white";
    //     let bg =  "bg-rose-400";
    // }
    // else{
    //     let text = "text-rose-400";
    //     let bg =  "bg-white";
    // }
    // styles = styles + text + bg

    const reverse = "opacity-95 px-4 py-2 rounded-md font-bold hover:opacity-100 text-rose-400 bg-white ease-in-out duration-100"

    const noReverse = "opacity-95 px-4 py-2 rounded-md font-bold hover:opacity-100 text-white bg-rose-400 ease-in-out duration-100"
    // console.log(styles)
    return ( 
        <button onMouseOver={props.onHover} className={`${props.x} ${props.reverse ? reverse:noReverse}`}>
            <div>{props.text}</div>
        </button>
     );
}

export default Button;