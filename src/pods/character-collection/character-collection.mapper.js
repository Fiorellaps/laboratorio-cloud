export const mapFromApiToVm = (character) => ({
    id: character.id.toString(),
    gender: character.gender,
    picture: character.image,
    name: character.name,
    status: character.status,
    species: character.species,
});
//# sourceMappingURL=character-collection.mapper.js.map