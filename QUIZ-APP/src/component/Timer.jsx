import React, { useEffect, useState } from "react";

const Timer = ({setIsOver}) => {
  const [leftTime, setLeftTime] = useState(5);
  const [displayTime, setDisplayTime] = useState('')

  //timer Logic
  useEffect(() => {
    if (leftTime <= 0) {
      clearInterval(intervalId);
      
      return;
    }

    let intervalId = setInterval(() => {
      setLeftTime((prev) => {
        if (prev <= 0) {
          clearInterval(intervalId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  //time Format logic
  useEffect(() => {
    if(leftTime === 0){
      setIsOver(true);
    }
    
   let formatedTime =  `${Math.floor(leftTime / 60)
      .toString()
      .padStart(2, 0)} : ${(leftTime % 60).toString().padStart(2, 0)}`
      setDisplayTime(formatedTime)
  }, [leftTime]);

  
  return <div className="text-3xl">Time Left : {leftTime}</div>;
};

export default Timer;
