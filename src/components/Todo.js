import React from 'react';
import TodoItem from './TodoItem'
class Todo extends React.Component{



render(){
  return this.props.todos.map((todo) =>{
     return <TodoItem todo={todo} key={todo.id} delete={this.props.delete}/>
 })
}


}
export default Todo;