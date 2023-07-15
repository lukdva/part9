import patients from '../data/patients';
import { Patient, PatientNonSensitive } from "../models/types";

const getPatientsWithoutSensitiveInfo = (): PatientNonSensitive[] => {
  return patients.map(({id, name, dateOfBirth, occupation, gender}) => ({id, name, dateOfBirth, occupation, gender}));
};
const getPatients = (): Patient[] => {
    return patients;
  };

export default {
    getPatientsWithoutSensitiveInfo,
    getPatients
};