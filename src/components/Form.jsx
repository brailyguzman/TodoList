import { useState } from "react";
import PropTypes from "prop-types";

export default function Form({ todos, setTodos }) {
  const [inputText, setInputText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const todo = {
      text: inputText,
      id: crypto.randomUUID(),
      completion: false,
    };
    setTodos([...todos, todo]);
    setInputText("");
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          placeholder="Add item..."
          id="item-text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          required
        />
        <input type="submit" value="Add" id="add-item" />
      </form>
    </div>
  );
}

Form.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completion: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  setTodos: PropTypes.func.isRequired,
};
