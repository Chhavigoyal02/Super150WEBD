import { useState } from 'react'
function App() {
  const [todos, setTodos] = useState([{ title: "cricket", desc: "play cricket" }, { title: "hockey", desc: "play hockey" }]);
  function addTodo(title, desc) {
    let newTodo = { title: title, desc: desc };
    // let newTodos = todos.push(newTodo);
    // setTodos(newTodos);//don't do this
    let newTodos = [...todos];
    newTodos.push(newTodo);
    setTodos(newTodos);
  }
  return (
    <>
      {todos.map((todo, idx) => <Todo key={idx} title={todo.title} desc={todo.desc}></Todo>)}
      <button onClick={() => addTodo("Study", "Study at 10:00pm")}></button>
    </>
  )
}
function Todo({ title, desc }) {
  return (
    <>
      <div>{title}</div>
      <div>{desc}</div>
    </>
  )
}
export default App
