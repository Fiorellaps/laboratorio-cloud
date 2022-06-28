import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { CharacterCollectionScene, characterScene } from 'scenes';
export const RouterComponent = () => {
    return (React.createElement(HashRouter, null,
        React.createElement(Switch, null,
            React.createElement(Route, { exact: true, path: [switchRoutes.root, switchRoutes.characterCollection], component: CharacterCollectionScene }),
            React.createElement(Route, { exact: true, path: switchRoutes.viewCharacter, component: characterScene }))));
};
//# sourceMappingURL=router.component.js.map