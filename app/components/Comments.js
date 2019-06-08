import React from 'react';
import Loading from './Loading';
import Comment from './Comment';
import PropTypes from 'prop-types';
import { getComments } from "../utils/api";

export default class Comments extends React.Component {
    state = {
      loading: true,
      comments: null,
    };

    componentDidMount() {
        const { id } = this.props;
        getComments(id)
            .then((comments) => this.setState({
                loading: false,
                comments,
            }));
    }

    render() {
        const { loading, comments } = this.state;
        if (loading) return <Loading/>;

        if ( !comments.length) {
            return <h1>No Comment Yet!</h1>
        }

        return (
            <div className="comments">
                {
                    comments.map(({ by, id, time, text }) => <Comment
                        by={by}
                        time={time}
                        text={text}
                        key={id}
                    />)
                }
            </div>
        );
    }
}

Comments.propTypes = {
    id: PropTypes.number.isRequired,
};