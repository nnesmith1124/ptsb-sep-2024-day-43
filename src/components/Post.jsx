import React, { useState, useEffect } from "react";

import PostList from "./PostList";
import "../App.css"

export default function Post() {
    const [data, setData] = useState([]); // our initial state is an empty array
    const [loading, setLoading] = useState(true);

    useEffect(
        () => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(posts => {
                    setData(posts);
                    setLoading(false);
                })
                .catch(error => {
                    console.log(error);
                    setLoading(true);
                })
        },
        [] // empty dependency array means this effect will only run once when the component mounts
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="posts-container">
            <PostList data={data} />
        </div>
    )
}

