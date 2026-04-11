
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import shuffleArray from 'shuffle-array';
import './App.css'

const App = () => {
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [index, setIndex] = useState(0);
  const [result, setResult] = useState(false);
  const [marks, setMarks] = useState(0)


  const input = useRef([]);
  useEffect(() => {
    axios('https://the-trivia-api.com/v2/questions')
      .then(res => {
        console.log(res.data);
        setQuestion(res.data)

      }).catch((err) => {
        console.log(err);
        setError(true)

      }).finally(() => {
        setLoading(false)
      })
  }, [])


  // ---------------------------Next Questions-----------------------

  const nextQuestion = () => {
    const selectedOption = input.current.find(item => item && item.checked);

    if (!selectedOption) {
      alert("Please select an option!");
      return;
    }

    console.log(question[index].correctAnswer);

    if (question[index].correctAnswer === selectedOption.value) {
      setMarks(prev => prev + 10);
    }


    index < 9 ? setIndex(index + 1) : setResult(true)
  }
  return (
    <div className="container">
      <h1 className="title"> Quiz App</h1>

      {loading && <p className="status">Loading...</p>}
      {error && <p className="status error">Error occurred</p>}

      {result && (
        <div className="result-box">
          <h2>Your Score</h2>
          <p>{marks} / 100</p>
        </div>
      )}

      {question && !result && (
        <div className="card" key={question[index].id}>
          <h2 className="question">
            Q{index + 1}: {question[index].question.text}
          </h2>

          <div className="options">
            {shuffleArray([
              ...question[index].incorrectAnswers,
              question[index].correctAnswer
            ]).map((item, i) => (
              <label key={i} className="option">
                <input
                  type="radio"
                  name="question"
                  value={item}
                  ref={el => (input.current[i] = el)}
                />
                {item}
              </label>
            ))}
          </div>

          <button className="btn" onClick={nextQuestion}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default App

