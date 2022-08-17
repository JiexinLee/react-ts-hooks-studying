import React, { Fragment, useEffect, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

type itemType = {
  userId: number;
  id: number;
  title: string;
  body: string;
  name: string;
};
/**
 * useEffect is mainly for getting data, initial components
 */
function UseEffect() {
  const [resourceType, setResourceType] = useState("posts");
  // when resizing window, will change the value of windowWidth
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [items, setItems] = useState<itemType[]>();

  // 1st parameter is the function each time calling useEffect
  // if 2nd parameter is provided. useEffect only be called when the value changed.
  // RETURN => ComponentDidUnmount
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));

    return () => {
      console.log("component unmount ... ");
    };
  }, [resourceType]);

  useEffect(() => {
    // apply event listener to the useEffect
    window.addEventListener("resize", handleResize);
    // remove event from the hook
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <Fragment>
      <h2>UseEffect</h2>
      <h5>{windowWidth}</h5>
      <div className="mb-5">
        <ButtonGroup>
          <Button variant="secondary" onClick={() => setResourceType("posts")}>
            Posts
          </Button>
          <Button variant="secondary" onClick={() => setResourceType("users")}>
            Users
          </Button>
          <Button
            variant="secondary"
            onClick={() => setResourceType("comments")}
          >
            Comments
          </Button>
        </ButtonGroup>
      </div>
      <h2>{resourceType}</h2>
      <ul>
        {items?.map((item: itemType) => (
          <li key={item.id}>{item.name ? item.name : item.title}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default UseEffect;
