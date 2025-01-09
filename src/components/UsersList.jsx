import React from 'react'

export default function UsersList({ data }) {
    return (
        <ul>
            {data.map(user => (
                <li key={user.id}>
                    <p>{user.name}</p>
                    <p><a href={`http://www.` + user.website}>{user.website}</a></p>
                </li>
            ))}
        </ul>
    )
}
