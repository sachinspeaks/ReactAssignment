import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom';

export default function UserComponent() {
    const users = useSelector((state) => state.allproducts.users.data)
    console.log("useeeeeer ", users)
    const userlist = users.map((user) => {

        const { first_name, avatar ,id} = user
        return (
            <div className="mx-3">
                    <div className="card my-3 " style={{ width: "18rem" }}>
                        <img src={avatar} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{first_name}</h5>
                            <Link to={`/users/${id}`} className="btn btn-primary">Details</Link>
                        </div>
                    </div>
                </div>
        );
    });
    return <div>{userlist}</div>;
}


