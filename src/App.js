import React from 'react';
import InputForm from './components/InputForm.jsx';


function App() {
  var tasks = ['physics pset', 'discrete pset', 'data structures pset'];
  return (
    <div className="App">
      <InputForm tasks = {tasks} />
    </div>
  );
}

export default App;
