import diagnoses from "../data/diagnoses";
import { Diagnose } from "../models/types";

const getDiagnoses = (): Diagnose[] => {
  return diagnoses;
};

export default {
    getDiagnoses
};