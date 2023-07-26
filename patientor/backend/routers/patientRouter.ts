import express from 'express';
import patientService from '../services/patientService';
import { NewPatientEntry} from '../models/types';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(patientService.getPatientsWithoutSensitiveInfo());
});

router.post('/', (req, res) => {
    const newPatient = req.body as NewPatientEntry;
    const patient = patientService.addPatient(newPatient);
    res.json(patient);
});

export default router;