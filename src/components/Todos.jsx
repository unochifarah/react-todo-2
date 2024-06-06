import React from 'react';
import TodoItem from './TodoItem'

const Todos = ({ todos, toggleCompleted, deleteTodo }) => {
  return(
    <div style={styles.container}>
      {todos.length === 0 ? (
        <p>You're free from todo list!</p>
      ) : (
        todos.map((todo) => {
          return (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              toggleCompleted={toggleCompleted}
              deleteTodo={deleteTodo}
            />
          )
        })
      )}
    </div>
  )
}

const styles = {
  container: {
    width: '40%',
    margin: '0 auto',
  },
}

export default Todos;
