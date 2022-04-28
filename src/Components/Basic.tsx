import React from 'react';
import Todo from './models/todo';

const Basic:React.FC<{items:Todo[]}>=(props)=>{ // working with props
  return(
    <>
     <ul>{props.items.map((items)=>{
       return(
       <li key={items.id}>name:{items.names}</li>
      
       )
     })}</ul>
   
    </>
  )
}
export default Basic