import React from 'react'
import { Link } from 'react-router-dom'

export default function Userlisting(props) {
  return (
    <div>
          {props.temp!=null &&  props.temp.map((t) => (

            < div className="mx-3">
              <div className="card my-3 " style={{ width: "18rem" }}>
                <img src={t.avatar} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{t.first_name}</h5>
                  <Link to={`/users/${t.id}`} className="btn btn-primary">Details</Link>
                </div>
              </div>
        
            </div>
          ))}
    </div>
)
}