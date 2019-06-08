import React from 'react';
import Loading from "./Loading";
import DateTime from './DateTime';
import queryString from 'query-string';
import { getUser } from "../utils/api";
import { Redirect } from 'react-router-dom';
import { ThemeConsumer } from "../context/Theme";
import UserPost from "./UserPost";

const NoPost = () => {
    return (
        <div className="justify-center no-comment">
            <h4>User has No Post!</h4>
        </div>
    );
};

export default class User extends React.Component {
    state = {
        loading: true,
        user: null,
        error: false,
    };

    componentDidMount() {
        const { location } = this.props;
        const id = queryString.parse(location.search).id;
        if (!id) {
            this.setState({ error: true, loading: false });
            return;
        }
        getUser(id)
            .then((user) => this.setState({
                loading: false,
                user,
            }));
    }

    render() {
        const { loading, error, user } = this.state;
        if (loading) return <Loading />;
        if (error) return <Redirect />;

        return (
            <div className="user">
                <ThemeConsumer>
                    {
                        ({ theme }) => {
                            return (
                                <React.Fragment>
                                    <h1 className={`user-text user-text-${theme}`}>
                                        { user.id}
                                    </h1>
                                    <span className="story-info">
                                        joined
                                        <b>
                                            <DateTime timestamp={user.created}/>
                                        </b>
                                        has <b>
                                            { user.karma }
                                        </b> Karma
                                    </span>
                                    <h2 className={`user-text user-text-${theme}`}>Posts</h2>
                                </React.Fragment>
                            );
                        }
                    }
                </ThemeConsumer>
                { user.submitted && user.submitted.length
                    ? <UserPost posts={user.submitted}/>
                    : <NoPost />
                }
            </div>
        );
    }
}