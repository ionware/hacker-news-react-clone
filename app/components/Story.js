import React from 'react';
import DateTime from './DateTime';
import PropTypes from 'prop-types';
import StoryLink from './StoryLink';
import { ThemeConsumer } from "../context/Theme";

export default function Story({ id, title, by, time, url, kids}) {
    return (
        <ThemeConsumer>
            {
                ({ theme }) => <div className={`story story-${theme}`}>
                    <h4 className={`story-title story-title-${theme}`}>
                        <a href={url}>
                            { title }
                        </a>
                    </h4>
                    <div className="d-inline">
                        <span className="story-info">
                            by
                            <StoryLink to="/user" id={by}>{ by }</StoryLink>
                            on
                            { <DateTime timestamp={time}/> }
                            with
                            <StoryLink to="/post" id={id}>{ kids.length }</StoryLink>
                            comments
                        </span>
                    </div>
                </div>
            }
        </ThemeConsumer>
    );
};

Story.propTypes = {
    id: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    by: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    kids: PropTypes.arrayOf(PropTypes.number),
};

Story.defaultProps = {
    url: '#',
    kids: [],
};