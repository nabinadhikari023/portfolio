import "./App.css";

import React from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [progress, setProgress] = useState();
  const [mode, setMode] = useState("light");
  const pageSize = 20;

  const showProgress = (progress) => {
    setProgress(progress);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#000000";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Router>
        <LoadingBar color="#f11946" height={3} progress={progress} />
        <NavBar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={showProgress}
                apiKey={apiKey}
                mode={mode}
                key="home"
                category={"general"}
                pageSize={pageSize}
              />
            }
          ></Route>
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={showProgress}
                apiKey={apiKey}
                mode={mode}
                key="general"
                category={"general"}
                pageSize={pageSize}
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={showProgress}
                apiKey={apiKey}
                mode={mode}
                key="science"
                category={"science"}
                pageSize={pageSize}
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={showProgress}
                apiKey={apiKey}
                mode={mode}
                key="entertainment"
                category={"entertainment"}
                pageSize={pageSize}
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={showProgress}
                apiKey={apiKey}
                mode={mode}
                key="health"
                category={"health"}
                pageSize={pageSize}
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={showProgress}
                apiKey={apiKey}
                mode={mode}
                key="technology"
                category={"technology"}
                pageSize={pageSize}
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={showProgress}
                apiKey={apiKey}
                mode={mode}
                key="sports"
                category={"sports"}
                pageSize={pageSize}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
