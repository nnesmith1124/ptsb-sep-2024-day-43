import React, { useState, useEffect } from "react";

import UsersList from "./UsersList";

export default function Users() {
    const [data, setData] = useState([]); // our initial state is an empty array
    const [loading, setLoading] = useState(true);

    useEffect(
        () => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(users => {
                    setData(users);
                    setLoading(false);
                })
                .catch(error => {
                    console.log(error);
                    setLoading(false);
                })
        },
        [] // empty dependency array means this effect will only run once when the component mounts
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <UsersList data={data} />
        </div>
    )
}
