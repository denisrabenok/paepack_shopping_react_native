import * as actions from "../actions/action-types";
import { Alert } from "react-native";
export function login(email, password) {
    return {
        type: actions.LOGIN_ACTION,
        email: email,
        password: password
    }
}

export function setError(error) {
    // Alert.alert('action test: ' + error.msg)
    return {
        type: actions.LOGIN_ERROR,
        error: error
    }
}

export function setLoginSuccess(res, email, password) {
    return {
        type: actions.LOGIN_SUCCESS,
        res, res,
        email, email,
        password: password,
    }
}