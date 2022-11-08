// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

interface IERC721 {
    function mint() external payable;
    function transfer(uint tokenID, address to) external;
    function ownerOf(uint tokenID) external view returns (address);
}