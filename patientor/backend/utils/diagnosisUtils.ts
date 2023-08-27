import { DiagnosisType, Entry, Discharge, HealthCheckRating, SickLeave} from "../models/types";
import {isString, isNumber, isObject, parseString, parseDate, assertNever, parseStringArray} from './commonUtils';

const toNewDiagnosisEntry = (object: unknown): Entry => {
    if(!object || !isObject(object)) {
        throw new Error('Incorrect or missing data');
    }

    if('type' in object && 'description' in object && 'date' in object && 'specialist' in object) {
        const baseEntry = {
            id: parseString(object.description, 'id'),
            description: parseString(object.description, 'description'),
            date: parseDate(object.date),
            specialist: parseString(object.specialist, 'specialist')
        };
        const type = parseDiagnosis(object.type);
        let diagnosis: Entry | undefined;
        switch (type) {
            case DiagnosisType.HEALTH_CHECK:
                if('healthCheckRating' in object) {
                    diagnosis= {
                        ...baseEntry,
                        type,
                        healthCheckRating: parseHealthCheckRating(object.healthCheckRating),
                    };
                } else {
                    throw new Error('Incorrect data: healthCheckRating is missing for HealthCheck entry');
                }
                break;
            case DiagnosisType.HOSPITAL:
                if('discharge' in object) {
                    diagnosis = {
                        ...baseEntry,
                        type,
                        discharge: toDischarge(object.discharge)
                    };
                } else {
                    throw new Error('Incorrect data: discharge is missing for Hospital entry');
                }
                break;
            case DiagnosisType.OCCUPATION:
                if('employerName' in object) {
                    diagnosis = {
                        ...baseEntry,
                        type,
                        employerName: parseString(object.employerName, 'employerName')
                    };
                }
                else {
                    throw new Error('Incorrect data: employerName is missing for OccupationalHealthcare entry');
                }
                if('sickLeave' in object) {
                    diagnosis.sickLeave = toSickLeave(object.sickLeave);
                }
                break;
            default:
                return assertNever(type);
        }
        if('diagnosisCodes' in object) {
            diagnosis.diagnosisCodes = parseStringArray(object.diagnosisCodes);
        }
        return diagnosis;
    }
    throw new Error('Incorrect data: some fields are missing');
};


const isDiagnosisType = (type: string): type is DiagnosisType => {
    return Object.values(DiagnosisType).map(v => v.toString()).includes(type);
};
const isHealthCheckRating = (rating: number): rating is HealthCheckRating => {
    return Object.values(HealthCheckRating).includes(rating);
};
const parseDiagnosis = (diagnosis: unknown): DiagnosisType => {
    if(!isString(diagnosis) || !isDiagnosisType(diagnosis)) {
        throw new Error(`Incorrect or missing diagnosis type: ${diagnosis}`);
    }
    return diagnosis;
};
const parseHealthCheckRating = (rating : unknown): number => {
    if (!isNumber(rating) || !isHealthCheckRating(rating)) {
        throw new Error(`Incorrect healthCheckRating: ${rating}`);
    }
    return rating;
};
const toDischarge = (object: unknown): Discharge => {
    if(!object || !isObject(object)) {
        throw new Error('Incorrect or missing data for Discharge');
    }
    if('date' in object && 'criteria' in object) {
        const discharge: Discharge = {
            date: parseDate(object.date),
            criteria: parseString(object.criteria, 'Discharge.criteria')
        };
        return discharge;
    }
    throw new Error('Parameters missing for Discharge');
};
const toSickLeave = (object: unknown): SickLeave => {
    if(!object || !isObject(object)) {
        throw new Error('Incorrect or missing data for SickLeave');
    }
    if('startDate' in object && 'endDate' in object) {
        const sickLeave: SickLeave = {
            startDate: parseDate(object.startDate),
            endDate: parseDate(object.endDate)
        };
        return sickLeave;
    }
    throw new Error('Parameters missing for SickLeave');
};

export default toNewDiagnosisEntry;