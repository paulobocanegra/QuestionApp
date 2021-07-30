import React from 'react'

const Question = ({key, question}) => {
    return(
        <div key={key}>{question.content}</div>
    )
}

export default Question