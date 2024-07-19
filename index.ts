import express from 'express';
import 'dotenv/config';

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`Hello ${process.env.ABC}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})