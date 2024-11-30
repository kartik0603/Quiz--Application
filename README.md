"# Quiz--Application" 
# Quiz Application API

This project provides an API for creating, managing, and taking quizzes.

## Features

- **Create Quiz:** Allows the creation of quizzes with questions and answer choices.
- **Get All Quizzes:** Fetch all quizzes available.
- **Get Quiz by ID:** Retrieve a specific quiz using its ID.
- **Take Quiz:** Submit answers for a quiz and get a score.

## Technologies Used

- **Node.js:** JavaScript runtime for server-side development.
- **Express.js:** Framework for building web applications and APIs.
- **MongoDB:** NoSQL database for storing quiz data.
- **Mongoose:** ODM library for MongoDB and Node.js.



    ```bash
    npm start
    ```

2. Use a tool like Postman to interact with the API endpoints.

## API Endpoints

### Create a Quiz

- **URL:** `/api/quizzes/create`
- **Method:** `POST`
- **Body:**

    ```json
    {
        "title": "JavaScript Basics",
        "description": "A quiz to test your JavaScript fundamentals.",
        "questions": [
            {
                "questionText": "What is the output of console.log(typeof null)?",
                "answerChoices": [
                    { "optionText": "Object", "isCorrect": true },
                    { "optionText": "Null", "isCorrect": false },
                    { "optionText": "Undefined", "isCorrect": false },
                    { "optionText": "Error", "isCorrect": false }
                ],
                "correctAnswer": "Object"
            },
            {
                "questionText": "Which company developed JavaScript?",
                "answerChoices": [
                    { "optionText": "Microsoft", "isCorrect": false },
                    { "optionText": "Netscape", "isCorrect": true },
                    { "optionText": "Google", "isCorrect": false },
                    { "optionText": "Apple", "isCorrect": false }
                ],
                "correctAnswer": "Netscape"
            }
        ]
    }
    ```

- **Response:**

    ```json
    {
        "message": "Quiz created successfully",
        "quiz": {
            "title": "JavaScript Basics",
            "description": "A quiz to test your JavaScript fundamentals.",
            "questions": [
                {
                    "questionText": "What is the output of console.log(typeof null)?",
                    "answerChoices": [
                        { "optionText": "Object", "isCorrect": true, "_id": "674ab5c653bcf2178cbd2a4a" },
                        { "optionText": "Null", "isCorrect": false, "_id": "674ab5c653bcf2178cbd2a4b" },
                        { "optionText": "Undefined", "isCorrect": false, "_id": "674ab5c653bcf2178cbd2a4c" },
                        { "optionText": "Error", "isCorrect": false, "_id": "674ab5c653bcf2178cbd2a4d" }
                    ],
                    "correctAnswer": "Object",
                    "_id": "674ab5c653bcf2178cbd2a49"
                },
                {
                    "questionText": "Which company developed JavaScript?",
                    "answerChoices": [
                        { "optionText": "Microsoft", "isCorrect": false, "_id": "674ab5c653bcf2178cbd2a4f" },
                        { "optionText": "Netscape", "isCorrect": true, "_id": "674ab5c653bcf2178cbd2a50" },
                        { "optionText": "Google", "isCorrect": false, "_id": "674ab5c653bcf2178cbd2a51" },
                        { "optionText": "Apple", "isCorrect": false, "_id": "674ab5c653bcf2178cbd2a52" }
                    ],
                    "correctAnswer": "Netscape",
                    "_id": "674ab5c653bcf2178cbd2a4e"
                }
            ],
            "createdBy": "674ab40153bcf2178cbd2a3f",
            "_id": "674ab5c653bcf2178cbd2a48",
            "createdAt": "2024-11-30T06:50:46.765Z",
            "updatedAt": "2024-11-30T06:50:46.773Z",
            "__v": 0
        }
    }
    ```

### Get All Quizzes

- **URL:** `/api/quizzes/all-quizes`
- **Method:** `GET`
- **Response:**

    ```json
    {
        "quizzes": [
            {
                "_id": "674ab5c653bcf2178cbd2a48",
                "title": "JavaScript Basics",
                "description": "A quiz to test your JavaScript fundamentals.",
                "questions": [
                    {
                        "questionText": "What is the output of console.log(typeof null)?",
                        "answerChoices": [
                            { "optionText": "Object", "isCorrect": true, "_id": "674ab5c653bcf2178cbd2a4a" },
                            { "optionText": "Null", "isCorrect": false, "_id": "674ab5c653bcf2178cbd2a4b" },
                            { "optionText": "Undefined", "isCorrect": false, "_id": "674ab5c653bcf2178cbd2a4c" },
                            { "optionText": "Error", "isCorrect": false, "_id": "674ab5c653bcf2178cbd2a4d" }
                        ],
                        "correctAnswer": "Object",
                        "_id": "674ab5c653bcf2178cbd2a49"
                    },
                    {
                        "questionText": "Which company developed JavaScript?",
                        "answerChoices": [
                            { "optionText": "Microsoft", "isCorrect": false, "_id": "674ab5c653bcf2178cbd2a4f" },
                            { "optionText": "Netscape", "isCorrect": true, "_id": "674ab5c653bcf2178cbd2a50" },
                            { "optionText": "Google", "isCorrect": false, "_id": "674ab5c653bcf2178cbd2a51" },
                            { "optionText": "Apple", "isCorrect": false, "_id": "674ab5c653bcf2178cbd2a52" }
                        ],
                        "correctAnswer": "Netscape",
                        "_id": "674ab5c653bcf2178cbd2a4e"
                    }
                ],
                "createdBy": { "_id": "674ab40153bcf2178cbd2a3f" },
                "createdAt": "2024-11-30T06:50:46.765Z",
                "updatedAt": "2024-11-30T06:50:46.773Z",
                "__v": 0
            }
        ]
    }
    ```

### Get Quiz by ID

- **URL:** `/api/quizzes/quiz/:id`
- **Method:** `GET`
- **Response:**

    ```json
    {
        "_id": "674ab5c653bcf2178cbd2a48",
        "title": "JavaScript Basics",
        "description": "A quiz to test your JavaScript fundamentals.",
        "questions": [
            {
                "questionText": "What is the output of console.log(typeof null)?",
                "answerChoices": [
                    { "optionText": "Object", "isCorrect": true, "_id": "674ab5c653bcf2178cbd2a4a" },
                    { "optionText": "Null", "isCorrect": false, "_id": "674ab5c653bcf2178cbd2a4b" },
                    { "optionText": "Undefined", "isCorrect": false, "_id": "674ab5c653bcf2178cbd2a4c" },
                    { "optionText": "Error", "isCorrect": false, "_id": "674ab5c653bcf2178cbd2a4d" }
                ],
                "correctAnswer": "Object",
                "_id": "674ab5c653bcf2178cbd2a49"
            },
            {
                "questionText": "Which company developed JavaScript?",
                                "answerChoices": [
                    { "optionText": "Microsoft", "isCorrect": false, "_id": "674ab5c653bcf2178cbd2a4f" },
                    { "optionText": "Netscape", "isCorrect": true, "_id": "674ab5c653bcf2178cbd2a50" },
                    { "optionText": "Google", "isCorrect": false, "_id": "674ab5c653bcf2178cbd2a51" },
                    { "optionText": "Apple", "isCorrect": false, "_id": "674ab5c653bcf2178cbd2a52" }
                ],
                "correctAnswer": "Netscape",
                "_id": "674ab5c653bcf2178cbd2a4e"
            }
        ],
        "createdBy": {
            "_id": "674ab40153bcf2178cbd2a3f"
        },
        "createdAt": "2024-11-30T06:50:46.765Z",
        "updatedAt": "2024-11-30T06:50:46.773Z",
        "__v": 0
    }
    ```

### Take Quiz

- **URL:** `/api/quizzes/taking-quiz`
- **Method:** `POST`
- **Body:**

    ```json
    {
        "quizId": "674ab5c653bcf2178cbd2a48",
        "answers": ["Object", "Netscape"],
        "name": "Hitesh"
    }
    ```

- **Response:**

    ```json
    {
        "message": "Quiz submitted successfully.",
        "score": 2,
        "name": "Hitesh",
        "correctAnswers": 2,
        "incorrectAnswers": 0
    }
    ```
