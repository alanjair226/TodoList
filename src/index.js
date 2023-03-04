import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App.js';


const root = ReactDOM.createRoot(document.getElementById('root'));


function Tittle(){
  return(
    <h1 id='tittle'>
      Holi react
    </h1>
  );
}
document.getElementById('root');
root.render(
    <App />
);
