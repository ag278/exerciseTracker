import express from 'express';
import mongoose from 'mongoose';
import seedRouter from './routes/seedRoute.js';
import userRouter from './routes/userRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('connect to db'))
  .catch((err) => console.log(err.message));

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/seed', seedRouter);
app.use(userRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(port, () => {
  console.log(`server at  http://localhost:${port}`);
});
