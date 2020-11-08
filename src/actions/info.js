import { types } from "../types/types";

export const infoCategoriesData = (infoCategoriesData) => {
  return {
    type: types.infoCategory,
    data: { infoCategoriesData },
  };
};
export const infoCategoriesMsg = (msgError) => {
  return {
    type: types.msgCategory,
    msg: { msgError },
  };
};
