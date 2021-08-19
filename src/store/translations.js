import { combineReducers } from "redux";

const ADD_TRANSLATION_TO_USER = 'ADD_TRANSLATION_TO_USER';

export const addTranslation = (userId, translationString) => ({
    type: 'ADD_TRANSLATION_TO_USER',
    payload: userId , translationString,
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
                    user_id: userId.isDeleted, //must match up
                    phrase: action.payload,
                    isDeleted: false
                }
            ];

        default:
            return state;
    }
}

const translationsApp = combineReducers({
    translations
});

export default translationsApp;