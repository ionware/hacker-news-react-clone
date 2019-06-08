import React from 'react';
import Story from './Story';
import Loading from "./Loading";
import PropTypes from 'prop-types';
import {getUserPosts} from "../utils/api";

export default class UserPost extends React.Component {
    state = {
        loading: true,
        stories: null,
    };

    componentDidMount() {
        const { posts } = this.props;
        getUserPosts(posts)
            .then((stories) => this.setState({
                stories,
                loading: false,
            }));
    }

    render() {
        const { loading, stories } = this.state;
        if (loading) return <Loading />;

        return (
            <div>
                { stories.map((story) => <Story
                    id={story.id}
                    key={story.id}
                    title={story.title}
                    kids={story.kids ? story.kids : []}
                    by={story.by}
                    time={story.time}
                    url={story.url}
                    />)
                }
            </div>
        );
    }
}