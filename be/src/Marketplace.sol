// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract Marketplace {
    
    struct listing {
        uint256 id;
        uint price;
        address seller;
    }
    
    // mapping(address => mapping(uint256 => listing)) public listings;
    mapping(address => listing[]) public listings;
    
    //this can be used to update pricing as well
    function listItem(address tokenAddress, uint256 tokenId, uint256 price) public {
        
        //make sure price is not 0
        require(price > 0, "Price must be greater than 0");

        //check owner
        require(IERC721(tokenAddress).ownerOf(tokenId) == msg.sender, "You are not the owner of this token");

        //approve marketplace to transfer token
        IERC721(tokenAddress).approve(address(this), tokenId);
        
        //add item to marketplace
        listings[tokenAddress].push(listing(tokenId, price, msg.sender));

    }

    // function removeItem(address tokenAddress, uint256 tokenId) public {

    //     //remove item from marketplace
    //     delete listings[tokenAddress][tokenId];
    // }

    function buyItem(address tokenAddress) public payable {
        //buy item from marketplace

        // 1. Find ticket -- Throws error if doesn't exist
        listing memory ticketToBePurchased = _getCheapestListingFor(tokenAddress);
        uint256 tokenId = ticketToBePurchased.id;

        require(msg.value == ticketToBePurchased.price, "Incorrect price");
        IERC721(tokenAddress).transferFrom(address(this), msg.sender, tokenId);
        
        // 2. Transfer money to seller
        address payable seller = payable(ticketToBePurchased.seller);
        // uint price = listings[tokenAddress][tokenId].price;
        seller.transfer(ticketToBePurchased.price);

        // 3. Remove listing
        require(_deleteListingFor(tokenAddress, tokenId) == true, "Could not remove listing");

        // delete listings[tokenAddress][tokenId];
    }

    // Gets the listing for a given token id at a given contract address
    // Throws error if doesn't exist
    function _getListingFor(address tokenAddress, uint256 tokenId) internal view returns(listing memory) {
        listing[] memory listingsForGivenAddress = listings[tokenAddress];
        for (uint i=0; i<listingsForGivenAddress.length; i++) {
            if (listingsForGivenAddress[i].id == tokenId) {
                return listingsForGivenAddress[i];
            }
        }
        revert('Not found');
    }

    // Deletes a listing -- returns True if success
    function _deleteListingFor(address tokenAddress, uint256 tokenId) internal returns(bool) {
        listing[] memory listingsForGivenAddress = listings[tokenAddress];
        for (uint i=0; i<listingsForGivenAddress.length; i++) {
            if (listingsForGivenAddress[i].id == tokenId) {
                delete listings[tokenAddress][i];
                return true;
            }
        }
        return false;
    }
    
    // Gets cheapest listing for a given contract address
    // Returns the token Id
    function _getCheapestListingFor(address tokenAddress) internal view returns(listing memory) {
        listing[] memory listingsForGivenAddress = listings[tokenAddress];
        
        // Make sure there are existing listings
        require(listingsForGivenAddress.length > 0, "No available listing");

        listing memory cheapestListing = listingsForGivenAddress[0]; 

        for (uint i=1; i<listingsForGivenAddress.length; i++) {
            if (listingsForGivenAddress[i].price < cheapestListing.price) {
                cheapestListing = listingsForGivenAddress[i];
            }
        }

        return cheapestListing;
    }

}
