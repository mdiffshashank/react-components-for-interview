import { useState } from "react";
import Card from "./card/card";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <Card>
      <h4>1- Counter </h4>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
    </Card>
  );
};

export default Counter;
