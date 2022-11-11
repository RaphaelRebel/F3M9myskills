
import './App.css';
import {  Route, Switch } from 'react-router-dom';
import Intro from './Intro/Intro';
import questions from './data/Questions'
import QuestionRouter from './QuestionsRouter/QuestionRouter';
import Outro from './Outro/Outro'
const App = () => {

  // let questionsToBeRendered = questions.map(questionObject => {
  //     return <Question key={questionObject.number} number={questionObject.number} question={questionObject.question} rating={questionObject.rating} />;
  // })

  const onLast = (questionsAndAnswers) => {
    console.log('hallo vanuit app', questionsAndAnswers)
  }

  return (
    // <Routes>
    //   <Route path='/' element={<Intro />}></Route>
    //   <Route path='/vraag' element={<Question />}>
        
    //   </Route>
    // </Routes>
    <>
      <Switch>
        <Route path='/vragen/:number'>
          <QuestionRouter onLast={onLast}/>
        </Route>
        <Route path='/outro/' component={Outro}></Route>
        <Route path='/' component={Intro}></Route>
      </Switch>
    </>

  );
}

export default App;
