import {Add} from "@mui/icons-material";
import {Button} from "@mui/material";

export const ButtonAdd = ({isEditing, toggleForm}) => {
    return (
        <Button variant="contained" onClick={() => toggleForm(!isEditing)}>
            <Add />Add Todo
        </Button>
    )
}
