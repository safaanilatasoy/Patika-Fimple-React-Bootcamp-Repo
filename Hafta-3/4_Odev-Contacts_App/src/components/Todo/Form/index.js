import React, { useEffect, useState } from 'react'

const initialFormValues = {newTodo: ""};
function Form({addTodos, todos}) {
    const [form, setForm] = useState({newTodo: ""});

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    useEffect(() => {
        setForm(initialFormValues);
    }, [todos])

    const onSubmit = (e) => {
        e.preventDefault();

        if(form.newTodo === ""){
            return false;
        }
        addTodos([...todos, form]);
        
    };
  return (
    	<header className="header">
		<h1>todos</h1>
		<form onSubmit={onSubmit}>
			<input 
            className="new-todo"
            name="newTodo"
            placeholder="What needs to be done?" 
            autoFocus 
            onChange={onChangeInput}
            value = {form.newTodo}
            />
            <button>Add</button>
		</form>
	</header>
  );
}

export default Form
