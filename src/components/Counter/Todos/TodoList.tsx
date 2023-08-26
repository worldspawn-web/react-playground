import { FC, useState, useEffect } from 'react';
import { TTodo } from '../../../types/todos';
import TodoItem from './TodoItem';
import { fetchTodos } from '../../../api/api';

const TodoList: FC = () => {
  const [todoList, setTodoList] = useState<TTodo[]>([]);

  useEffect(() => {
    const todos = fetchTodos();
    todos.then((data) => setTodoList(data));
  }, []);

  const addItem = () => {
    setTodoList((prevState) => [
      ...prevState,
      {
        id: Math.floor(Math.random() * 10000),
        completed: false,
        title: 'This is a new task.',
        userId: 1,
      },
    ]);
  };

  const deleteItem = (id: number) => {
    setTodoList((prevState) => prevState.filter((item) => item.id !== id));
  };

  const checkItem = (id: number) => {
    setTodoList((prevState) => {
      const currentItem = prevState.find((item) => item.id !== id)!;
      return [
        ...prevState.filter((item) => item.id !== id),
        {
          ...currentItem,
          completed: !currentItem.completed,
        },
      ];
    });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((item) => (
          <TodoItem
            item={item}
            key={item.id}
            onDelete={deleteItem}
            onChecked={checkItem}
          />
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default TodoList;
