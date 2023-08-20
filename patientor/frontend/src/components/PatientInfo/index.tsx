import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Patient } from "../../types";

import patientService from "../../services/patients";
import { useMatch } from "react-router-dom";
import GenderIcon from "./GenderIcon";

const PatientInfo = () => {
    const [patient, setPatient] = useState<Patient|undefined>();
    const match = useMatch("/patients/:id");

    useEffect(() => {
      const fetchPatientList = async () => {
        const pat = await patientService.getById(match && match.params.id? match.params.id:"");
        setPatient(pat);
      };
      void fetchPatientList();
    }, []);

    return patient ?
    (
        <div>
            <Box display="flex">
                <Typography variant="h5">
                    {patient.name}
                </Typography>
                <GenderIcon gender={patient.gender} />
            </Box>
            <Typography>ssn: {patient.ssn}</Typography>
            <Typography>occupation: {patient.occupation}</Typography>
        </div>
    )
    :
    (<Typography>Patient not available </Typography>)
}

export default PatientInfo