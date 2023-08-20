import patients from '../data/patients';
import { Patient, NewPatientEntry } from "../models/types";
import { v1 as uuid } from 'uuid';

const getAll = (): Patient[] => {
    return patients;
};

const add = (newPatient: NewPatientEntry): Patient => {
    const id: string = uuid();
    const patient = {
        ...newPatient,
        id
    };
    patients.push(patient);
    return patient;
};

const getById = (id: string): Patient | undefined => {
    return patients.find(patient => patient.id === id);
};
export default { getAll, add, getById};