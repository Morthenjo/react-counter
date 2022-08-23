import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  function add() {
    setSeconds(seconds + 1);
  }

  function substract() {
    setSeconds(seconds - 1);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app">
      <h1>Counter</h1>
      <h1 className="time">{seconds}s</h1>
      <div className="row">
        <button
          className={`button start start-${isActive ? "active" : "inactive"}`}
          onClick={toggle}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
      <div>
        <button className="button add" onClick={add}>
          Add
        </button>
        <button className="button substract" onClick={substract}>
          Substract
        </button>
      </div>
    </div>
  );
};

export default Timer;
