import { generatePath } from 'react-router';
export const switchRoutes = {
    root: '/',
    characterCollection: '/characters',
    viewCharacter: '/characters/:id',
};
export const linkRoutes = Object.assign(Object.assign({}, switchRoutes), { viewCharacter: (id) => generatePath(switchRoutes.viewCharacter, { id }) });
//# sourceMappingURL=routes.js.map