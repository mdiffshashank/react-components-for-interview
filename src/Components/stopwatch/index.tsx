import { useState, useRef, useEffect } from "react";
import Card from "../card/card";
import "./stopwatch.style.css";

const Stopwatch = () => {
  const timeRef = useRef<number>(0);
  const startRef = useRef<HTMLButtonElement>(null);
  const resetRef = useRef<HTMLButtonElement>(null);

  const [timePassed, setTimePassed] = useState<string>("");
  const [records, setRecords] = useState<string[]>([]);

  const handleStart = () => {
    startRef.current?.setAttribute("disabled", "true");
    resetRef.current?.removeAttribute("disabled");
    const startTime = new Date();
    clearInterval(timeRef.current);
    timeRef.current = setInterval(function () {
      //@ts-ignore
      setTimePassed(parseInt((new Date() - startTime) / 100));
    }, 100);
  };
  const handleRecord = () => {
    setRecords([...records, timePassed]);
  };

  const handleReset = () => {
    clearInterval(timeRef.current);
    startRef.current?.removeAttribute("disabled");
    resetRef.current?.setAttribute("disabled", "true");
    setRecords([]);
  };

  useEffect(() => {
    resetRef.current?.setAttribute("disabled", "true");
  }, []);

  return (
    <Card>
      <h4>3- Stopwatch</h4>

      <p>{timePassed}</p>
      <div>
        {records.map((val) => (
          <i key={val}>{`${val} , `}</i>
        ))}
      </div>

      <div>
        <button ref={startRef} className="btn" onClick={handleStart}>
          Start
        </button>
        <button className="btn" onClick={handleRecord}>
          Record
        </button>
        <button ref={resetRef} className="btn" onClick={handleReset}>
          Stop
        </button>
      </div>
    </Card>
  );
};

export default Stopwatch;
