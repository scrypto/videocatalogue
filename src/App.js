import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";
import ErrorPage from "./pages/ErrorPage";

class App extends Component {
    render() {
        return (
            <div className="App">
              <Header />

              <Router>
                  <Switch>
                      <Route exact path="/" component={HomePage} />
                      <Route path="/movies" component={MoviesPage} />
                      <Route path="/series" component={SeriesPage} />
                      <Route component={ErrorPage} />
                  </Switch>
              </Router>

              <Footer />
            </div>
        );
    }
}

export default App;
