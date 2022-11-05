import React from "react";
import Button from "../button/Button";

export default function Ticket(props) {
  const buyTicketHandler = () => {};
  return (
    <div className="flex border-2 rounded-md py-8 px-16 justify-between items-center my-8">
      <div>
        <div className="text-3xl font-bold">{props.ticket.date}</div>
        <div className="text-2xl font-bold">{props.ticket.time}</div>
      </div>
      <div className="text-rose-400 font-bold text-4xl">{props.ticket.type}</div>
      <div className="font-extrabold text-3xl">{props.ticket.price ?  props.ticket.price : "SOLD OUT"}</div>
      <Button text="Buy Now!" onClick={buyTicketHandler} disabled={!props.ticket.price}/>
    </div>
  );
}
