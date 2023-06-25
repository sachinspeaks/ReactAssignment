import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { SelectedUsers } from '../redux/actions/Useractions'
import axios from 'axios'

export default function UserDetails() {
  const { productId } = useParams()
  const curruser = useSelector((state) => state.allproducts.users.data)
  const {id,first_name,last_name,avatar,email}=curruser
  console.log("id ", productId)
  const dispatch = useDispatch();
  const fetchUserDetail = async () => {
    const response = await axios.get(`https://reqres.in/api/users/${productId}`).catch((err) => console.log(err));
    console.log(response.data," single")
    dispatch(SelectedUsers(response.data))
  }
  useEffect(() => {
    if (productId && productId !== "") fetchUserDetail()
  }, [productId])

  return (
    <div class="card" style={{width: "20rem"}}>
      <img src={avatar} class="card-img-top" alt="..."/>
        <div class="card-body">
          <p class="card-text">ID : {id}</p>
          <p class="card-text">Name : {`${first_name} ${last_name}`}</p>
          <p class="card-text">Email : {email}</p>
        </div>
    </div>
  )
}
