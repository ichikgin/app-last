import React from 'react';

import TaskFilter from '../task-filter/task-filter';
import './footer.css';

function Footer({ deleteAllDone, todoCount, filter, newFilter }) {
  return (
    <footer className='footer'>
      <span className='todo-count'>{todoCount} items left</span>
      <TaskFilter filter={filter} newFilter={newFilter} />
      <button type='button' className='clear-completed' onClick={deleteAllDone}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
