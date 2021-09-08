export default function EditForm({
  currentTodo,
  onSubmit,
  onChange,
  setIsEditing,
}) {
  return (
    <form onSubmit={onSubmit}>
      <h2>Edit Todo</h2>
      <label htmlFor="editTodo">Edit todo: </label>
      <input
        name="editTodo"
        type="text"
        placeholder="Edit todo"
        value={currentTodo.text}
        onChange={onChange}
      />
      <button type="submit">✅</button>
      <button onClick={() => setIsEditing(false)}>↩️</button>
    </form>
  );
}
