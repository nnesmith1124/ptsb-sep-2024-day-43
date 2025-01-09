import React from 'react'

import "../App.css"

export default function UsersList({ data }) {
    return (
        <ul className='users-list'>
            {data.map(user => (
                <h1 key={user.id}>
                    <p>{user.name}</p>
                    <p><a href={`http://www.` + user.website}>{user.website}</a></p>
                </h1>
            ))}
        </ul>
    )
}
