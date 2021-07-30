const express = require('express')
const router = express.Router();


const Question = require('../../models/question')

router.get('/', (req, res) => {
    Question.find()
        .then(questions => res.json(questions))
        .catch(err => res.status(403).json(err))
})

router.post('/', (req, res) => {
    const newQuestion = new Question({
        name: req.body.name,
        content: req.body.content
    })
})

module.exports = router