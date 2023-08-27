import { NewPatientEntry, Gender} from "../models/types";
import {isString, isObject, parseString, parseDate} from './commonUtils';

const toNewPatientEntry = (object: unknown): NewPatientEntry => {
    if(!object || !isObject(object)) {
        throw new Error('Incorrect or missing data');
    }
    if('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object) {
        const newEntry: NewPatientEntry = {
            name: parseString(object.name, 'name'),
            dateOfBirth: parseDate(object.dateOfBirth),
            ssn: parseString(object.ssn, 'ssn'),
            gender: parseGender(object.gender),
            occupation: parseString(object.occupation, 'occupation'),
            entries: []
        };
        return newEntry;
    }
    throw new Error('Incorrect data: some fields are missing');
};


const isGender = ( param: string): param is Gender => {
    return Object.values(Gender).map( v => v.toString()).includes(param);
};

const parseGender = (gender: unknown): Gender => {
    if(!isString(gender) || !isGender(gender)) {
        throw new Error(`Gender is incorrect: ${gender}`);
    }
    return gender;
};



export default toNewPatientEntry;