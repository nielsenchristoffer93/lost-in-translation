import { combineReducers } from "redux";

const ADD_TRANSLATION_TO_USER = 'ADD_TRANSLATION_TO_USER';

export const addTranslation = (userId, translationString) => ({
    type: 'ADD_TRANSLATION_TO_USER',
    payload: userId , translationString,
})