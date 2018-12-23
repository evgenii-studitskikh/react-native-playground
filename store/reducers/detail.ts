import { Reducer } from "redux";

import { 
  detailConstants
} from "../constants";

interface IDetailReducer {
  dataImages: any,
} 

const inititalState = {
  dataImages: []
};

export const detail: Reducer<IDetailReducer> = (state = inititalState, action) => {
  switch (action.type) {
    case detailConstants.SET_DATA_IMAGES:
      return {
        ...state,
        dataImages: action.payload
      };
    default:
      return state;
  }
};