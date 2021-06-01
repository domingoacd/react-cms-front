import { showLoader, hideLoader, login } from "../store/actions";

export const authUser = (email, password) => {
  return async (dispatch) => {
    dispatch(showLoader());

    setTimeout(() => {
      dispatch(login());
      dispatch(hideLoader());
    }, 3000);
  };
};
