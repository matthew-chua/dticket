let MarketplaceABI = [
	{
		inputs: [
			{
				internalType: "address",
				name: "tokenAddress",
				type: "address"
			}
		],
		name: "buyListing",
		outputs: [],
		stateMutability: "payable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "tokenAddress",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "tokenID",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "price",
				type: "uint256"
			}
		],
		name: "createListing",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256"
			}
		],
		name: "listings",
		outputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address"
			},
			{
				internalType: "uint256",
				name: "price",
				type: "uint256"
			},
			{
				internalType: "uint256",
				name: "tokenID",
				type: "uint256"
			}
		],
		stateMutability: "view",
		type: "function"
	}
]

export default MarketplaceABI
