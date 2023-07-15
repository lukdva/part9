import express from 'express';
import cors from 'cors';
import diagnoseRouter from './routers/diagnoseRouter';
import patientRouter from './routers/patientRouter';

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3001;

app.use('/api/diagnoses', diagnoseRouter);
app.use('/api/patients', patientRouter);

app.get('/api/ping', (_req, res) => {
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});