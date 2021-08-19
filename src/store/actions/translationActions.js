const ADD_TRANSLATION_TO_USER = 'ADD_TRANSLATION_TO_USER';
const SHOW_NONDELETED = 'SHOW_NONDELETED';

export const addTranslation = (userId, translationString) => ({
    type: 'ADD_TRANSLATION_TO_USER',
    payload: userId , translationString,
});
export const SHOW_NONDELETED = (userId, isDeleted) => ({
    type: 'SHOW_NONDELETED',
    payload: userId, isDeleted,
});