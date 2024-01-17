import React, { useEffect } from "react";

const Timer = ({ dispatch, secondsRem }) => {
    const min = Math.floor(secondsRem/60)
    const secs = secondsRem%60
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },

    [dispatch]
  );
  return <div className="timer">{min<10 && "0"}{min}:{secs<10 && '0'}{secs}</div>;
};

export default Timer;
