import { useDispatch, useSelector } from 'react-redux';
import { statusFilters } from '../../redux/constants';
import { Button } from '../Button/Button';
import css from './StatusFilter.module.css';
import { setStatusFilter } from '../../redux/actions';
import { getFilterStatus } from '../../redux/selectors';

export const StatusFilter = () => {
  const filter = useSelector(getFilterStatus);
  const dispatch = useDispatch();
  const handleFilterChange = (statusFilter) => {
    dispatch(setStatusFilter(statusFilter));
  };

  return (
    <div className={css.wrapper}>
      <Button
        selected={statusFilters.all === filter}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={statusFilters.active === filter}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={statusFilters.completed === filter}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
