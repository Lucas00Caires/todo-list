import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function EditTask({open, dialogHandler, todo, editTodo}) {
    const [editedText, setEditedText] = React.useState(todo.text)

    const textHandler = () => {
        	editTodo(todo.id, editedText)
            dialogHandler();
    };

  return (
      <Dialog 
      open={open} 
      onClose={dialogHandler}
      >
        <DialogTitle>{"Edição de task"}</DialogTitle>
        <DialogContent>
          <TextField 
            autoFocus
            margin="dense"
            fullWidth
            variant="standard"
            defaultValue={editedText}
            onChange = {(e) => setEditedText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogHandler}>Cancelar</Button>
          <Button onClick={textHandler}>Editar</Button>
        </DialogActions>
        
      </Dialog>
  );
}