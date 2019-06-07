import React from 'react';

const ThemeContext = React.createContext('light');

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;