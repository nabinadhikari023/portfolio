import "./App.css";

import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


export class App extends Component {
  apiKey= process.env.REACT_APP_API_KEY;

  constructor() {
    super();
    this.state = {
      mode: "light",
    };
  }

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  toggleMode = (cls) => {
    //document.body.classList.add('bg-'+cls)
    if (this.state.mode === "light") {
      this.setState({
        mode: "dark",
      });
      document.body.style.backgroundColor = "#000000";
    } else {
      this.setState({
        mode: "light",
      });
      document.body.style.backgroundColor = "white";
    }
  };
  pageSize = 20;
  render() {
    return (
      <>
        <Router>
          <LoadingBar
            color="#f11946"
            height={3}
            progress={this.state.progress}
          />
          <NavBar mode={this.state.mode} toggleMode={this.toggleMode} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  mode={this.state.mode}
                  key="home"
                  category={"general"}
                  pageSize={this.pageSize}
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  mode={this.state.mode}
                  key="general"
                  category={"general"}
                  pageSize={this.pageSize}
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  mode={this.state.mode}
                  key="science"
                  category={"science"}
                  pageSize={this.pageSize}
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  mode={this.state.mode}
                  key="entertainment"
                  category={"entertainment"}
                  pageSize={this.pageSize}
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  mode={this.state.mode}
                  key="health"
                  category={"health"}
                  pageSize={this.pageSize}
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  mode={this.state.mode}
                  key="technology"
                  category={"technology"}
                  pageSize={this.pageSize}
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  mode={this.state.mode}
                  key="sports"
                  category={"sports"}
                  pageSize={this.pageSize}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
