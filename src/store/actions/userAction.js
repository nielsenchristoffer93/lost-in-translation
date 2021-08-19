const ADD_USER = 'ADD_USER';
const INCREMENT_USER_ID = 'INCREMENT_USER_ID';

const user_id = {};


export const addUser = (username) => ({
    type: 'ADD_USER',
    payload: username,
});