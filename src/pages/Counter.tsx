import React, { useState } from "react";
import { Badge, Button } from "react-bootstrap";

function initialCounterState() {
  console.log("init state counter ..");
  return 0;
}

function Counter() {
  // Should call the initialCounterState function like this way
  // Otherwise, the function will be called each time when calling setCount
  const [count, setCount] = useState(() => initialCounterState());

  const [state, setState] = useState({ count: 1, theme: "red" });

  /// if gonna to operate the Object, must use spread operator to copy the rest element..
  const anotherFunction = () =>
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });

  // use this syntax everytime for calling setCount function
  const increaseCount = () => setCount((prevCount) => prevCount + 1);
  const decreaseCount = () => setCount((prevCount) => prevCount - 1);

  return (
    <div className="pt-3">
      <h2>Counter</h2>
      <div className="my-2">
        <Button variant="warning" onClick={increaseCount}>
          Add
        </Button>
        <Badge bg="secondary" className="mx-3">
          {count}
        </Badge>
        <Button variant="danger" onClick={decreaseCount}>
          Reduce
        </Button>
        <Button variant="primary" onClick={anotherFunction}>
          Another
        </Button>
      </div>
      <h3>{state.count}</h3>
      <h3>{state.theme}</h3>
    </div>
  );
}

export default Counter;
