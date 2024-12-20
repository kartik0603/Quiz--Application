const Quiz = require('../models/quiz.schema.js');

// Create a New 
const createQuiz = async (req, res) => {
    const { title, description, questions } = req.body;

    if (!title || !description || !questions || questions.length === 0) {
        return res.status(400).json({ message: 'Quiz title, description, and questions are required.' });
    }

   
    try {
       
        const quiz = new Quiz({
            title,
            description,
            questions,
            createdBy: req.user._id,  
        });

        //  Only one Correct Answer per Question
        await quiz.validateQuiz();  

        
        await quiz.save();

        return res.status(201).json({ message: 'Quiz created successfully', quiz });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error creating quiz.', error: error.message });
    }
};

// Get all quizzes
const getQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find({}).populate('createdBy', 'username');
        return res.status(200).json({ quizzes });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error fetching quizzes.', error: error.message });
    }
};

// Get a quiz by ID
const getQuizById = async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id).populate('createdBy', 'username');
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found.' });
        }
        return res.status(200).json(quiz);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error fetching quiz.', error: error.message });
    }
};

// Submit Quiz Answers & Calculate score
const submitQuiz = async (req, res) => {
    const { quizId, answers, name } = req.body;

    if (!quizId || !answers || answers.length === 0 || !name) {
        return res.status(400).json({ message: 'Quiz ID, answers, and username are required.' });
    }

    try {
       
        const quiz = await Quiz.findById(quizId);
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found.' });
        }

        let score = 0;
        let correctAnswers = 0;
        let incorrectAnswers = 0;

        // Calculate  Score
        quiz.questions.forEach((question, index) => {
            const userAnswer = answers[index];
            const correctAnswer = question.correctAnswer;

            //   for Correct answer , add 1 Marks
            if (userAnswer === correctAnswer) {
                score++;
                correctAnswers++;
            } else {
                // answer is incorrect subtract 1 Marks
                score = Math.max(0, score - 1);  // Prevents Score going negative 
                incorrectAnswers++;
            }
        });

        return res.status(200).json({
            message: 'Quiz submitted successfully.',
            score,
            name,
            correctAnswers,
            incorrectAnswers,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error submitting quiz.', error: error.message });
    }
};

module.exports = { createQuiz, getQuizzes, getQuizById, submitQuiz };
