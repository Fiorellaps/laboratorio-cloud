import * as React from 'react';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
export const CharacterCollectionComponent = (props) => {
    const { characterCollection, onView } = props;
    return (React.createElement("div", { className: classes.root },
        React.createElement("ul", { className: classes.list }, characterCollection.map((character) => (React.createElement("li", { key: character.id },
            React.createElement(CharacterCard, { character: character, onView: onView })))))));
};
//# sourceMappingURL=character-collection.component.js.map