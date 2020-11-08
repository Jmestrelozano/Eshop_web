import { types } from "../types/types";

export const infoDataReducer = (state = [], action) => {
  switch (action.type) {
    case types.infoCategory:
      return {
        infoCategoriesData: action.data.infoCategoriesData,
        
      };

      case types.msgCategory:
        return{
          infoMsgCategories:action.msg.msgError
        }

    default:
      return state;
  }
};
