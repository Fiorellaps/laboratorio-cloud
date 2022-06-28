var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { CharactersMockData } from './mock-data';
//const urlCharacterCollection = 'https://rickandmortyapi.com/api/character';
const urlCharacterCollection = '/api/character';
export const getCharacterCollection = () => __awaiter(void 0, void 0, void 0, function* () {
    //const { data } = await Axios.get(urlCharacterCollection);
    //return data.results;
    return CharactersMockData;
});
//# sourceMappingURL=character-collection.api.js.map