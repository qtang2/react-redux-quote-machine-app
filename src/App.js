import React from 'react';
import './App.css';
import QuoteContainer from './components/QuoteContainer';
import store from "./redux/store"
import {Provider} from "react-redux"

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <QuoteContainer />
    </div>
    </Provider>
  );
}

export default App;
