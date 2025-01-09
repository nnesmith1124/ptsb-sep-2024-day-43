import React, { useState, useEffect } from 'react'

export default function App() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Our count is ${count}`
    }, [count])

    return (
        <div>
            <h1>Hello from App.jsx</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}
