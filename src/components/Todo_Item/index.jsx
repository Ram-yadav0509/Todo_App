import { Card, CardActions, CardContent, Button, Typography } from "@mui/material";


function TodoItem({ todoItem, fetchTodoItemDetails }) {
    console.log(todoItem.todo);
    return (
        <Card sx={{
            maxWidth: 350,
            display: "flex",
            flexDirection: "column",
            justifyContent: 'space-between',
            backgroundColor: 'gray',
            color : 'white',
            '&:hover': {
                transform : 'scale(1.02)',
                transition : 'transform 5ms',
                color: '#fff',
                background : '#100110',
                opacity: 1,
            }
        }}>
            <CardContent>
                {/* <Typography variant="h5" color={"text.secondary"}>{todoItem?.todo}</Typography> */}
                <Typography variant="h5" color={"inherit"}>{todoItem?.todo}</Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => fetchTodoItemDetails(todoItem?.id)}
                    sx={{
                        backgroundColor: '#000',
                        color: '#fff',
                        opacity: 0.7,
                        '&:hover': {
                            backgroundColor: 'gray',
                            color: '#fff',
                            opacity: 1,
                        }
                    }} >Details</Button>
            </CardActions>
        </Card>
    )
}

export default TodoItem;