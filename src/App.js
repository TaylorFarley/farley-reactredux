import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import Posts from './components/Posts'
import Postsform from './components/Postsform'
import store from './store'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
     
     <Postsform />
     <hr />
     <Posts />
   
    </div>
    </Provider>
  );
}

export default App;
