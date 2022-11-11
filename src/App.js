
import './App.css';
import {  Route, Switch } from 'react-router-dom';
import Intro from './Intro/Intro';
import questions from './data/Questions'
import QuestionRouter from './QuestionsRouter/QuestionRouter';
import Outro from './Outro/Outro'
import React from 'react'

class App extends React.Component{

  // let questionsToBeRendered = questions.map(questionObject => {
  //     return <Question key={questionObject.number} number={questionObject.number} question={questionObject.question} rating={questionObject.rating} />;
  // })

  constructor(props){
    super(props)
    this.state={questionsAndAnswers: []};
  }

   onLast = (questionsAndAnswers) => {
    console.log('hallo vanuit app', questionsAndAnswers)
    this.setState({questionsAndAnswers: questionsAndAnswers})
  }


  render(){
  return (
    // <Routes>
    //   <Route path='/' element={<Intro />}></Route>
    //   <Route path='/vraag' element={<Question />}>
        
    //   </Route>
    // </Routes>
    <>
      <Switch>
        <Route path='/vragen/:number'>
          <QuestionRouter onLast={this.onLast}/>
        </Route>
        <Route path='/outro/' >
          <Outro questionsAndAnswers={this.state.questionsAndAnswers} />
        </Route>
        <Route path='/' component={Intro}></Route>
      </Switch>
    </>

  );
}}

export default App;
