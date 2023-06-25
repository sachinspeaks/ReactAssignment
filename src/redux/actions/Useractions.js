import { ActionTypes } from "../constants/action-types"
export const SetUsers=(users)=>{
    console.log(users,"useraction user")
    return({type:ActionTypes.Set_Users,
        payload:users} )
}
export const SelectedUsers=(users)=>{
    return {
        type:ActionTypes.Selected_Users,
        payload:users
    }
}