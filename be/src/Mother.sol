// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "./IERC721.sol";

contract Mother {

    mapping(address => bool) public events;
    mapping(address => mapping(uint => bool)) public expended;

    function verify(address tokenAddress) public view returns (bool){
        return events[tokenAddress];
    }

    function addEvent(address tokenAddress) public {
        events[tokenAddress] = true;
    }

    function expendTicket(address tokenAddress, uint tokenID) public {
        require(events[tokenAddress], "Not an event");
        IERC721 token = IERC721(tokenAddress);
        require(token.ownerOf(tokenID) == msg.sender, "Not the owner");
        require(!expended[tokenAddress][tokenID], "Already expended");
        expended[tokenAddress][tokenID] = true;
    }
}