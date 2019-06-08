import React from 'react';
import "./styles/base.css";
import "./styles/theme.css";
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import Loading from "./components/Loading";
import { ThemeProvider } from "./context/Theme";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const TopStory = React.lazy(() => import('./components/TopStory'));
const NewStory = React.lazy(() => import('./components/NewStory'));
const Post = React.lazy(() => import('./components/Post'));
const User = React.lazy(() => import('./components/User'));

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
                            <React.Suspense fallback={<Loading />}>
                                <Switch>
                                    <Route path="/" exact component={TopStory} />
                                    <Route path="/new" exact component={NewStory} />
                                    <Route path="/post" exact component={Post} />
                                    <Route path="/user" exact component={User} />
                                </Switch>
                            </React.Suspense>
                        </div>
                    </Router>
                </div>
            </ThemeProvider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));