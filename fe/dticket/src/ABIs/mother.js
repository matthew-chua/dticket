let MotherABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newEvent",
          "type": "address"
        }
      ],
      "name": "addEvent",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "eventAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "ticketId",
          "type": "uint256"
        }
      ],
      "name": "expendTicket",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "eventAddress",
          "type": "address"
        }
      ],
      "name": "verify",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]

  export default MotherABI