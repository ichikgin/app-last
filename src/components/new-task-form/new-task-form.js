import React from 'react';
import './new-task-form.css';

class NewTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.onLabelChange = (e) => {
      if (e.key === 'Enter' && e.target.value.trim()) {
        props.newItem(e.target.value);
        e.target.value = '';
      }
    };
  }

  render() {
    return (
      <header className='header'>
        <h1>Todos</h1>
        <input
          className='new-todo'
          placeholder='What needs to be done?'
          autoFocus
          onKeyDown={(e) => this.onLabelChange(e)}
        />
      </header>
    );
  }
}
export default NewTaskForm;
