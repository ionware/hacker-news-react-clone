import React from 'react';
import Story from './Story';
import Loading from './Loading';
import queryString from 'query-string';
import { getItemById } from "../utils/api";
import { Redirect } from 'react-router-dom';

const Comments = React.lazy(() => import('./Comments'));

/*
* Will be shown if the story has no Comment Yet!
*
* */
const NoComment = () => {
    return (
        <div className="justify-center no-comment">
            <h4>No Comment Yet!</h4>
        </div>
    );
};

export default class Post extends React.Component {
    state = {
        loading: true,
        error: false,
        story: null,
    };
    componentDidMount() {
        const { location } = this.props;
        const id = queryString.parse(location.search).id;
        if (!id) {
            this.setState({ error: true, loading: false });
            return;
        }
        getItemById(id)
            .then((story) => this.setState({
                story,
                loading: false,
            }));

    }

    render() {
        const { loading, story, error } = this.state;
        if (loading) {
            return <Loading/>
        }
        if (error) return <Redirect to="/"/>;
        return (
            <React.Fragment>
                <Story
                    id={story.id}
                    title={story.title}
                    by={story.by}
                    time={story.time}
                    url={story.url}
                    kids={story.kids || []}
                />
                {
                    (story.kids && story.kids.length)
                        ? <React.Suspense fallback={<Loading/>}>
                            <Comments id={story.id}/>
                        </React.Suspense>
                        : <NoComment/>
                }
            </React.Fragment>
        );
    }
}