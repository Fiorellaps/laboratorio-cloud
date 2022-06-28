import React from 'react';
import { hot } from 'react-hot-loader/root';
import { ThemeProviderComponent } from 'core/theme';
import { RouterComponent } from 'core/router';
const App = () => {
    return React.createElement(RouterComponent, null);
};
const AppProviders = () => {
    return (React.createElement(ThemeProviderComponent, null,
        React.createElement(App, null)));
};
export default hot(AppProviders);
//# sourceMappingURL=app.js.map