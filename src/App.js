import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";


import Navigation from "./Navigation";
import Header from "./Header";
import Services from "./Services";
import * as serviceWorker from './serviceWorker';

 class App extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Header title="Stylish Portfolio" button="Find out More" />
                <Services />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
