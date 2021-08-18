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



const defaultUsers = [
    {
        user_id: 0,
        name: 'DefaultUser'
    }
];
function users(state = [], action){
    switch(action.type){
        case ADD_USER:
            return[
                ...state,
                {
                    user_id: state.length  + 1, //must update
                    name: action.payload
                }
            ];
        
        default:
            return state;
    }
    
}

const userApp = combineReducers({
      users
    
});

export default userApp;