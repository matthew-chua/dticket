// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract Marketplace {
    
    struct listing {
        uint price;
        address seller;
    }
    
    mapping(address => mapping(uint256 => listing)) public listings;
    
    //this can be used to update pricing as well
    function listItem(address tokenAddress, uint256 tokenId, uint256 price) public {
        
        //make sure price is not 0
        require(price > 0, "Price must be greater than 0");

        //check owner
        require(IERC721(tokenAddress).ownerOf(tokenId) == msg.sender, "You are not the owner of this token");

        //approve marketplace to transfer token
        IERC721(tokenAddress).approve(address(this), tokenId);
        
        //add item to marketplace
        listings[tokenAddress][tokenId] = listing(price, msg.sender);

    }

    function removeItem(address tokenAddress, uint256 tokenId) public {

        //remove item from marketplace
        delete listings[tokenAddress][tokenId];
    }

    function buyItem(address tokenAddress, uint256 tokenId) public payable {
        //buy item from marketplace
        require(msg.value == listings[tokenAddress][tokenId].price, "Incorrect price");
        IERC721(tokenAddress).transferFrom(address(this), msg.sender, tokenId);
        
        // transfer money to seller
        address payable seller = payable(listings[tokenAddress][tokenId].seller);
        uint price = listings[tokenAddress][tokenId].price;
        seller.transfer(price);

        delete listings[tokenAddress][tokenId];
    }
}
