import React from 'react';
import { ThemeConsumer } from "../context/Theme";

export default function Error () {
    return (
        <ThemeConsumer>
            {
                ({ theme }) => {
                    return (
                        <div className={`user-text user-text-${theme}`}>
                            <h1>Resource not found</h1>
                        </div>
                    );
                }
            }
        </ThemeConsumer>
    );
}