import { combineReducers } from "redux";

const ADD_USER = 'ADD_USER';

export function addUser(user){
    return{
        type: ADD_USER,
        user
    }
}
export function incrementUserId(user){
    return{
        type: INCREMENT_USER,
        user
    }
}
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
                    name: action.user
                }
            ];
        case INCREMENT_USER:
            const user = state.find(b => action.user === b.name);
            const users = state.filter(b => action.user !== b.name);
            return[
                ...users,
                {
                    ...user,
                    user_id: user_id + 1
                }
            ];
            return state;    
        default:
            return state;
    }
    
}

const userApp = combineReducers({
    users
});

export default userApp;