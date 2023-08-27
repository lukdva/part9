export const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
  };
  export const isNumber = (num: unknown): num is number => {
    return typeof num === 'number';
};
export const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};
export const isObject = (obj: unknown): obj is object => {
    return typeof obj === 'object';
};

export const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };
export const parseString = (str: unknown, fieldName: string): string => {
    if( !isString(str)) {
        throw new Error(`Incorrect ${fieldName}`);
    }
    return str;
};
export const parseDate = (date: unknown): string => {
    if ( !isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date: ' + date);
    }
    return date;
};
export const parseNumber = (num: unknown): number => {
    if (!isNumber(num)) {
        throw new Error(`Incorrect number: ${num}`);
    }
    return num;
};
export const isStringArray = (arr: unknown): arr is string[] => {
    return Array.isArray(arr) && arr.every(item => isString(item));
};
export const parseStringArray = (arr: unknown): string[] => {
    if (!isStringArray(arr)) {
        throw new Error(`Incorrect string array: ${arr}`);
    }
    return arr;
};