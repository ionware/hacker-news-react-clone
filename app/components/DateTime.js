import React from 'react';
import PropTypes from 'prop-types';

export default function DateTime ({ timestamp }) {
    const date = new Date(timestamp * 1000);
    const dateTimeString = date.toLocaleString(undefined, {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });

    return (
        <span className="story-time">{`${dateTimeString}`}</span>
    );
}

DateTime.propTypes = {
    timestamp: PropTypes.number.isRequired,
};