import {
  LOGIN_FETCHING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  server
} from "../Constants";
import { httpClient } from "./../utils/HttpClient";

export const setStateToFetching = () => ({
  type: LOGIN_FETCHING
});

export const setStateToSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload
});

export const setStateToFailed = payload => ({
  type: LOGIN_FAILED,
  payload
});

export const setStateToLogout = () => ({
  type: LOGOUT
});

export const login = ({ username, password, history }) => {
  return async dispatch => {
    dispatch(setStateToFetching());
    // setTimeout(() => {
    //   dispatch(setStateToSuccess("ok"));
    //   history.push("/stock");
    // }, 1000);
    const result = await httpClient.post(server.LOGIN_URL, {
      username,
      password
    });

    if (result.data.result == "ok") {
      dispatch(setStateToSuccess("ok"));
      history.push("/stock");
    } else {
      dispatch(setStateToFailed(result.data.message));
    }
  };
};

export const logout = ({ history }) => {
  return dispatch => {
    dispatch(setStateToLogout());
    history.push("/");
  };
};

export const setSuccess = payload => {
  return dispatch => {
    dispatch(setStateToSuccess(payload));
  };
};

export const hasError = payload => {
  return dispatch => {
    dispatch(setStateToFailed(payload));
  };
};
