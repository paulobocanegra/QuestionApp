import React from 'react'
import Question from './Question';
import {connect} from 'react-redux'
import { fetchQuestions } from '../actions/question_actions';

// const questions = [{content: "qweqwe"},{content:"awrserwer"}];

class Questions extends React.Component{
    
    componentDidMount(){
        //
    }

    generateQuestionList(){
        return this.props.questions.map((question, i) => 
            <Question 
                key={`question-${i}`}
                question={question}
            />
        )
    }

    render(){
        return (
            <>
                {this.props.questions[0] ? this.generateQuestionList() : "No Questions :(" }
            </>
        )
    }
}

const msp = (state) => ({
    questions: state.questions ? Object.values(state.questions) : []
})

const mdp = dispatch => ({
    fetch: () => dispatch(fetchQuestions())
})

export default connect(msp, mdp)(Questions);