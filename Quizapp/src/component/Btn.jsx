import React, { useEffect, useState } from 'react'

const Btn = () => {
    const [counter, setCounter] = useState(0)
    const [secondcounter, setSecondCounter] = useState(0)
    useEffect(() => {
        console.log("btn component mounted");


    
    }, [secondcounter])
    return (
        <div style={{
            border: '1px solid black',
            padding: '20px',
            margin: '20px',
            borderRadius: '10px'
        }}>
            <h1>{counter} {secondcounter}</h1>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter(counter - 1)}>-</button>

            <button onClick={() => setSecondCounter(secondcounter + 1)}>Add second Counter</button>
        </div>
    )
}

export default Btn