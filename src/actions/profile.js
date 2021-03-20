import ProfileService from "../services/profile.service";
import {GET_PROFILE, GET_PROFILE_FAIL, SET_MESSAGE} from "./types";

export const profile = () => (dispatch) => {
  return ProfileService.myProfile().then(
    (data) => {
      dispatch({
        type: GET_PROFILE,
        payload: {profile: data},
      });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.detail) ||
        error.message ||
        error.toString();

      dispatch({
        type: GET_PROFILE_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
