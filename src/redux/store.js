import  { createStore, applyMiddleware } from "redux"
import  { quoteReducer } from "./quoteReducer"
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension"


const store = createStore(quoteReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store