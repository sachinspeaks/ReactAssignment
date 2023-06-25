import { ActionTypes } from "../constants/action-types"
const initialstate={
    users:[],
}
export const userReducer=(state=initialstate,{type,payload})=>{
    switch(type){
        case ActionTypes.Set_Users:
            // console.log(payload.data,"payyload")
            const tt= {...state,users:payload}
            return tt
        default:
            return state

    }
}