require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const membersRouter = require('./routes/members');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/members', membersRouter);

const mongoURI = process.env.MONGO_URI || 'mongodb://admin:password@localhost:27017/team_showcase?authSource=admin';

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

mongoose.set('bufferCommands', false);
mongoose
  .connect(mongoURI, { serverSelectionTimeoutMS: 1500 })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error. Falling back to mock memory.', err.message);
  });
