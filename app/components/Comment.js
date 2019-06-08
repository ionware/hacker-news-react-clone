import React from 'react';
import DateTime from './DateTime';
import PropTypes from 'prop-types';
import StoryLink from './StoryLink';
import { ThemeConsumer } from "../context/Theme";

export default function Comment({ by, text, time }) {
    return (
        <ThemeConsumer>
            {
                ({ theme }) => <div className={`comment comment-${theme}`}>
                        <span className="story-info">
                            by <StoryLink to="/user" id={by}>{ by }</StoryLink>
                            <DateTime timestamp={time}/>
                        </span>
                        <p className="comment-text" dangerouslySetInnerHTML={{ __html: text}}>
                        </p>
                </div>
            }
        </ThemeConsumer>
    );
}

Comment.propTypes = {
    by: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
};