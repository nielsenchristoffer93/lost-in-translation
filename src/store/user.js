import { combineReducers } from "redux";

const ADD_USER = 'ADD_USER';
const INCREMENT_USER_ID = 'INCREMENT_USER_ID';
const user_id = {};


/*export function addUser(user){
    return{
        type: ADD_USER,
        user
    }
}
*/
export const addUser = (username) => ({
    type: 'ADD_USER',
    payload: username,
});

/*export function incrementUserId(user){
    return{
        type: INCREMENT_USER,
        user
    }
}
*/
export const incrementUserId = (previousUserId) => ({
    type: 'INCREMENT_USER_ID',
    payload: previousUserId,
});

const defaultUsers = [
    {
        user_id: 1,
        name: 'DefaultUser'
    }
];
function users(state = defaultUsers, action){
    switch(action.type){
        case ADD_USER:
            return[
                ...state,
                {
                    user_id: 1, //must update
                    name: action.payload
                }
            ];
        case INCREMENT_USER_ID:
            const user = state.find(b => action.user === b.name);
            const users = state.filter(b => action.user !== b.name);
            return[
                ...users,
                {
                    ...user,
                    user_id: action.payload + 1
                }
            ];
        default:
            return state;
    }
    
}

const userApp = combineReducers({
    addUser,
    users,
    incrementUserId
});

export default userApp;