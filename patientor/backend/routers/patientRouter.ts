import express from 'express';
import patientService from '../services/patientService';
import toNewPatientEntry from '../utils/patientsUtils';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(patientService.getPatientsWithoutSensitiveInfo());
});

router.post('/', (req, res) => {
    try {
        const newPatient = toNewPatientEntry(req.body);
        const patient = patientService.addPatient(newPatient);
        res.json(patient);
    }
    catch (error: unknown) {
        let errorMessage = 'Something went wrong.';
        if (error instanceof Error) {
        errorMessage += ' Error: ' + error.message;
        }
        res.status(400).send(errorMessage);
    }
    
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    try {
        res.json(patientService.getPatient(id));
    }
    catch(error: unknown) {
        if(error instanceof Error) {
            res.status(404).send(error.message);
        }
        else {
            res.status(500).send("Something went wrong.");
        }
    }
});

export default router;