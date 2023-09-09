import PropTypes from "prop-types";
export function TodoList({ todos, setTodos }) {
  return (
    <div className="todos-container">
      <ul className="todo-list">
        {todos.length !== 0 ? (
          todos.map((item) => (
            <Item
              item={item}
              todos={todos}
              setTodos={setTodos}
              key={crypto.randomUUID()}
            />
          ))
        ) : (
          <h3 id="noItemsText">No items to display</h3>
        )}
      </ul>
    </div>
  );
}

function Item({ item, todos, setTodos }) {
  function handleCompletion(item) {
    const completion = !item.completion;
    const updatedTodos = todos.map((todo) =>
      todo.id === item.id ? { ...todo, completion: completion } : todo,
    );
    setTodos(updatedTodos);
  }

  function handleDelete(item) {
    const updatedTodos = todos.filter((todo) => todo.id !== item.id);
    setTodos(updatedTodos);
  }

  return (
    <li className="listElement">
      <input
        className={item.completion ? "todo-text completed" : "todo-text"}
        type="text"
        value={item.text}
        readOnly={true}
      />

      <input
        className="completion-btn todo-button"
        type="button"
        value="✓"
        onClick={() => handleCompletion(item)}
      />
      <input
        className="remove-btn todo-button"
        type="button"
        value="✘"
        onClick={() => handleDelete(item)}
      />
    </li>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completion: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  setTodos: PropTypes.func.isRequired,
};

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completion: PropTypes.bool.isRequired,
  }).isRequired,

  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completion: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  setTodos: PropTypes.func.isRequired,
};
