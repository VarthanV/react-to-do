import React from 'react';
import './App'
class TodoItem extends React.Component{
 getstyle=() =>{
     if(this.props.todo.completed){
         return "green";
     }
     else{
        return "grey";
     }

    }
    complete=() =>{
        console.log('hi');
     this.setState(() =>  this.props.todo.completed = !this.props.todo.completed)
        
    }
 

render(){
    return(
        <div className="container" style={{textAlign:"left",backgroundColor:this.getstyle(),textDecoration:this.props.todo.completed ? 'line-through' :
        'none'   }}> 
        <h2> <input type="checkbox" onChange= {this.complete.bind(this)}/> {this.props.todo.title}      <button onClick={this.props.delete.bind(this,this.props.todo.id)} style={{color:"red"}}> X</button> </h2>
        


        </div>
    );
}
}
export default TodoItem;