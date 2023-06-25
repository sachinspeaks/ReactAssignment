import { ActionTypes } from "../constants/action-types"
const initialstate={
    users:[],
}
export const userReducer=(state=initialstate,{type,payload})=>{
    switch(type){
        case ActionTypes.Set_Users:
            return {...state,users:payload}
        default:
            return state

    }
}

export const selectedUserReducer=(state={},{type,payload})=>{
    switch(type)
    {
        case ActionTypes.Selected_Users:
            return {...state,...payload}
        default:
            return state
    }
}