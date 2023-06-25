import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function UserDetails() {
  const ans=useSelector((state)=>state.allproducts.users)
  console.log(ans,"aergag")
  const { userid } = useParams()
  const {first_name,last_name,avatar,id,email}=ans[userid-1];

  return (
    <div className="card my-5 mx-5" style={{width: "20rem"}}>
      <img src={avatar} className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text">ID : {id}</p>
          <p className="card-text">Name : {`${first_name} ${last_name}`}</p>
          <p className="card-text">Email : {email}</p>
        </div>
    </div>
  )
}
