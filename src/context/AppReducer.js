export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_ADD_TODO_FORM':
            return {
                ...state,
                isEditing: !action.isEditing
            }

        case 'ADD_TODO':
            const newId = state.todos.length > 0 ?
                state.todos.slice(-1)[0].id + 1 :
                1;
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: newId,
                        text: action.text,
                        done: false
                    }
                ]
            }

        case 'HANDLE_CHECK':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    return (todo.id === action.todo.id)
                        ? {...action.todo, done: !action.todo.done}
                        : todo;
                })
            }

        case 'MODIFY_TODO':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    return (todo.id === action.id)
                        ? {...todo, text: action.text}
                        : todo;
                })
            }

        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            }

        default:
            return state;
    }
}
