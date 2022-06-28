import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import * as classes from './characer-card.styles';
export const CharacterCard = (props) => {
    const { character, onView } = props;
    return (React.createElement(Card, null,
        React.createElement(CardHeader, { title: character.name }),
        React.createElement(CardContent, null,
            React.createElement("div", { className: classes.content },
                React.createElement(CardMedia, { image: character.picture, title: character.name, style: { height: 0, paddingTop: '56.25%' } }),
                React.createElement(Typography, { variant: "subtitle1", gutterBottom: true },
                    "Especie: ",
                    character.species),
                React.createElement(Typography, { variant: "subtitle1", gutterBottom: true },
                    "G\u00E9nero: ",
                    character.gender),
                React.createElement(Typography, { variant: "subtitle1", gutterBottom: true },
                    "Estado: ",
                    character.status)))));
};
//# sourceMappingURL=character-card.component.js.map