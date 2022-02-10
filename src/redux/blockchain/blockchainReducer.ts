import { Contract } from "web3-eth-contract";
import Web3 from "web3";

export interface BlockchainState {
  loading: boolean;
  account: any;
  robToken?: Contract;
  web3?: Web3;
  errorMsg: any;
}

const initialState: BlockchainState = {
  loading: false,
  account: null,
  errorMsg: "",
};

export interface BlockchainAction {
  type: string;
  payload: BlockchainPayload;
}

interface BlockchainPayload {
  account: any;
  robToken: Contract;
  web3: Web3;
}

const blockchainReducer = (
  state: BlockchainState = initialState,
  action: BlockchainAction
): BlockchainState => {
  switch (action.type) {
    case "CONNECTION_REQUEST":
      return {
        ...initialState,
        loading: true,
      };
    case "CONNECTION_SUCCESS":
      return {
        ...state,
        loading: false,
        account: action.payload.account,
        robToken: action.payload.robToken,
        web3: action.payload.web3,
      };
    case "CONNECTION_FAILED":
      return {
        ...initialState,
        loading: false,
        errorMsg: action.payload,
      };
    case "UPDATE_ACCOUNT":
      return {
        ...state,
        account: action.payload.account,
      };
    default:
      return state;
  }
};

export default blockchainReducer;
