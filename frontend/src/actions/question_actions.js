import axios from 'axios'
import {createAction} from '@reduxjs/toolkit'

export const receiveQuestions = createAction('RECEIVE_QUESTIONS')
export const receiveQuestion = createAction('RECEIVE_QUESTION')

export const fetchQuestions = () => async dispatch => {
    try {
        const res = await axios.get(`URL`)
        dispatch(receiveQuestions(res.data)) 
    } catch (err) {
        console.log('o no! q are broken')
    }
}

export const submitQuestion = question => async dispatch => {
    try{
        const res = await axios.post('URL', question);
        dispatch(receiveQuestion(res.date))
    } catch(res){
        console.log('o no! q is broken')
    }
}