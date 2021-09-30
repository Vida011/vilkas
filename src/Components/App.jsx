import React, {useState, useEffect, useLayoutEffect} from 'react';
import axios from 'axios';

function App() {

    const [todos, setTodos] = useState;


    useEffect (()=> {
        console.log('start');
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(function (response) {
            console.log(response.data);
        })
    
    }, []);

    return (<div className="todo-container">
        {todos.map((todo)=>(<Todo key = {todo.id} data={todo}></Todo>))}
     
        </>);
    }

export default App;
