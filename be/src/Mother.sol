// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Mother {
    mapping(address => bool) events;

    function verify(address eventAddress) public view returns(bool){
        //check if event is in events
        return events[eventAddress];
    }
}
