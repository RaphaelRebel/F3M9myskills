import './Question.css'
import React from 'react'


class Question extends React.Component {


         constructor(props) {
                  super(props)
                  this.state = { rating: 0 }
         }

         componentDidMount(){
                this.setState({rating: this.props.rating})
         }
         
         onStarHover = (event) => {
                  // Verander de class van een lege ster naar een volle ster:
                  // event.target.classList.add('fa-solid')
                  // event.target.classList.remove('.fa-regular')
         }

         onStarClicked = (rating) => {
                 this.setState({rating: rating})
         }
         render() {

                  let starsToBeRendered = [];

                  for(let i = 1; i <= this.state.rating; i++){
                         starsToBeRendered.push(<i onClick={() => this.onStarClicked(i)} onMouseEnter={this.onStarHover} class="fa-solid question__star fa-star"></i>)
                  }

                  for(let i = this.state.rating + 1; i <= 5; i++){
                           starsToBeRendered.push(<i onClick={() => this.onStarClicked(i)} onMouseEnter={this.onStarHover} class="fa-regular question__star fa-star"></i>)
                  }

                  return (
                           <article className="question">
                                    <header className="question__header">

                                             <h2 className="question__heading">#{this.props.number}{this.props.question}</h2>
                                    </header>
                                    <section className="question__section">
                                             <p className="question__text">(1 ster staat voor heel slecht, 5 sterren staat voor heel goed)</p>
                                             <div className="question__stars">
                                                     {starsToBeRendered}
                                             </div>
                                    </section>
                                    <footer className="question__footer">
                                             <button className="question__button">
                                                      Vorige
                                             </button>
                                             <button className="question__button">
                                                      Volgende
                                             </button>
                                    </footer>
                           </article>
                  )
         }
}

export default Question