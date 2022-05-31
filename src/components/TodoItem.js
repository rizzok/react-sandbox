import {Checkbox, IconButton, ListItem, ListItemText} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {useContext, useState} from "react";
import {GlobalContext} from "../context/GlobalState";
import {Edit} from "@mui/icons-material";
import {ModifyForm} from "./ModifyForm";

export const TodoItem = ({todo}) => {
    const {handleCheck, deleteTodo} = useContext(GlobalContext)
    const {id, text, done} = todo;

    const [isEditing, setIsEditing] = useState(false);

    return (
        <ListItem dense>
            <Checkbox
                onChange={() => handleCheck(todo)}
                checked={done}
                edge="start"
                disableRipple
                color="success"
            />
            {!isEditing && <ListItemText>{text}</ListItemText>}
            {isEditing
                ? <ModifyForm
                    setIsEditing={setIsEditing}
                    todo={todo}
                />
                : <IconButton onClick={() => setIsEditing(true)}>
                    <Edit color={"primary"}/>
                </IconButton>
            }
            {!isEditing &&
                <IconButton onClick={() => deleteTodo(id)}>
                    <DeleteIcon color={"error"} />
                </IconButton>
            }
        </ListItem>
    )
}
