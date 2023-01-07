import axios from "axios";

export const RESET_USER = "RESET_USER";

export const userLogOut = () => {
    return async (dispatch) => {
      try {
        return dispatch({
          type: RESET_USER,
        });
      } catch (error) {
        console.log(error);
      }
    };
  };