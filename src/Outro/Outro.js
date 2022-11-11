import { Link } from 'react-router-dom'
import "./Outro.css"
import { Bar } from 'react-chartjs-2'
import {
         Chart as ChartJS,
         CategoryScale,
         LinearScale,
         BarElement,
         Title,
         Tooltip,
         Legend,
} from 'chart.js';


const Outro = (props) => {

         ChartJS.register(
                  CategoryScale,
                  LinearScale,
                  BarElement,
                  Title,
                  Tooltip,
                  Legend
         );

         let questions = []
         let ratings = []
         props.questionsAndAnswers.map(question => {
                  questions.push(question.question)
                  ratings.push(question.rating)
         })
         const labels = questions;
         console.log(props.questionsAndAnswers)
         let data = {
                  labels: labels,
                  datasets: [{
                           label: 'My First Dataset',
                           data: ratings
                  }]
         }
         return (
                  <>
                           <article className="outro"><Bar data={data}></Bar></article>
                  </>
         )
}

export default Outro