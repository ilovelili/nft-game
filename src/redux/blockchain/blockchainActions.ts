import { AbiItem } from "web3-utils";
import Web3 from "web3";
import { fetchData } from "../data/dataAction";
import { RobToken } from "../../types/RobToken";
import RobTokenABI from "../../contracts/RobToken.json";

declare let window: any;

const connectRequest = () => {
  return {
    type: "CONNECTION_REQUEST",
  };
};

const connectSuccess = (payload: any) => {
  return {
    type: "CONNECTION_SUCCESS",
    payload: payload,
  };
};

const connectFailed = (payload: any) => {
  return {
    type: "CONNECTION_FAILED",
    payload: payload,
  };
};

const updateAccountRequest = (payload: any) => {
  return {
    type: "UPDATE_ACCOUNT",
    payload: payload,
  };
};

export const connect = () => {
  return async (dispatch: any) => {
    dispatch(connectRequest());
    if (window.ethereum) {
      let web3 = new Web3(window.ethereum);
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        const networkId = await window.ethereum.request({
          method: "net_version",
        });

        const networkData = RobTokenABI.networks[networkId];

        // Ropsten supported
        // todo: add matic
        if (networkId === 3) {
          const robToken = new web3.eth.Contract(
            RobTokenABI.abi as AbiItem[],
            networkData.address
          ) as any as RobToken;

          dispatch(
            connectSuccess({
              account: accounts[0],
              robToken,
              web3,
            })
          );

          // Add listeners start
          window.ethereum.on("accountsChanged", (accounts: any) => {
            dispatch(updateAccount(accounts[0]));
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });
          // Add listeners end
        } else {
          dispatch(connectFailed("Change network to Ropsten."));
        }
      } catch (err) {
        dispatch(connectFailed("Something went wrong."));
      }
    } else {
      dispatch(connectFailed("Install Metamask."));
    }
  };
};

export const updateAccount = (account: any) => {
  return async (dispatch: any) => {
    dispatch(updateAccountRequest({ account: account }));
    dispatch(fetchData(account));
  };
};
