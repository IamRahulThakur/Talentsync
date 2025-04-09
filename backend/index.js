import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import jobRoutes from './routes/jobRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('TalentSync Job API is running');
});

app.use('/api/jobs', jobRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
