import * as React from 'react';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';
export const useCharacterCollection = () => {
    const [characterCollection, setCharacterCollection] = React.useState([]);
    const loadCharacterCollection = () => {
        getCharacterCollection().then((result) => setCharacterCollection(mapToCollection(result, mapFromApiToVm)));
    };
    return { characterCollection, loadCharacterCollection };
};
//# sourceMappingURL=character-collection.hook.js.map