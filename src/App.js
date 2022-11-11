
import './App.css';
import {  Route, Router, Routes } from 'react-router-dom';
import Question from './Question/Question';
import Intro from './Intro/Intro';
import questions from './data/Questions'

const App = () => {

  let questionsToBeRendered = questions.map(questionObject => {
      return <Question key={questionObject.number} number={questionObject.number} question={questionObject.question} rating={questionObject.rating} />;
  })

  return (
    // <Routes>
    //   <Route path='/' element={<Intro />}></Route>
    //   <Route path='/vraag' element={<Question />}>
        
    //   </Route>
    // </Routes>
    <>
      <Routes>
        <Route path='/' element={<Intro />}></Route>
        <Route path='/vraag/:number' element={<Question />}></Route>
      </Routes>
    </>

  );
}

export default App;
