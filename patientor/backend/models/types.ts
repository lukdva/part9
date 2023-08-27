export interface Diagnose {
    code: string,
    name: string,
    latin?: string
}

export interface BaseEntry {
    id: string;
    description: string;
    date: string;
    specialist: string;
    diagnosisCodes?: Array<Diagnose['code']>;
}

export enum HealthCheckRating {
    "Healthy" = 0,
    "LowRisk" = 1,
    "HighRisk" = 2,
    "CriticalRisk" = 3
}
export interface Discharge {
    date: string;
    criteria: string;
}
export interface SickLeave {
    startDate: string;
    endDate: string;
}
export interface HealthCheckEntry extends BaseEntry {
    type: DiagnosisType.HEALTH_CHECK;
    healthCheckRating: HealthCheckRating;
}
export interface HospitalEntry extends BaseEntry {
    type: DiagnosisType.HOSPITAL;
    discharge: Discharge;
}
export interface OccupationalHealthcareEntry extends BaseEntry {
    type: DiagnosisType.OCCUPATION;
    employerName: string;
    sickLeave?: SickLeave;
}
export enum DiagnosisType {
    HEALTH_CHECK = "HealthCheck",
    HOSPITAL = "Hospital",
    OCCUPATION = "OccupationalHealthcare"
}

export type Entry =   | HospitalEntry
| OccupationalHealthcareEntry
| HealthCheckEntry;


export interface Patient {
    id: string;
    name: string;
    ssn: string;
    occupation: string;
    gender: Gender;
    dateOfBirth: string;
    entries: Entry[]
}

export enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other'
}

export type PatientNonSensitive = Omit<Patient, 'ssn' | 'entries'>;

export type NewPatientEntry = Omit<Patient, 'id'>;