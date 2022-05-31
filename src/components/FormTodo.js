import {IconButton, TextField} from "@mui/material";
import {AddCircle, Cancel} from "@mui/icons-material";
import styled from "styled-components";
import {useContext, useState} from "react";
import {GlobalContext} from "../context/GlobalState";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FormTodo = ({isEditing, toggleForm}) => {
    const [text, setText] = useState('');
    const {addTodo} = useContext(GlobalContext);

    function handleAddClick() {
        if (text) {
            addTodo(text)
            toggleForm(false)
            setText('')
        } else {
            // todo: add error message "Please enter a todo"
        }
    }

    return (
        <Wrapper>
            <TextField
                label="New todo"
                value={text}
                onChange={(e) => setText(e.target.value)}
                // helperText="Incorrect entry"
            />
            <IconButton onClick={handleAddClick}>
                <AddCircle color={"success"} />
            </IconButton>
            <IconButton onClick={() => toggleForm(false)}>
                <Cancel color={"error"} />
            </IconButton>
        </Wrapper>
    )
}
