import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./Components/Header/header";
import HomeIndex from "./Components/Home-Page/home-index"
import './App.css';
import AccountBreakdownIndex from "./Components/Account-Breakdown/account-breakdown-index";
import SupportIndex from "./Components/Support/support-index";

function App() {
    return (
        <Router>
            <div className="App">
                <div>
                    <Route path="/" component={Header}/>
                </div>
                <Route exact path="/home" component={HomeIndex}/>
                <Route exact path="/accountbreakdown" component={AccountBreakdownIndex}/>
                <Route exact path="/support" component={SupportIndex}/>
            </div>
        </Router>
    )
}

export default App;
