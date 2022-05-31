import {List} from "@mui/material";
import {TodoItem} from "./TodoItem";
import {useContext} from "react";
import {GlobalContext} from "../context/GlobalState";

export const TodoList = () => {
    const {todos} = useContext(GlobalContext);

    return (
        <List>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </List>
    )
}
