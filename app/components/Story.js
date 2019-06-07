import React from 'react';
import DateTime from './DateTime';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ThemeConsumer } from "../context/Theme";

const StoryLink = ({ to, children }) => {
    return (
        <ThemeConsumer>
            {
                ({ theme }) => <Link
                    to={to}
                    className={`story-link story-link-${theme}`}>
                        { children }
                </Link>
            }
        </ThemeConsumer>
    );
};
export default function Story({ title, by, time, url, kids}) {
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
                            <StoryLink to="/">{ by }</StoryLink>
                            on
                            { <DateTime timestamp={time}/> }
                            with
                            <StoryLink to="/">{ kids.length }</StoryLink>
                            comments
                        </span>
                    </div>
                </div>
            }
        </ThemeConsumer>
    );
};

Story.propTypes = {
    title: PropTypes.string.isRequired,
    by: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    kids: PropTypes.arrayOf(PropTypes.number).isRequired,
};