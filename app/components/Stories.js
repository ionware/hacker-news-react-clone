import React from 'react';
import Loading from './Loading';
import { getTopStories } from '../utils/api';

export default class Stories extends React.Component {
    state = {
        loading: true,
        stories: null
    };
    componentDidMount() {
        getTopStories()
            .then(data => this.setState({
                loading: false,
                stories: data,
            }));
    }

    render() {
        const { loading, stories } = this.state;
        return (
            <div>
                { loading === true ? <Loading loading={loading}/> : ''}
            </div>
        );
    }
}