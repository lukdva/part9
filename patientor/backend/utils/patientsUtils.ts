import { NewPatientEntry, Gender} from "../models/types";

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
            entries:[]
        };
        return newEntry;
    }
    throw new Error('Incorrect data: some fields are missing');
};

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
  };
const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};
const isObject = (obj: unknown): obj is object => {
    return typeof obj === 'object';
};
const isGender = ( param: string): param is Gender => {
    return Object.values(Gender).map( v => v.toString()).includes(param);
};

const parseString = (str: unknown, fieldName: string): string => {
    if( !isString(str)) {
        throw new Error(`Incorrect ${fieldName}`);
    }
    return str;
};
const parseDate = (date: unknown): string => {
    if ( !isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date: ' + date);
    }
    return date;
};
const parseGender = (gender: unknown): Gender => {
    if(!isString(gender) || !isGender(gender)) {
        throw new Error(`Gender is incorrect: ${gender}`);
    }
    return gender;
};

export default toNewPatientEntry;