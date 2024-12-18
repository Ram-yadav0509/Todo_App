import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";


function TodoDetails({details, openDialog, setOpenDialog, setDetails}) {

    return (
        <>
            <Dialog onClose={() => setOpenDialog(false)} open={openDialog}>
                <DialogTitle>{details?.todo}</DialogTitle>
                <DialogActions>
                    <Button onClick={ () =>{
                        setOpenDialog(false);
                        setDetails(null);
                    }}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default TodoDetails;