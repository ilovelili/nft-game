import { Robot } from '../../components/robRenderer';

export interface DataState {
  loading: boolean,
  allRobs: Robot[],
  allOwnerRobs: Robot[],
  error: boolean,
  errorMsg: any,
}


const initialState: DataState = {
  loading: false,
  allRobs: [],
  allOwnerRobs: [],
  error: false,
  errorMsg: "",
};

export interface DataAction {
  type: string,
  payload: DataPayload,
}

interface DataPayload {
  allRobs: Robot[],
  allOwnerRobs: Robot[],
}

const dataReducer = (state: DataState = initialState, action: DataAction): DataState => {
  switch (action.type) {
    case "CHECK_DATA_REQUEST":
      return {
        ...initialState,
        loading: true,
      };
    case "CHECK_DATA_SUCCESS":
      return {
        ...initialState,
        loading: false,
        allRobs: action.payload.allRobs,
        allOwnerRobs: action.payload.allOwnerRobs,
      };
    case "CHECK_DATA_FAILED":
      return {
        ...initialState,
        loading: false,
        error: true,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
