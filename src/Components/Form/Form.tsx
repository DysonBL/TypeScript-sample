import React, { useRef } from "react";

const Form:React.FC<{onAddForm:(text:string)=>void> =(props)=>{
    const formTextInputref = useRef<HTMLInputElement>(null)

    const handleSubmit =(event:React.FormEvent)=>{
        event.preventDefault();
        const enteredText =formTextInputref.current!.value;

        props.onAddForm(enteredText);
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
           <div>
           <label htmlFor="text" placeholder="Enter Name">Name:</label>
            <input type='text'id="text"ref={formTextInputref}/>           
           </div>
           <div>
           <label htmlFor="text" placeholder="Enter Email" >Email:</label>
            <input type='text'id="text"/>
            </div> 
           <div>
           <label htmlFor="password" >Password:</label>
            <input type='text'id="text"/>
           </div>
           
            <button>Submit</button>
        </form>
        </>
    )
}
export  default Form