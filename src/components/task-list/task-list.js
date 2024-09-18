import React from 'react';

import Task from '../task/task';
import './task-list.css';

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.onEditChange = (e) => {
      if (e.key === 'Enter' && e.target.value.trim()) {
        props.editLabel(e.target.id, e.target.value);
      }
    };
  }

  render() {
    const { dataList, filter, onDeleted, toogleClick } = this.props;

    const elements = dataList.map((item) => {
      const inputEdit = item.edit ? (
        <input
          type='text'
          defaultValue={item.value}
          className='edit'
          id={item.id}
          onKeyDown={(e) => this.onEditChange(e)}
          autoFocus
        />
      ) : (
        ''
      );
      const element = (
        <Task dataItem={item} key={item.id} onDeleted={onDeleted} toogleClick={toogleClick}>
          {inputEdit}
        </Task>
      );

      if (filter === 'All') {
        return element;
      }
      if (filter === 'Active' && !item.done) {
        return element;
      }
      if (filter === 'Completed' && item.done) {
        return element;
      }
      return null;
    });
    return <ul className='todo-list'>{elements}</ul>;
  }
}

export default TaskList;
