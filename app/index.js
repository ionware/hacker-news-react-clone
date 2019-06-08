import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import Post from './components/Post';
import { ThemeProvider } from "./context/Theme";
import ComponentWithStories from './components/ComponentWithStories';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./styles/base.css";
import "./styles/theme.css"

const TopStories = ComponentWithStories();
const NewStories = ComponentWithStories('new');

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
                            <Switch>
                                <Route path="/" exact component={TopStories} />
                                <Route path="/new" exact component={NewStories} />
                                <Route path="/post" exact component={Post} />
                            </Switch>
                        </div>
                    </Router>
                </div>
            </ThemeProvider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));