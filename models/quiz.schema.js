const mongoose = require('mongoose');


const questionSchema = new mongoose.Schema({
    questionText: { type: String, required: true },  
    answerChoices: [
        {
            optionText: { type: String, required: true }, // Options ("A", "B", "C", "D")
            isCorrect: { type: Boolean, required: true }, 
        }
    ],
    correctAnswer: { type: String, required: true }, // The correct option ( "A")
});

// Main schema for the quiz
const quizSchema = new mongoose.Schema({
    title: { type: String, required: true }, 
    description: { type: String, required: true }, 
    questions: [questionSchema], 
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
    createdAt: { type: Date, default: Date.now }, 
    updatedAt: { type: Date, default: Date.now }, 
});

quizSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

// Validation
quizSchema.methods.validateQuiz = function() {
    for (let question of this.questions) {
        let correctCount = 0;
        for (let option of question.answerChoices) {
            if (option.isCorrect) correctCount++;
        }
        if (correctCount !== 1) {
            throw new Error('Each question must have exactly one correct answer.');
        }
    }
};

module.exports = mongoose.model('Quiz', quizSchema);
