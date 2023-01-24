
import { useEffect, useState } from "react";
import { Title, TodoInput, TodoList } from './components';

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Watch the next Netflix Serie',
      completed: false,
    },
    {
      id: 2,
      title: 'Read the book The Lord of Rings',
      completed: false,
    },
    {
      id: 3,
      title: 'Take a shower',
      completed: false,
    },
    {
      id: 4,
      title: 'Study 2 hours',
      completed: false,
    }

  ])

  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState(todos);

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

    const newTodo = {
      id: lastId + 1,
      title,
      completed: false
    }

    const todoList = [...todos]
    todoList.push(newTodo);
    setTodos(todoList);
  }

  const handleSetComplete = (id) => {
    const updateList = todos.map(todo => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed}
      }
      return todo;
    })

    setTodos(updateList);
  }

  const handleDelete = (id) => {
    const updateList = todos.filter(todo => todo.id !== id)
    setTodos(updateList);
  }

  const handleClearComplete = () => {
    const updateList = todos.filter(todo => !todo.completed);
    setTodos(updateList);
  }

  const showAllTodos = () => {
    setActiveFilter('all')
  }

  const showActiveTodos = () => {
    setActiveFilter('active')
  }

  const showCompletedTodos = () => {
    setActiveFilter('completed')
  }

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredTodos(todos);
    } else if (activeFilter === 'active') {
      const activeTodos = todos.filter(todo => todo.completed === false);
      setFilteredTodos(activeTodos);
    } else if (activeFilter === 'completed') {
      const completedTodos = todos.filter(todo => todo.completed === true);
      setFilteredTodos(completedTodos);
    }
  }, [activeFilter, todos]);

  return (
    <div className="bg-violet-800 min-h-screen h-full font-inter text-gray-100 flex items-center justify-center py-20 px-5">
        <div className="container flex flex-col max-w-xl">
          <Title/>
          <TodoInput addTodo={addTodo}/>
          <TodoList
            todos={filteredTodos}
            activeFilter={activeFilter}       
            showAllTodos={showAllTodos}
            showActiveTodos={showActiveTodos}
            showCompletedTodos={showCompletedTodos}
            handleSetComplete={handleSetComplete}
            handleDelete ={handleDelete}            
            handleClearComplete={handleClearComplete}
           />
        </div>
    </div>
  );
}

export default App;
