import {useEffect, useState} from 'react'
import List from './List';
import Form from './Form'
import './style.css'
import Footer from './Footer';

function Todo() {
     const [todos, setTodos] = useState([]);

     useEffect(() => {
      console.log(todos);
     }, [todos])
  return (
    <section class="todoapp">
      <Form addTodos={setTodos} todos={todos} />
      <List todos={todos} />
      <Footer todos={todos} />
    </section>
  );
}

export default Todo
