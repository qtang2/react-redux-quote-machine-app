import { FETCH_QUOTE_FAILURE, FETCH_QUOTE_SUCCESS } from "./quoteTypes"
import axios from 'axios'


export const fetchQuoteRequest = ()=>{
    return {
        type: FETCH_QUOTE_FAILURE
    }
}

export const fetchQuoteSuccess= (quote)=>{
    return {
        type: FETCH_QUOTE_SUCCESS,
        payload: quote
    }
}

export const fetchQuoteFailure= (error)=>{
    return {
        type: FETCH_QUOTE_SUCCESS,
        payload: error
    }
}

export const fetchQuote = ()=>{
    return (dispatch)=>{
        dispatch(fetchQuoteRequest())
        axios.get("https://jsonplaceholder.typicode.com/users").then(response=>{
            const quote = response.data
            dispatch(fetchQuoteSuccess(quote))
        }).catch(error =>{
            const errMsg = error.message
            dispatch(fetchQuoteFailure(errMsg))
        })
            
        
        
    }
}