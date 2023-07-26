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
export default {
    getPatientsWithoutSensitiveInfo,
    getPatients,
    addPatient
};