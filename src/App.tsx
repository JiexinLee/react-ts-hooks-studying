import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavigationBar from "./components/NavigationBar";
import Counter from "./pages/Counter";
import UseEffect from "./pages/UseEffect";
import UseMemo from "./pages/UseMemo";
import UseRef from "./pages/UseRef";
import CSSPractice from "./pages/CSSPractice";
import UseContext from "./pages/UseContext";

function App() {
  return (
    <Fragment>
      <NavigationBar />
      <Container>
        <Routes>
          <Route path="/" element={<Counter />}></Route>
          <Route path="/effect" element={<UseEffect />}></Route>
          <Route path="/memo" element={<UseMemo />}></Route>
          <Route path="/ref" element={<UseRef />}></Route>
          <Route path="/css" element={<CSSPractice />}></Route>
          <Route path="/context" element={<UseContext />}></Route>
        </Routes>
      </Container>
    </Fragment>
  );
}

export default App;
