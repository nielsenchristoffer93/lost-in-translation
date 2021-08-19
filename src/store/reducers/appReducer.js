import { useReducer } from "react";
import { combineReducers } from "redux";

export const appReducer = combineReducers({
    user: userReducer,
    translations: translationsReducer
})