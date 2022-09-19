import { signUserIn } from 'services/authService';
import { requestLogin, receiveLogin, loginError, requestLogout, receiveLogout, logoutError } from 'actions'
import { setCookie, getCookie } from 'utils/cookies'
import { VERIFY_REQUEST, LOGIN_SUCCESS, VERIFY_SUCCESS } from 'actions'

export const loginUser = ({ email, password }) => async dispatch => {
  dispatch(requestLogin());
  try {
    const response = await signUserIn({ email, password })
    const decryptData = response.data.payload
    await setCookie('token', decryptData?.token, 7)
    await dispatch(receiveLogin())
    return decryptData
  } catch (error) {
    dispatch(loginError());
    return false
  }
};

export const logoutUser = () => dispatch => {
  dispatch(requestLogout());
  if ("cookie" === null) {
    dispatch(receiveLogout())
  } else {
    dispatch(logoutError())
  }
};

export const verifyAuth = () => dispatch => {
  dispatch({ type: VERIFY_REQUEST })
  const cookie = getCookie("token")
  if (cookie !== null && cookie?.length) {
    dispatch({
      type: LOGIN_SUCCESS,
      user: "cookieConvert"
    })
  }
  dispatch({ type: VERIFY_SUCCESS })
}