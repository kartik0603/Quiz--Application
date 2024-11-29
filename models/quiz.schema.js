const mongoose = require('mongoose');

// Schema for each question
const questionSchema = new mongoose.Schema({
    questionText: { type: String, required: true }, // The actual question
    answerChoices: [
        {
            optionText: { type: String, required: true }, // Option text (e.g., "A", "B", etc.)
            isCorrect: { type: Boolean, required: true }, // Indicates if this option is correct
        }
    ],
    correctAnswer: { type: String, required: true }, // The correct option text (e.g., "A")
});

// Main schema for the quiz
const quizSchema = new mongoose.Schema({
    title: { type: String, required: true }, // Quiz title
    description: { type: String, required: true }, // Quiz description
    questions: [questionSchema], // Array of questions in the quiz
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the admin who created the quiz
    createdAt: { type: Date, default: Date.now }, // Date of quiz creation
    updatedAt: { type: Date, default: Date.now }, // Date of last update
});

quizSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

// Validate each question and ensure there is only one correct answer
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
