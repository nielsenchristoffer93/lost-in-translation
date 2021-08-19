import { combineReducers } from "redux";

const ADD_TRANSLATION_TO_USER = 'ADD_TRANSLATION_TO_USER';
const SHOW_NONDELETED = 'SHOW_NONDELETED';
const SET_DELETED = 'SET_DELETED';

export const addTranslation = (userId, translationString) => ({
    type: 'ADD_TRANSLATION_TO_USER',
    payload: userId , translationString,
});
export const SHOW_NONDELETED = (userId, isDeleted) => ({
    type: 'SHOW_NONDELETED',
    payload: userId, isDeleted,
});
export const SET_DELETED = (userId) =>({
    type: 'SET_DELETED',
    payload: user_id
});

const defaultTranslations = [
    {
        user_id : 0,
        phrase: "",
        isDeleted:false
    }
];

function translations( state =[], action){
    switch(action.type){
        case ADD_TRANSLATION_TO_USER:
            return[
                ...state,
                {
                    translations: [
                         action.payload.user_id, //must match up
                         action.payload.translationString,
                         false
                    ]
                }
            ];   
        case SHOW_NONDELETED:
            return [
                ...state,
                {
                    translations : state.translations.filter(t => t === action.payload.user_id && action.payload.isDeleted),
                   
                }
            ] 
        case SET_DELETED:
            return[
                ...state,
                {
                    translations : state.translations.filter(t => t === action.payload),
                    isDeleted: action.payload
                }
            ]
        default:
            return state;
    }
}

const translationsApp = combineReducers({
    translations
});

export default translationsApp;