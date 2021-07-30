const express = require('express');
const app = express();

app.use(express.json());

const questions = require('./routes/api/questions')
app.use('/api/questions', questions)

app.get('/STUFF', (req, res) => res.send("This Works"))

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server is up on port ${port}`) )