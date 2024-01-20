import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import contactRouter from './routes/contact';

dotenv.config();

const app = express();
const port = 5000 || process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI || '';

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// ROUTES
app.use('/contact', contactRouter);

// CONNECT TO MONGODB VIA MONGOOSE
try {
  mongoose.connect(MONGODB_URI);
} catch (error) {
  console.log('error 🚨🚨🚨🚨🚨🚨', error);
}

app.listen(port, () => console.log(`Running on port ${port} ✅✅✅✅✅✅`));
