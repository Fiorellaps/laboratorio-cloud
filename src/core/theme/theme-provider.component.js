import * as React from 'react';
import StylesProvider from '@material-ui/styles/StylesProvider';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from './theme';
export const ThemeProviderComponent = (props) => {
    const { children } = props;
    return (React.createElement(StylesProvider, { injectFirst: true },
        React.createElement(ThemeProvider, { theme: theme },
            React.createElement(CssBaseline, null),
            children)));
};
//# sourceMappingURL=theme-provider.component.js.map