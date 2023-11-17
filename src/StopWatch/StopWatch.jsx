import React, { useEffect, useRef, useState } from "react";
import "./StopWatch.css";
let StopWatch = () => {
  let [count, setCount] = useState(0);


  let ref = useRef();
  useEffect(() => {
    handalstart();
    return () => {
      clearInterval(ref.current);
    };
  },[]);

  let handalstart = () => {
    ref.current = setInterval(() => {
      setCount((p) => p + 1);
    }, 1000);
  };

  let handalstop = () => {
    clearInterval(ref.current);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };
  let handalrestar = () => {
    
      clearInterval(ref.current);
      setCount(0);
    }

    
  

  return (
    <>
      <div>
        <p>{formatTime(count)}</p>
        <button style={{}} onClick={() => handalstart((p) => p + 1)}
       >
          start
        </button>
        <button onClick={handalstop}>stop</button>
        <button onClick={handalrestar}>Reset</button>
      </div>
    </>
  );
};
export default StopWatch;
