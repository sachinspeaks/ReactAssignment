import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserComponent from './UserComponent'
import axios from 'axios'
import { SetUsers } from '../redux/actions/Useractions'

export default function Userlisting() {
    const users=useSelector((state)=>state.users)
    const dispatch=useDispatch()
    const fetchusers=async ()=>
    {
        const response=await axios.get("https://reqres.in/api/users?page=1&per_page=5").catch((err)=>{console.log("arjbf  akerbfka    ",err)})
        dispatch(SetUsers(response.data))
    }
    useEffect(()=>{
        fetchusers()
    },[])
  return (
    <div>
        <UserComponent/>
    </div>
  )
}
