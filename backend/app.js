import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import getDog from './routes/dog.js';

const app = express()
const port = 3000

app.use(cors());
app.use('/dog', getDog);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

