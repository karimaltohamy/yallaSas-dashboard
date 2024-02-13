import apiAxios from "../../utils/apiAxios";
import {
  setUserError,
  setUserStart,
  setUserSuccess,
} from "../reducers/userReducer";

export const getUser = async (dispatch) => {
  dispatch(setUserStart());
  try {
    const { data } = await apiAxios.get("api/auth");
    dispatch(setUserSuccess(data));
    return data;
  } catch (error) {
    dispatch(setUserError());
  }
};
