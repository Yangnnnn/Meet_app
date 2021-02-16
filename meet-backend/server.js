import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import Cors from 'Cors';
//AwWixA61hbmfO9uw
//App Config
const app = express();
const port = process.env.PORT || 7000;

const connection_url =
  'mongodb+srv://yangchulong:**@cluster0.oqew6.mongodb.net/meet?retryWrites=true&w=majority';

//Middlewares
app.use(express.json());
app.use(Cors());
//DB config
// mongoose.connect(connection_url, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// });

//API Endpoints
app.get('/', (req, res) => {
  return res.status(200).send('Hello World');
});
// app.post('/meet/cards', (req, res) => {
//   const dbCard = req.body;
//   Cards.create(dbCard, (err, data) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(201).send('done');
//     }
//   });
// });

// app.get('/meet/cards', (req, res) => {
//   Cards.find((err, data) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(data);
//     }
//   });
// });
//Listener

app.listen(port, () => {
  console.log(`the server is running ${port}`);
});
