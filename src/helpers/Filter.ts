import { PersonT } from '../types/StarWars';

export const filterPerson = (person: any) => {
    const allowed = ['name', 'height', 'mass', 'hair_color', 'skin_color', 'gender', 'birth_year'];

    const filtered: PersonT = Object.keys(person)
                            .filter(key => allowed.includes(key))
                            .reduce((obj: any, key: string) => {
                                obj[key] = person[key];
                                return obj;
                            }, {});
    
    return filtered;
};
