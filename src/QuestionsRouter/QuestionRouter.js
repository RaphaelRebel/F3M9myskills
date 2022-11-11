import React from 'react'
import { withRouter } from 'react-router-dom'
import questions from '../data/Questions'
import Question from '../Question/Question';

class QuestionRouter extends React.Component {
         constructor(props) {
                  super(props);

                  console.log(this.myNumber)
                  this.state = { questions: [] }
         }

         componentDidMount() {
                  this.setState({ questions: questions })

         }

         onRate = (rating, number) => {
                  let oldState = this.state.questions;
                  let newState = oldState.map(question => {
                           if (question.number === number) {
                                    question.rating = rating
                                    return question
                           }
                           return question;
                  });
                  this.setState({ questions: newState })
         }

         render() {
                  this.myNumber = this.props.match.params.number;
                  let questionsToBeRendered = this.state.questions.map(questionObject => {
                           if (this.myNumber == questionObject.number) {
                                    return <Question onLast={() => this.props.onLast(this.state.questions)} last={questionObject.last} onRate={this.onRate} previous={questionObject.previous} next={questionObject.next} number={questionObject.number} key={questionObject.number} question={questionObject.question} rating={questionObject.rating} />
                           }
                  })
                  console.log('help', questionsToBeRendered)
                  // 
                  return (<>{questionsToBeRendered}</>)
         }
}

export default withRouter(QuestionRouter)