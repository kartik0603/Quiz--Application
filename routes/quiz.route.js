const express = require("express");
const quizouter = express.Router();
 const { createQuiz, getQuizzes, getQuizById, submitQuiz } = require("../controllers/quiz.controler.js");

 const protect= require("../middleware/auth.middleware.js");
 const roleCheck= require("../middleware/roleCheck.middleware.js");


 quizouter.use(protect);

// Route to create a new quiz (admin only)
quizouter.post("/create", roleCheck(["Admin"]), createQuiz);

// Route to get all quizzes
quizouter.get("/all-quizes", getQuizzes);

// Route to get a quiz by ID
quizouter.get("/quiz/:id", getQuizById);

// Route to submit quiz answers and calculate score
quizouter.post("/taking-quiz", submitQuiz);

module.exports = quizouter;