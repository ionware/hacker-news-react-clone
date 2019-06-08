import React from 'react';
import Story from './Story';
import Loading from './Loading';
import { getTopStories, getNewStories } from '../utils/api';

export default function ComponentWithStories(toFetch = 'top') {
    return class Stories extends React.Component {
        state = {
            loading: true,
            stories: null
        };
        componentDidMount() {
            if (toFetch === 'top') {
                getTopStories()
                    .then(data => this.setState({
                        loading: false,
                        stories: data,
                    }));
                return;
            }
            getNewStories()
                .then((data) => this.setState({
                    loading: false,
                    stories: data
                }))
        }

        render() {
            const { loading, stories } = this.state;

            if (loading) return <Loading loading={loading}/>;
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
                    />)}
                </div>
            );
        }
    }
}
