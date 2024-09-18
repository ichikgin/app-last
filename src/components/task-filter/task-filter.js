import React from 'react';
import './task-filter.css';

function TaskFilter({ filter, newFilter }) {
  const filters = ['All', 'Active', 'Completed'];
  const button = filters.map((item) => {
    if (item === filter) {
      return (
        <li key={item}>
          <button type='button' className='selected' onClick={() => newFilter(item)}>
            {item}
          </button>
        </li>
      );
    }
    return (
      <li key={item}>
        <button type='button' onClick={() => newFilter(item)}>
          {item}
        </button>
      </li>
    );
  });

  return <ul className='filters'>{button}</ul>;
}
export default TaskFilter;
