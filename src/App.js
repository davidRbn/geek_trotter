import React from 'react';
import Router from './Router'
import { WebCamController} from './context/WebCamContext'
import './App.css'



function App() {
  return(
    <div  className="App">
      <WebCamController>
      <Router />
      </WebCamController>
    </div>
  );
}

export default App;
