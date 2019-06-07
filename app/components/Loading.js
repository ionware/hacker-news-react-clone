import React from 'react';
import PropTypes from 'prop-types';
import RingLoader from 'react-spinners/RingLoader';

export default class Loading extends React.Component {
    state = {
        loading: false,
    };
    componentDidMount() {
        this.setState({ loading: this.props.loading });
    }
    render() {
        const { loading } = this.state;

        if (!loading) return null;
        return (
            <div className="loader">
                <RingLoader loading={loading} color="#e74c3c" size={3.2} sizeUnit="em"/>
            </div>
        );
    }
}

Loading.propTypes = {
    loading: PropTypes.bool,
};
Loading.defaultProps = {
    loading: true,
};