/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RobToken, RobTokenInterface } from "../RobToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "dna",
        type: "uint256",
      },
    ],
    name: "NewRob",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "robs",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "dna",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "level",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "rarity",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "updateFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
    payable: true,
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "createRandomRob",
    outputs: [],
    stateMutability: "payable",
    type: "function",
    payable: true,
  },
  {
    inputs: [],
    name: "getRobs",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dna",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "level",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "rarity",
            type: "uint8",
          },
        ],
        internalType: "struct RobToken.Rob[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "getOwnerRobs",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dna",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "level",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "rarity",
            type: "uint8",
          },
        ],
        internalType: "struct RobToken.Rob[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_robId",
        type: "uint256",
      },
    ],
    name: "levelUp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405266038d7ea4c680006008553480156200001c57600080fd5b5060405162002480380380620024808339810160408190526200003f916200023a565b81518290829062000058906000906020850190620000e9565b5080516200006e906001906020840190620000e9565b5050506200008b620000856200009360201b60201c565b62000097565b5050620002f4565b3390565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620000f790620002a1565b90600052602060002090601f0160209004810192826200011b576000855562000166565b82601f106200013657805160ff191683800117855562000166565b8280016001018555821562000166579182015b828111156200016657825182559160200191906001019062000149565b506200017492915062000178565b5090565b5b8082111562000174576000815560010162000179565b600082601f830112620001a0578081fd5b81516001600160401b0380821115620001bd57620001bd620002de565b6040516020601f8401601f1916820181018381118382101715620001e557620001e5620002de565b6040528382528584018101871015620001fc578485fd5b8492505b838310156200021f578583018101518284018201529182019162000200565b838311156200023057848185840101525b5095945050505050565b600080604083850312156200024d578182fd5b82516001600160401b038082111562000264578384fd5b62000272868387016200018f565b9350602085015191508082111562000288578283fd5b5062000297858286016200018f565b9150509250929050565b600281046001821680620002b657607f821691505b60208210811415620002d857634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b61217c80620003046000396000f3fe6080604052600436106101405760003560e01c8063715018a6116100b6578063b88d4fde1161006f578063b88d4fde14610362578063c87b56dd14610382578063e985e9c5146103a2578063f1411bf8146103c2578063f2fde38b146103d5578063fee240a6146103f557610140565b8063715018a6146102c357806389d809ca146102d85780638da5cb5b146102f85780639012c4a81461030d57806395d89b411461032d578063a22cb4651461034257610140565b806323b872dd1161010857806323b872dd1461020c5780633ccfd60b1461022c57806342842e0e146102345780634ba1476e146102545780636352211e1461027657806370a082311461029657610140565b806301ffc9a71461014557806306fdde031461017b578063081812fc1461019d578063095ea7b3146101ca5780630ce90ec2146101ec575b600080fd5b34801561015157600080fd5b50610165610160366004611923565b610426565b6040516101729190611b20565b60405180910390f35b34801561018757600080fd5b5061019061046e565b6040516101729190611b2b565b3480156101a957600080fd5b506101bd6101b83660046119a1565b610500565b6040516101729190611a34565b3480156101d657600080fd5b506101ea6101e53660046118fa565b61054c565b005b3480156101f857600080fd5b506101ea6102073660046119a1565b6105e4565b34801561021857600080fd5b506101ea61022736600461180c565b610669565b6101ea6106a1565b34801561024057600080fd5b506101ea61024f36600461180c565b610726565b34801561026057600080fd5b50610269610741565b6040516101729190611a85565b34801561028257600080fd5b506101bd6102913660046119a1565b610867565b3480156102a257600080fd5b506102b66102b13660046117c0565b61089c565b6040516101729190611fde565b3480156102cf57600080fd5b506101ea6108e0565b3480156102e457600080fd5b506102696102f33660046117c0565b61092b565b34801561030457600080fd5b506101bd610b1d565b34801561031957600080fd5b506101ea6103283660046119a1565b610b2c565b34801561033957600080fd5b50610190610b70565b34801561034e57600080fd5b506101ea61035d3660046118c0565b610b7f565b34801561036e57600080fd5b506101ea61037d366004611847565b610b91565b34801561038e57600080fd5b5061019061039d3660046119a1565b610bd0565b3480156103ae57600080fd5b506101656103bd3660046117da565b610c53565b6101ea6103d036600461195b565b610c81565b3480156103e157600080fd5b506101ea6103f03660046117c0565b610c9c565b34801561040157600080fd5b506104156104103660046119a1565b610d0a565b604051610172959493929190611b3e565b60006001600160e01b031982166380ac58cd60e01b148061045757506001600160e01b03198216635b5e139f60e01b145b80610466575061046682610de0565b90505b919050565b60606000805461047d90612064565b80601f01602080910402602001604051908101604052809291908181526020018280546104a990612064565b80156104f65780601f106104cb576101008083540402835291602001916104f6565b820191906000526020600020905b8154815290600101906020018083116104d957829003601f168201915b5050505050905090565b600061050b82610df9565b6105305760405162461bcd60e51b815260040161052790611e33565b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061055782610867565b9050806001600160a01b0316836001600160a01b0316141561058b5760405162461bcd60e51b815260040161052790611f4c565b806001600160a01b031661059d610e16565b6001600160a01b031614806105b957506105b9816103bd610e16565b6105d55760405162461bcd60e51b815260040161052790611d0e565b6105df8383610e1a565b505050565b336105ee82610867565b6001600160a01b03161461060157600080fd5b60006009828154811061062457634e487b7160e01b600052603260045260246000fd5b6000918252602082206003600490920201908101805491935060ff9091169161064c836120ba565b91906101000a81548160ff021916908360ff160217905550505050565b61067a610674610e16565b82610e88565b6106965760405162461bcd60e51b815260040161052790611f8d565b6105df838383610f0d565b6106a9610e16565b6001600160a01b03166106ba610b1d565b6001600160a01b0316146106e05760405162461bcd60e51b815260040161052790611e7f565b60006106ea610b1d565b6040519091506001600160a01b038216904780156108fc02916000818181858888f19350505050158015610722573d6000803e3d6000fd5b5050565b6105df83838360405180602001604052806000815250610b91565b60606009805480602002602001604051908101604052809291908181526020016000905b8282101561085e57838290600052602060002090600402016040518060a001604052908160008201805461079890612064565b80601f01602080910402602001604051908101604052809291908181526020018280546107c490612064565b80156108115780601f106107e657610100808354040283529160200191610811565b820191906000526020600020905b8154815290600101906020018083116107f457829003601f168201915b50505091835250506001828101546020808401919091526002840154604084015260039093015460ff80821660608501526101009091041660809092019190915291835292019101610765565b50505050905090565b6000818152600260205260408120546001600160a01b0316806104665760405162461bcd60e51b815260040161052790611db5565b60006001600160a01b0382166108c45760405162461bcd60e51b815260040161052790611d6b565b506001600160a01b031660009081526003602052604090205490565b6108e8610e16565b6001600160a01b03166108f9610b1d565b6001600160a01b03161461091f5760405162461bcd60e51b815260040161052790611e7f565b610929600061103a565b565b606060006109388361089c565b67ffffffffffffffff81111561095e57634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561099757816020015b61098461166b565b81526020019060019003908161097c5790505b5090506000805b600954811015610b1457846001600160a01b03166109bb82610867565b6001600160a01b03161415610b0257600981815481106109eb57634e487b7160e01b600052603260045260246000fd5b90600052602060002090600402016040518060a0016040529081600082018054610a1490612064565b80601f0160208091040260200160405190810160405280929190818152602001828054610a4090612064565b8015610a8d5780601f10610a6257610100808354040283529160200191610a8d565b820191906000526020600020905b815481529060010190602001808311610a7057829003601f168201915b5050509183525050600182015460208201526002820154604082015260039091015460ff8082166060840152610100909104166080909101528351849084908110610ae857634e487b7160e01b600052603260045260246000fd5b60200260200101819052508180610afe9061209f565b9250505b80610b0c8161209f565b91505061099e565b50909392505050565b6006546001600160a01b031690565b610b34610e16565b6001600160a01b0316610b45610b1d565b6001600160a01b031614610b6b5760405162461bcd60e51b815260040161052790611e7f565b600855565b60606001805461047d90612064565b610722610b8a610e16565b838361108c565b610ba2610b9c610e16565b83610e88565b610bbe5760405162461bcd60e51b815260040161052790611f8d565b610bca8484848461112f565b50505050565b6060610bdb82610df9565b610bf75760405162461bcd60e51b815260040161052790611efd565b6000610c01611162565b90506000815111610c215760405180602001604052806000815250610c4c565b80610c2b84611174565b604051602001610c3c9291906119e5565b6040516020818303038152906040525b9392505050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b600854341015610c9057600080fd5b610c998161128f565b50565b610ca4610e16565b6001600160a01b0316610cb5610b1d565b6001600160a01b031614610cdb5760405162461bcd60e51b815260040161052790611e7f565b6001600160a01b038116610d015760405162461bcd60e51b815260040161052790611bca565b610c998161103a565b60098181548110610d1a57600080fd5b9060005260206000209060040201600091509050806000018054610d3d90612064565b80601f0160208091040260200160405190810160405280929190818152602001828054610d6990612064565b8015610db65780601f10610d8b57610100808354040283529160200191610db6565b820191906000526020600020905b815481529060010190602001808311610d9957829003601f168201915b50505050600183015460028401546003909401549293909290915060ff8082169161010090041685565b6001600160e01b031981166301ffc9a760e01b14919050565b6000908152600260205260409020546001600160a01b0316151590565b3390565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610e4f82610867565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610e9382610df9565b610eaf5760405162461bcd60e51b815260040161052790611cc2565b6000610eba83610867565b9050806001600160a01b0316846001600160a01b03161480610ef55750836001600160a01b0316610eea84610500565b6001600160a01b0316145b80610f055750610f058185610c53565b949350505050565b826001600160a01b0316610f2082610867565b6001600160a01b031614610f465760405162461bcd60e51b815260040161052790611eb4565b6001600160a01b038216610f6c5760405162461bcd60e51b815260040161052790611c47565b610f778383836105df565b610f82600082610e1a565b6001600160a01b0383166000908152600360205260408120805460019290610fab908490612021565b90915550506001600160a01b0382166000908152600360205260408120805460019290610fd9908490611ff5565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b031614156110be5760405162461bcd60e51b815260040161052790611c8b565b6001600160a01b0383811660008181526005602090815260408083209487168084529490915290819020805460ff1916851515179055517f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3190611122908590611b20565b60405180910390a3505050565b61113a848484610f0d565b611146848484846113e4565b610bca5760405162461bcd60e51b815260040161052790611b78565b60408051602081019091526000815290565b60608161119957506040805180820190915260018152600360fc1b6020820152610469565b8160005b81156111c357806111ad8161209f565b91506111bc9050600a8361200d565b915061119d565b60008167ffffffffffffffff8111156111ec57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611216576020820181803683370190505b5090505b8415610f055761122b600183612021565b9150611238600a866120da565b611243906030611ff5565b60f81b81838151811061126657634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350611288600a8661200d565b945061121a565b600061129b60646114ff565b905060006112af662386f26fc100006114ff565b6040805160a08101825285815260075460208083019190915291810183905260016060820181905260ff86166080830152600980549182018155600052815180519495509193849360049092027f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af019261132d9284929101906116a0565b50602082015160018201556040820151600282015560608201516003909101805460809093015160ff9081166101000261ff00199190931660ff199094169390931792909216179055600754611384903390611539565b336001600160a01b03167fe2fdc2271b66768a4d9f8410e0d355a6931c0b83236b460fd3ddcd3585568421600754846040516113c1929190611fe7565b60405180910390a2600780549060006113d98361209f565b919050555050505050565b60006113f8846001600160a01b0316611553565b156114f457836001600160a01b031663150b7a02611414610e16565b8786866040518563ffffffff1660e01b81526004016114369493929190611a48565b602060405180830381600087803b15801561145057600080fd5b505af1925050508015611480575060408051601f3d908101601f1916820190925261147d9181019061193f565b60015b6114da573d8080156114ae576040519150601f19603f3d011682016040523d82523d6000602084013e6114b3565b606091505b5080516114d25760405162461bcd60e51b815260040161052790611b78565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610f05565b506001949350505050565b6000804233604051602001611515929190611a14565b60408051601f1981840301815291905280516020909101209050610c4c83826120da565b610722828260405180602001604052806000815250611559565b3b151590565b611563838361158c565b61157060008484846113e4565b6105df5760405162461bcd60e51b815260040161052790611b78565b6001600160a01b0382166115b25760405162461bcd60e51b815260040161052790611dfe565b6115bb81610df9565b156115d85760405162461bcd60e51b815260040161052790611c10565b6115e4600083836105df565b6001600160a01b038216600090815260036020526040812080546001929061160d908490611ff5565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6040518060a00160405280606081526020016000815260200160008152602001600060ff168152602001600060ff1681525090565b8280546116ac90612064565b90600052602060002090601f0160209004810192826116ce5760008555611714565b82601f106116e757805160ff1916838001178555611714565b82800160010185558215611714579182015b828111156117145782518255916020019190600101906116f9565b50611720929150611724565b5090565b5b808211156117205760008155600101611725565b600067ffffffffffffffff808411156117545761175461211a565b604051601f8501601f1916810160200182811182821017156117785761177861211a565b60405284815291508183850186101561179057600080fd5b8484602083013760006020868301015250509392505050565b80356001600160a01b038116811461046957600080fd5b6000602082840312156117d1578081fd5b610c4c826117a9565b600080604083850312156117ec578081fd5b6117f5836117a9565b9150611803602084016117a9565b90509250929050565b600080600060608486031215611820578081fd5b611829846117a9565b9250611837602085016117a9565b9150604084013590509250925092565b6000806000806080858703121561185c578081fd5b611865856117a9565b9350611873602086016117a9565b925060408501359150606085013567ffffffffffffffff811115611895578182fd5b8501601f810187136118a5578182fd5b6118b487823560208401611739565b91505092959194509250565b600080604083850312156118d2578182fd5b6118db836117a9565b9150602083013580151581146118ef578182fd5b809150509250929050565b6000806040838503121561190c578182fd5b611915836117a9565b946020939093013593505050565b600060208284031215611934578081fd5b8135610c4c81612130565b600060208284031215611950578081fd5b8151610c4c81612130565b60006020828403121561196c578081fd5b813567ffffffffffffffff811115611982578182fd5b8201601f81018413611992578182fd5b610f0584823560208401611739565b6000602082840312156119b2578081fd5b5035919050565b600081518084526119d1816020860160208601612038565b601f01601f19169290920160200192915050565b600083516119f7818460208801612038565b835190830190611a0b818360208801612038565b01949350505050565b91825260601b6bffffffffffffffffffffffff1916602082015260340190565b6001600160a01b0391909116815260200190565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611a7b908301846119b9565b9695505050505050565b60208082528251828201819052600091906040908185019080840286018301878501865b83811015611b1257603f19898403018552815160a08151818652611acf828701826119b9565b838b0151878c0152898401518a88015260608085015160ff9081169189019190915260809485015116939096019290925250509386019390860190600101611aa9565b509098975050505050505050565b901515815260200190565b600060208252610c4c60208301846119b9565b600060a08252611b5160a08301886119b9565b602083019690965250604081019390935260ff918216606084015216608090910152919050565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252601c908201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604082015260600190565b60208082526024908201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526019908201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604082015260600190565b6020808252602c908201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b60208082526038908201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760408201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606082015260800190565b6020808252602a908201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604082015269726f206164647265737360b01b606082015260800190565b60208082526029908201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460408201526832b73a103a37b5b2b760b91b606082015260800190565b6020808252818101527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604082015260600190565b6020808252602c908201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526029908201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960408201526839903737ba1037bbb760b91b606082015260800190565b6020808252602f908201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60408201526e3732bc34b9ba32b73a103a37b5b2b760891b606082015260800190565b60208082526021908201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656040820152603960f91b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b90815260200190565b918252602082015260400190565b60008219821115612008576120086120ee565b500190565b60008261201c5761201c612104565b500490565b600082821015612033576120336120ee565b500390565b60005b8381101561205357818101518382015260200161203b565b83811115610bca5750506000910152565b60028104600182168061207857607f821691505b6020821081141561209957634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156120b3576120b36120ee565b5060010190565b600060ff821660ff8114156120d1576120d16120ee565b60010192915050565b6000826120e9576120e9612104565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b031981168114610c9957600080fdfea26469706673582212204dae8cc1117e97ec084315e364be0edcc0ab79eaa591e5e80bbd2b93f6f176f264736f6c63430008000033";

type RobTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RobTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RobToken__factory extends ContractFactory {
  constructor(...args: RobTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "RobToken";
  }

  deploy(
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RobToken> {
    return super.deploy(_name, _symbol, overrides || {}) as Promise<RobToken>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  attach(address: string): RobToken {
    return super.attach(address) as RobToken;
  }
  connect(signer: Signer): RobToken__factory {
    return super.connect(signer) as RobToken__factory;
  }
  static readonly contractName: "RobToken";
  public readonly contractName: "RobToken";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RobTokenInterface {
    return new utils.Interface(_abi) as RobTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RobToken {
    return new Contract(address, _abi, signerOrProvider) as RobToken;
  }
}