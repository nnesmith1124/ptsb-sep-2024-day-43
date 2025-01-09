import React from 'react'

import "../App.css"

export default function PostList({ data }) {
    return (
        <ul className='post-list'>
            {data.map(post => (
                <h1 key={post.id}>
                    <p> {post.userid}</p>
                    <p> {post.title}</p>
                    <p>{post.body}</p>
                </h1>
            ))}
        </ul>
    )
}
