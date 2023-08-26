import { FC, memo } from 'react';
import { TTodo } from '../../../types/todos';

interface TodoItemProps {
  item: TTodo;
  onDelete: (id: number) => void;
  onChecked: (id: number) => void;
}

const TodoItem: FC<TodoItemProps> = ({ item, onDelete, onChecked }) => {
  return (
    <li>
      <span>{item.title}</span>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => onChecked(item.id)}
      ></input>
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </li>
  );
};

export default memo(TodoItem);
