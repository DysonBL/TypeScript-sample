class Todo {  //data model
    id:string;  
    names:string
constructor(todoName:string){
    this.names=todoName;
    this.id=new Date().toISOString();
}
}
export default Todo;