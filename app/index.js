import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import Stories from './components/Stories';
import { BrowserRouter as Router } from 'react-router-dom';
import "./styles/base.css";
import "./styles/theme.css"

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Nav/>
                    <Stories/>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));