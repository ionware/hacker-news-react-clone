import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ThemeConsumer } from "../context/Theme";

export default function StoryLink ({ to, id, children }) {
    return (
        <ThemeConsumer>
            {
                ({ theme }) => <Link
                    to={{
                        pathname: to,
                        search: `?id=${id}`
                    }}
                    className={`story-link story-link-${theme}`}>
                    { children }
                </Link>
            }
        </ThemeConsumer>
    );
};

StoryLink.propTypes = {
    to: PropTypes.string.isRequired,
    id: PropTypes.any,
    children: PropTypes.any,
};