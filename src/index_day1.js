//1) import the React and ReactDOM libraries
//2) Get the reference to the div with ID root
//3) Tell React to take control of that element
//4) Create the component
//5) Show the component on the screen

//React: Library that defines what a component is and how muliple components work together
//ReactDOM: Library that knows how to get a component to show up in the browser

import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

function App(){
  // return <h1>hi there guys you there</h1>;  //jsx //html code
//javascript code
  let message = "today is react course";
  if(Math.random() > 0.5){
    message = "starting react code"
  }
  return <h1>{message}</h1> 
  //curly braces means we are about to refernce a JS variable
  //we mostly use curly braces to show strings and numbers
  
  const something1 = "venkat is here"; //this will work
  const something2 = 10; //this will work
  const something3 = true;
  const something4 = false;
  const something5 = {};
  const something6 = [1, 2, 3];
  return <h1>{something4}</h1> 
  
  //shorthand JS expressions
  const date = new Date();
  const time = date.toLocaleTimeString();
  return <h1>{time}</h1>

  return <h1>{new Date().toLocaleTimeString()}</h1>

}

root.render(<App />);



