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
//code to compute values we want to show in the JSX
 const name = "Venkat";
 const age = 100;

 //content we want to show in th component
 return(
  <h1>
    hi myself {name} and my age is {age}
  </h1>
 )
  

}

root.render(<App />);



