import { CharacterEntityApi } from './character-collection.api-model';
import Axios from 'axios';
import { CharactersMockData } from './mock-data';
//const urlCharacterCollection = 'https://rickandmortyapi.com/api/character';
const urlCharacterCollection = '/api/character';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  //const { data } = await Axios.get(urlCharacterCollection);
  //return data.results;
  return CharactersMockData;
};
