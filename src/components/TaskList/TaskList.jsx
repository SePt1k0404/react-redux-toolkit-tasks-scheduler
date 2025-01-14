import { useSelector } from 'react-redux';
import { Task } from '../Task/Task';
import css from './TaskList.module.css';
import { statusFilters } from '../../redux/constants';
import { getFilterStatus, getTasks } from '../../redux/selectors';

const getVisibleTasks = (tasks, filter) => {
  switch (filter) {
    case statusFilters.active: {
      return tasks.filter((task) => !task.completed);
    }
    case statusFilters.completed: {
      return tasks.filter((task) => task.completed);
    }
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(getTasks);
  const filter = useSelector(getFilterStatus);
  const visibleTasks = getVisibleTasks(tasks, filter);
  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
