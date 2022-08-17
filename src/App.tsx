import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavigationBar from "./components/NavigationBar";
import Counter from "./pages/Counter";
import UseEffect from "./pages/UseEffect";
import UseMemo from "./pages/UseMemo";

function App() {
  return (
    <Fragment>
      <NavigationBar />
      <Container>
        <Routes>
          <Route path="/" element={<Counter />}></Route>
          <Route path="/effect" element={<UseEffect />}></Route>
          <Route path="/memo" element={<UseMemo />}></Route>
          {/* <Route path="/memo" element={<UseMemo />}></Route> */}
          {/* <Route path="/memo" element={<UseMemo />}></Route> */}
        </Routes>
      </Container>
    </Fragment>
  );
}

export default App;
