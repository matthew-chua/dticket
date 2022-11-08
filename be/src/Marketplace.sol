// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "./IERC721.sol";

contract Marketplace {
    
    struct Listing {
        address owner;
        uint price;
        uint tokenID;
    }
    
    mapping(address => Listing[]) public listings;

    function createListing(address tokenAddress, uint tokenID, uint price) public {
        IERC721 token = IERC721(tokenAddress);
        require(token.ownerOf(tokenID) == msg.sender, "Not the owner");

        token.transfer(tokenID, address(this));

        Listing memory listing = Listing(msg.sender, price, tokenID);
        listings[tokenAddress].push(listing);
    }

    function buyListing(address tokenAddress) public payable {
        Listing[] storage tokenListings = listings[tokenAddress];
        require(tokenListings.length > 0, "No listings");
        Listing storage listing = tokenListings[0];

        for (uint i = 1; i < tokenListings.length; i++) {
            if (tokenListings[i].price < listing.price) {
                listing = tokenListings[i];
            }
        }

        require(msg.value >= listing.price, "Not enough ETH");

        IERC721 token = IERC721(tokenAddress);
        token.transfer(listing.tokenID, msg.sender);

        payable(listing.owner).transfer(msg.value);

        for (uint i = 0; i < tokenListings.length; i++) {
            if (tokenListings[i].tokenID == listing.tokenID) {
                delete tokenListings[i];
            }
        }
        
    }
}