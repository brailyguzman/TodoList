import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import { useEffect, useState } from "react";
import { TodoList } from "./components/TodoList.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <Header />
      <main>
        <Form todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </main>
      <Footer />
    </div>
  );
}
