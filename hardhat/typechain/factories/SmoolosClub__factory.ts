/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SmoolosClub, SmoolosClubInterface } from "../SmoolosClub";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "accounts",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalancePerAccount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalAccounts",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
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
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516200102438038062001024833981810160405281019061003491906100d0565b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505061014b565b6000815190506100ca81610134565b92915050565b6000602082840312156100e6576100e561012f565b5b60006100f4848285016100bb565b91505092915050565b60006101088261010f565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b61013d816100fd565b811461014857600080fd5b50565b610ec9806200015b6000396000f3fe6080604052600436106100915760003560e01c80638da5cb5b116100595780638da5cb5b1461015e578063d0e30db014610189578063da6841aa14610193578063ecbde5e6146101be578063f2a40db8146101e957610091565b806312065fe01461009657806318160ddd146100c15780631a96f1b3146100ec57806327e235e3146101175780633ccfd60b14610154575b600080fd5b3480156100a257600080fd5b506100ab610226565b6040516100b89190610bf7565b60405180910390f35b3480156100cd57600080fd5b506100d661022e565b6040516100e39190610bf7565b60405180910390f35b3480156100f857600080fd5b506101016102d4565b60405161010e9190610bf7565b60405180910390f35b34801561012357600080fd5b5061013e60048036038101906101399190610a2b565b610305565b60405161014b9190610bf7565b60405180910390f35b61015c61031d565b005b34801561016a57600080fd5b50610173610561565b6040516101809190610b5c565b60405180910390f35b610191610587565b005b34801561019f57600080fd5b506101a86108c3565b6040516101b59190610bf7565b60405180910390f35b3480156101ca57600080fd5b506101d36108d0565b6040516101e09190610bf7565b60405180910390f35b3480156101f557600080fd5b50610210600480360381019061020b9190610a58565b610981565b60405161021d9190610b5c565b60405180910390f35b600047905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561029757600080fd5b505afa1580156102ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102cf9190610a85565b905090565b6000804714156102e75760009050610302565b6102ff600380549050476109c090919063ffffffff16565b90505b90565b60026020528060005260406000206000915090505481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103a490610bd7565b60405180910390fd5b60005b60038054905081101561055e576000600382815481106103d3576103d2610d8d565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506003828154811061041457610413610d8d565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549081150290604051600060405180830381858888f193505050501580156104c3573d6000803e3d6000fd5b506000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506003828154811061051d5761051c610d8d565b5b9060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905550808061055690610ce6565b9150506103b0565b50565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b81526004016105e39190610b5c565b60206040518083038186803b1580156105fb57600080fd5b505afa15801561060f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106339190610a85565b11610673576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066a90610b97565b60405180910390fd5b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054146106f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ec90610bb7565b60405180910390fd5b60003411610738576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072f90610b77565b60405180910390fd5b610763600160038054905061074d9190610c23565b610755610226565b6109c090919063ffffffff16565b341461076e57600080fd5b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054141561081a576003339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b61086c34600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546109d690919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546108ba9190610c23565b92505081905550565b6000600380549050905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b815260040161092c9190610b5c565b60206040518083038186803b15801561094457600080fd5b505afa158015610958573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097c9190610a85565b905090565b6003818154811061099157600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600081836109ce9190610c79565b905092915050565b600081836109e49190610c23565b905092915050565b6000813590506109fb81610e65565b92915050565b600081359050610a1081610e7c565b92915050565b600081519050610a2581610e7c565b92915050565b600060208284031215610a4157610a40610dbc565b5b6000610a4f848285016109ec565b91505092915050565b600060208284031215610a6e57610a6d610dbc565b5b6000610a7c84828501610a01565b91505092915050565b600060208284031215610a9b57610a9a610dbc565b5b6000610aa984828501610a16565b91505092915050565b610abb81610caa565b82525050565b6000610ace601583610c12565b9150610ad982610dc1565b602082019050919050565b6000610af1601783610c12565b9150610afc82610dea565b602082019050919050565b6000610b14600b83610c12565b9150610b1f82610e13565b602082019050919050565b6000610b37600a83610c12565b9150610b4282610e3c565b602082019050919050565b610b5681610cdc565b82525050565b6000602082019050610b716000830184610ab2565b92915050565b60006020820190508181036000830152610b9081610ac1565b9050919050565b60006020820190508181036000830152610bb081610ae4565b9050919050565b60006020820190508181036000830152610bd081610b07565b9050919050565b60006020820190508181036000830152610bf081610b2a565b9050919050565b6000602082019050610c0c6000830184610b4d565b92915050565b600082825260208201905092915050565b6000610c2e82610cdc565b9150610c3983610cdc565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610c6e57610c6d610d2f565b5b828201905092915050565b6000610c8482610cdc565b9150610c8f83610cdc565b925082610c9f57610c9e610d5e565b5b828204905092915050565b6000610cb582610cbc565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610cf182610cdc565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610d2457610d23610d2f565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b7f596f75206e65656420696e707574207468616e20300000000000000000000000600082015250565b7f596f75206d7573742068617665206120736d6f6f6c6f73000000000000000000600082015250565b7f596f7520616c7265616479000000000000000000000000000000000000000000600082015250565b7f4f6e6c79204f776e657200000000000000000000000000000000000000000000600082015250565b610e6e81610caa565b8114610e7957600080fd5b50565b610e8581610cdc565b8114610e9057600080fd5b5056fea2646970667358221220f6cea5e401bd03ca395d950754e40c94df2967b2700631a47cf71ed4e221572f64736f6c63430008060033";

export class SmoolosClub__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SmoolosClub> {
    return super.deploy(_address, overrides || {}) as Promise<SmoolosClub>;
  }
  getDeployTransaction(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_address, overrides || {});
  }
  attach(address: string): SmoolosClub {
    return super.attach(address) as SmoolosClub;
  }
  connect(signer: Signer): SmoolosClub__factory {
    return super.connect(signer) as SmoolosClub__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SmoolosClubInterface {
    return new utils.Interface(_abi) as SmoolosClubInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SmoolosClub {
    return new Contract(address, _abi, signerOrProvider) as SmoolosClub;
  }
}