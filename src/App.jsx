import React, { useState, useEffect } from 'react'

import Users from './components/Users'

import './App.css'

export default function App() {
    const [count, setCount] = useState(0) // Initialize the `count` state variable with a value of 0

    /* The `useEffect` hook in the provided code snippet is used to perform side effects in a functional
    component. In this case, it updates the document title based on the value of the `count` state
    variable. */
    useEffect(() => {
        document.title = `Our count is ${count}` // Update the document title
    }, [count]) // Run the effect only when `count` changes

    return (
        <div className="App">
            <h1>Hello from App.jsx</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <Users />
        </div>
    )
}
