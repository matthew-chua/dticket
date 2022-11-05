// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Mother {
    mapping(address => bool) events;

    mapping(address => mapping(uint256 => bool)) expended;

    function verify(address eventAddress) public view returns(bool){
        //check if event is in events
        return events[eventAddress];
    }

    function addEvent(address newEvent) public returns(bool){
        //add event to events
        events[newEvent] = true;
        return true;
    }

    function expendTicket(address eventAddress, uint256 ticketId) public returns(bool){
        //add ticket to expended
        require(events[eventAddress], "Event does not exist");
        expended[eventAddress][ticketId] = true;
        return true;
    }


}
