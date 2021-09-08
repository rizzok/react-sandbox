export default function AddTodoForm({ todo, onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <h2>Add Todo</h2>
      <input
        name="todo"
        type="text"
        placeholder="Create a new todo"
        value={todo}
        onChange={onChange}
      />
      <input type="submit" value="➕" />
    </form>
  );
}
