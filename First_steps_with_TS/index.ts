import express from 'express';
import {calculateBmi} from './calculateBmi';
import {exercisesRequestBody} from './exercisesTypes';
import calculateExercises from './calculateExercises';

const app = express();

app.use(express.json());

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
    const height: number = parseInt(req.query.height as string);
    const weight: number = parseInt(req.query.weight as string);
    if(isNaN(height) || isNaN(weight)) {
        res.status(400).json({error: "malformatted parameters"});
    }
    const bmi = calculateBmi(height, weight);
    res.status(200).json({weight, height, bmi});
});

app.post('/exercises', (req, res) => {
    const data = req.body as exercisesRequestBody;
    console.log(data);
    const re = calculateExercises(data.daily_exercises, data.target);
    res.json(re);
});

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`);
});