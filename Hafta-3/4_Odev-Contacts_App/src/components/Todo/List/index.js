import { useState } from 'react'

function List({todos}) {
	

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {todos.map((todos, i) => (
          <li key={i} className="">
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
              />
              <label>{todos.newTodo}</label>
              <button className="destroy"></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default List
