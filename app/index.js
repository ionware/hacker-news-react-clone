import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import Stories from './components/Stories';
import { ThemeProvider } from "./context/Theme";
import { BrowserRouter as Router } from 'react-router-dom';
import "./styles/base.css";
import "./styles/theme.css"

class App extends React.Component {
    state = {
        theme: 'light',
        toggleTheme: () => this.setState(({ theme }) => ({
            theme: theme === 'light' ? 'dark' : 'light'
        }))
    };
    render() {
        const { theme } = this.state;
        return (
            <ThemeProvider value={this.state}>
                <div className={`bg-${theme} box`}>
                    <Router>
                        <div className="container">
                            <Nav/>
                            <Stories/>
                        </div>
                    </Router>
                </div>
            </ThemeProvider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));