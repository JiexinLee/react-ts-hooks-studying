import React, { Fragment, useMemo, useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function UseMemo() {
  const [number, setNumber] = useState(0);
  const [other, setOther] = useState(true);

  // Situation1: if there is a slow function in the code,
  // eachtime you referesh the page or change another state, page will be reloaded
  // and the slow function will be loaded as well, it will cause page cannot be operated
  // for a while.

  // useMemo is for solving this problem
  // and the slow function only called when value of number changed
  const incrementNumber = () => {
    setNumber((prevNum) => prevNum + 1);
  };
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  // Situation2: if there are useState and useEffect,
  // I don't want to useEffect be called if I click Other Button
  useEffect(() => {
    console.log("use effect ... ");
  }, [other]);

  const changingOther = () => {
    setOther(!other);
  };
  const text = useMemo(() => {
    return other ? "Old Old" : "New New";
  }, [other]);

  return (
    <Fragment>
      <h2>UseMemo</h2>
      <div>{number}</div>
      <div>
        <Button variant="primary" onClick={incrementNumber}>
          Increment
        </Button>
        <Button variant="danger" onClick={changingOther}>
          Other
        </Button>
        <p>{text}</p>
      </div>
      <div>{doubleNumber}</div>
    </Fragment>
  );
}

// for mocking a slow function
function slowFunction(num: number): number {
  console.log("calling slow function ... ");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}
export default UseMemo;
