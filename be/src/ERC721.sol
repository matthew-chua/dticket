// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "./IERC721.sol";

contract ERC721 is IERC721{
    mapping(uint => address) public balances;
    uint public currID = 0;

    function mint() public payable {
        require(msg.value >= 0 , "Not enough ETH");
        balances[currID] = msg.sender;
        currID += 1;
    }

    function transfer(uint tokenID, address to) public {
        require(to != address(0), "Invalid address");
        balances[tokenID] = to;
    }

    function ownerOf(uint tokenID) public view returns (address) {
        return balances[tokenID];
    }


}
