import { MdClose } from 'react-icons/md';
import css from './Task.module.css';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from '../../redux/actions';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggleCompletedTask = (id) => {
    dispatch(toggleCompleted(id));
  };

  return (
    <div className={css.wrapper}>
      <input
        type='checkbox'
        className={css.checkbox}
        checked={task.completed}
        onChange={() => handleToggleCompletedTask(task.id)}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={() => handleDeleteTask(task.id)}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
