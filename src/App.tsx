import React from "react";
import "./App.css";
import Basic from "./Components/Basic";
import Todo from "./Components/models/todo";
import Form from "./Components/Form/Form";

const App=()=>{
  const todos=[
    new Todo('Henry'),
    new Todo('Dyson')
  ]
  
  return (
    <div >
      <h1>Learn in Typesript</h1>
      <Basic items={todos}/>   
      <Form/>   
     
    </div>
  );
}
export default App