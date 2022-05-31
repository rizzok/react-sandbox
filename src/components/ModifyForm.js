import {IconButton, TextField} from "@mui/material";
import styled from 'styled-components';
import {Cancel, CheckCircle} from "@mui/icons-material";
import {useState, useContext} from "react";
import {GlobalContext} from "../context/GlobalState";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModifyForm = ({setIsEditing, todo}) => {
    const {modifyTodo} = useContext(GlobalContext);
    const [editingText, setEditingText] = useState(todo.text);

    function handleValidateModification() {
        if (editingText) {
            modifyTodo(todo.id, editingText);
            setIsEditing(false);
        } else {
            // todo: add error message "Please enter a todo"
        }
    }

    return (
        <Wrapper>
            <TextField
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
            />
            <IconButton onClick={handleValidateModification}>
                <CheckCircle color={"success"} />
            </IconButton>
            <IconButton onClick={() => setIsEditing(false)}>
                <Cancel color={"error"} />
            </IconButton>
        </Wrapper>
    )
}
