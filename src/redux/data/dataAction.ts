// log
import store from "../store";
import { DataAction } from "./dataReducer";

const fetchDataRequest = () => {
  return {
    type: "CHECK_DATA_REQUEST",
  };
};

const fetchDataSuccess = (payload): DataAction => {
  return {
    type: "CHECK_DATA_SUCCESS",
    payload: payload,
  };
};

const fetchDataFailed = (payload): DataAction => {
  return {
    type: "CHECK_DATA_FAILED",
    payload: payload,
  };
};

export const fetchData = (account) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      let allRobs = await store
        .getState()
        .blockchain.robToken.methods.getRobs()
        .call();
      let allOwnerRobs = await store
        .getState()
        .blockchain.robToken.methods.getOwnerRobs(account)
        .call();

      dispatch(
        fetchDataSuccess({
          allRobs,
          allOwnerRobs,
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
};
