import { types } from "../types/types";

export const infoReducer = (state = [], action) => {
  switch (action.type) {
    case types.infoSearchProfile:
      return {
        providerData: action.payload.providerData,
      };

    default:
      return state;
  }
};
