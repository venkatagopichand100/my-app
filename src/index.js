import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"

const el = document.getElementById("root");
ReactDOM.createRoot(el).render(<App />)


//1) import the React and ReactDOM libraries
//2) Get the reference to the div with ID root
//3) Tell React to take control of that element
//4) Create the component
//5) Show the component on the screen

//React: Library that defines what a component is and how muliple components work together
//ReactDOM: Library that knows how to get a component to show up in the browser

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const el = document.getElementById('root');

// const root = ReactDOM.createRoot(el);

// function App(){
// return <input className = '' style= {{border: '5px solid green'}} type = "number" min = {5} max = {10} />

// return <textarea autoFocus /> 
  

// }

// root.render(<App />);


//5 rules needs remember while using JSX
//Converting our HTML to JSX

//1) All the prop(propeties) names follow camelCase
//2) Number attributes use curly brances
//3) Boolean 'true' can be written with just the propety name. "False" should be written with curly braces
//<textarea autoFocus = {false} /> 
//return <textarea autoFocus /> 

//4) The 'class' attribute is written in 'className'
//5) in-line styles are provided as object {}



