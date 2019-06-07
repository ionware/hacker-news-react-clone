import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import Stories from './components/Stories';
import "./styles/base.css";
import "./styles/theme.css"

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Nav/>
                <Stories/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));