import { useState } from 'react'
import shuffle from '../utils/shuffle'

export const QuestionData = [
  {
    level: 1,
    question: 'Hello, ________ Helen Watson.',
    correct_answer: "I'm",
    incorrect_answers: ['this', 'I', 'am'],
  },
  {
    level: 1,
    question: 'What’s this?	 - ________ a modem.',
    correct_answer: "It's",
    incorrect_answers: ['That', 'Is', 'It'],
  },
  {
    level: 1,
    question: 'Bangkok is ________ capital of Thailand.',
    correct_answer: 'the',
    incorrect_answers: ['it', 'a', 'an'],
  },
  {
    level: 2,
    question: 'Is Mr Stein German?   -   No, ________ Austrian.',
    correct_answer: "he's",
    incorrect_answers: ['he', 'she', "she's"],
  },
  {
    level: 2,
    question: 'Is this your pen?   -   No, it ________ .  ',
    correct_answer: "isn't",
    incorrect_answers: ["don't", "doesn't", 'not'],
  },
  {
    level: 2,
    question: '________ color is your bag?   -   It’s blue.',
    correct_answer: 'What',
    incorrect_answers: ['Who', 'Where', 'How'],
  },
  {
    level: 3,
    question: 'Where ________ you from?   -   Singapore.',
    correct_answer: 'are',
    incorrect_answers: ['do', 'is', 'come'],
  },
  {
    level: 3,
    question: 'Is this your office?   -   No, I ________ work here.',
    correct_answer: "don't",
    incorrect_answers: ['am not', 'not', "aren't"],
  },
  {
    level: 3,
    question: 'How ________ you spell your name, please?   -   R-I-C-H-A-R-D.',
    correct_answer: 'do',
    incorrect_answers: ['are', 'write', 'does'],
  },
  {
    level: 4,
    question: 'Sandra ________ for a computer company.',
    correct_answer: 'works',
    incorrect_answers: ['working', 'work', 'worker'],
  },
]

const TestPage = () => {
  const [level1Score, setLevel1Score] = useState(0)
  const [level2Score, setLevel2Score] = useState(0)
  const [level3Score, setLevel3Score] = useState(0)
  const [level4Score, setLevel4Score] = useState(0)
  const [level5Score, setLevel5Score] = useState(0)
  const [level6Score, setLevel6Score] = useState(0)
  const [level7Score, setLevel7Score] = useState(0)

  const [questionIndex, setQuestionIndex] = useState(0)

  const { level, correct_answer, incorrect_answers, question } =
    QuestionData[questionIndex]

  const allAnswers = [correct_answer, ...incorrect_answers]

  const shuffledAnswers = shuffle(allAnswers)

  const onAnswerClick = (event) => {
    const userAnswer = event.target.innerHTML
    const correct = userAnswer === correct_answer

    if ((level === 1) & correct) setLevel1Score(level1Score + 1)
    if ((level === 2) & correct) setLevel2Score(level2Score + 1)
    if ((level === 3) & correct) setLevel3Score(level3Score + 1)
    if ((level === 4) & correct) setLevel4Score(level4Score + 1)
    if ((level === 5) & correct) setLevel5Score(level4Score + 1)
    if ((level === 6) & correct) setLevel6Score(level4Score + 1)
    if ((level === 7) & correct) setLevel7Score(level4Score + 1)

    setQuestionIndex(questionIndex + 1)
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center text-center p-10'>
        <h1>Level 1 score: {level1Score}</h1>
        <h1>Level 2 score: {level2Score}</h1>
        <h1>Level 3 score: {level3Score}</h1>
        <h1>Level 4 score: {level4Score}</h1>
        <h1>Level 5 score: {level5Score}</h1>
        <h1>Level 6 score: {level6Score}</h1>
        <h1>Level 7 score: {level7Score}</h1>
        <h1 className='text-xl mt-5 text-blue-500'>Level: {level}</h1>

        <h2 className='text-2xl my-10 w-3/4 md:w-1/2 lg:w-1/3 text-center'>
          {question}
        </h2>

        {shuffledAnswers.map((answer) => {
          return (
            <button
              key={answer}
              onClick={onAnswerClick}
              className='mb-4 w-3/4 md:w-1/2 lg:w-1/3 text-lg cursor-pointer hover:bg-slate-300  text-white bg-[#56a5eb] p-3 rounded-md'
            >
              {answer}
            </button>
          )
        })}
      </div>
    </>
  )
}

export default TestPage
