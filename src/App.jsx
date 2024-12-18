import { useEffect } from "react";
import { useState } from "react"
import classes from './styles.module.css';
import TodoItem from "./components/Todo_Item";
import TodoDetails from "./components/Todo_Details";


function App() {

  const [loading, setLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [details, setDetails] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  async function fetchListOfTodos() {
    setLoading(true);
    try {

      const apiResponse = await fetch('https://dummyjson.com/todos');
      const result = await apiResponse.json();

      // console.log(result);
      if (result?.todos && result?.todos.length > 0) {
        setTodoList(result?.todos);
        setLoading(false);
        setErrorMsg('');
      } else {
        setTodoList([]);
        setLoading(false);
        setErrorMsg('');
      }

    } catch (error) {
      console.log(error);
      setErrorMsg("Some of the error occured");
    }
  }

  async function fetchTodoItemDetails(getCurrentTodoItemId) {
    // console.log(getCurrentTodoItemId);
    try {

      const apiResponse = await fetch(`https://dummyjson.com/todos/${getCurrentTodoItemId}`);
      const details = await apiResponse.json();

      if (details) {
        setDetails(details);
        setOpenDialog(true);
      } else {
        setDetails(null);
        setOpenDialog(false);
      }

      // console.log(details);

    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    fetchListOfTodos();
  }, [])

  return (
    <div className={classes.container}>
      <h1 className={classes.headerText} style={{
        textAlign: 'center',
        marginBottom: '1.5rem',
        fontWeight: '700',
        textTransform: 'uppercase',
        color: 'blue'
      }} >Simple Todo App</h1>

      <div className={classes.todoListContainer}>
        {
          todoList && todoList.length > 0 ?
            (todoList.map(todoItem => <TodoItem
              key={todoItem.id}
              todoItem={todoItem}
              fetchTodoItemDetails={fetchTodoItemDetails}
            />)) : null
        }
      </div>
      <TodoDetails
        details={details}
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        setDetails={setDetails}
      />
    </div>
  )
}

export default App
