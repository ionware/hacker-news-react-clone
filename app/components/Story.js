import React from 'react';
import DateTime from './DateTime';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Story({ title, by, time, url, kids}) {
    return (
        <div className="story">
            <h3 className="story-title story-title-light">
                <a href={url}>
                    { title }
                </a>
            </h3>
            <div className="d-inline">
                <span className="story-info">
                    by
                    <Link to={'/'}
                          className='story-link'>
                        { by }
                     </Link>
                    on
                    { <DateTime timestamp={time}/> }
                    with
                    <Link to={'/'}
                          className="story-link">
                        { kids.length }
                        </Link>
                    comments
                </span>
            </div>
        </div>
    );
};

Story.propTypes = {
    title: PropTypes.string.isRequired,
    by: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    kids: PropTypes.arrayOf(PropTypes.number).isRequired,
};