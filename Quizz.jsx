import { useState } from "react";

const questions = [
  {
    question: "What is React?",
    options: [
      "A database",
      "A JavaScript library",
      "A programming language",
      "A web server"
    ],
    answer: "A JavaScript library",
  },
  {
    question: "Which hook is used for state?",
    options: ["useRef", "useEffect", "useState", "useMemo"],
    answer: "useState",
  },
  {
    question: "Who developed React?",
    options: ["Google", "Microsoft", "Facebook", "Amazon"],
    answer: "Facebook",
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedOption("");

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div style={{ width: "400px", margin: "auto", padding: "20px" }}>
      <h2>Online Quiz</h2>

      {showResult ? (
        <h3>Your Score: {score} / {questions.length}</h3>
      ) : (
        <>
          <h4>{questions[currentQuestion].question}</h4>

          {questions[currentQuestion].options.map((option, index) => (
            <div key={index}>
              <label>
                <input
                  type="radio"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => setSelectedOption(option)}
                />
                {option}
              </label>
            </div>
          ))}

          <button
            onClick={handleNext}
            disabled={!selectedOption}
            style={{ marginTop: "10px" }}
          >
            Next
          </button>
        </>
      )}
    </div>
  );
}