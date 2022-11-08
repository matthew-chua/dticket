// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "./ERC721.sol";
import "./IERC721.sol";
import "./Mother.sol";

contract Factory {
    address public mother;

    event NewEventCreated (
        address eventAddress
    );

    function setMother(address newMotherAddress) public {
        mother = newMotherAddress;
    }

    function addEvent() public {
        ERC721 newEvent = new ERC721();
        Mother motherContract = Mother(mother);
        motherContract.addEvent(address(newEvent));
        emit NewEventCreated(address(newEvent));
    }
}