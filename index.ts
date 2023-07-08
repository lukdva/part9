import express from 'express';
import {calculateBmi} from './calculateBmi';
const app = express()

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!')
})

app.get('/bmi', (req, res) => {
    const height: number = parseInt(req.query.height as string) 
    const weight: number = parseInt(req.query.weight as string) 
    if(isNaN(height) || isNaN(weight)) {
        res.status(400).json({error: "malformatted parameters"})
    }
    const bmi = calculateBmi(height, weight)
    res.status(200).json({weight, height, bmi})
})

const PORT = 3003

app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`)
})