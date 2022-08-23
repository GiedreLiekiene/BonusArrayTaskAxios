import axios from 'axios';

async function getData() {
    const response = await axios('https://dummyjson.com/todos');
    console.log(response.data)
    const array = response.data.todos.filter((todo) => 
        !todo.completed && todo.todo.match(/go/i)
    );
      console.log (JSON.stringify(array));
      return array;
}

getData ();