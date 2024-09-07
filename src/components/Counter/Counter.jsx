"use client";
import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h2 className="text-center font-medium text-md ">counter : {counter}</h2>
      <div className="flex justify-center items-center gap-2">
        <button
          onClick={() => setCounter(counter + 1)}
          className="btn btn-active btn-primary"
        >
          increase
        </button>
        <button
          onClick={() => setCounter(counter - 1)}
          className="btn btn-active btn-secondary"
        >
          decrease
        </button>
        <button
          onClick={() => setCounter(0)}
          className="btn btn-active btn-secondary"
        >
          resetsss
        </button>
      </div>
    </div>
  );
};

export default Counter;
