import React, { useEffect, useRef, useState } from "react";
import "./Timer.css";
let Timer = () => {
    let [count, setCount] = useState(0)


    let ref = useRef()

    useEffect(() => {
        handalstart()

        return () => { //not get
            clearInterval(ref.current)
        }
    }, [])
    let handalstart = () => {
        //not get
         ref.current = setInterval(() => {
            setCount((p) => p + 1)
        }, 1000)

    }
    let handalstop=() => {
        clearInterval(ref.current)
    }
    let handalreset = () => {
        setCount(0)
        clearInterval(ref.current)
    }
    return (
        <>
            <div className="timer-container">
                <div className="timer-display">
                    <p>{count}</p>
                </div>
                <div className="timer-button"
>
                <button onClick={handalstart}>
                    Start
                </button>
                <button  onClick={handalstop}>
                    Stop
                </button>
                <button  onClick={handalreset}>
                    Reset
                </button>
                </div>
            </div>
        </>
    )
}
export default Timer;