import React from 'react';

import './App.css';
import Posts from './components/Posts'
import Postsform from './components/Postsform'
function App() {
  return (
    <div className="App">
     
     <Postsform />
     <hr />
     <Posts />
   
    </div>
  );
}

export default App;
