import { Patient, PatientNonSensitive, NewPatientEntry } from "../models/types";
import patientRepository from '../repositories/patientRepository';

const getPatientsWithoutSensitiveInfo = (): PatientNonSensitive[] => {
  return patientRepository.getAll().map(({id, name, dateOfBirth, occupation, gender}) => ({id, name, dateOfBirth, occupation, gender}));
};
const getPatients = (): Patient[] => {
    return patientRepository.getAll();
};
const addPatient = (newPatient: NewPatientEntry) => {
    return patientRepository.add(newPatient);
};
const getPatient = (id: string): Patient => {
    
    const patient = patientRepository.getById(id);
    if(!patient) {
        throw new Error(`Patient with id: ${id} not found`);
    }
    return patient;
};
export default {
    getPatientsWithoutSensitiveInfo,
    getPatients,
    addPatient,
    getPatient
};