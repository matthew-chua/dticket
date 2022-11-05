// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "./ERC721.sol";
import "./Mother.sol";

contract Factory {
    Mother mo;
    //create a new event and add it to the events mapping in mother
    function createNew721(string memory name_, string memory symbol_, string memory _initBaseURI) public{
        ERC721 new721 = new NFT(name_, symbol_, _initBaseURI); 
        address newAddress = address(new721); 
        mo.addEvent(newAddress);
    }

    function setMother(address motherContractAddress) public{
        mo = Mother(motherContractAddress);
    }
}
