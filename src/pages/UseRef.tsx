import React, { useEffect, useRef, useState } from "react";

function UseRef() {
  const [name, setName] = useState("");
  const renderCount = useRef(0);

  // 1. useRef quite similar to useState, but it won't be changed when update state..
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  }, []);

  // 2. getting DOM by using useRef !!
  // 3. save previous state into a value !!

  return (
    <div>
      <h2>UseRef</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>My Name is {name}</h3>
      <div>I rendered {renderCount.current} times</div>
    </div>
  );
}

export default UseRef;
