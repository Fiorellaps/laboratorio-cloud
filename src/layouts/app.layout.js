import * as React from 'react';
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import * as classes from './app.layout.styles';
export const AppLayout = (props) => {
    const { children } = props;
    const history = useHistory();
    return (React.createElement(React.Fragment, null,
        React.createElement(AppBar, { position: "static" },
            React.createElement(Toolbar, { variant: "dense" },
                React.createElement(IconButton, { color: "inherit", "aria-label": "Menu" },
                    React.createElement(AccountCircle, null)))),
        React.createElement("main", { className: classes.content }, children)));
};
//# sourceMappingURL=app.layout.js.map