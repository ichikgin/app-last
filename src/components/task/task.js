import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import './task.css';

function Task(props) {
  const { dataItem } = props;
  const { id, value, date, done, edit } = dataItem;
  const { children, onDeleted, toogleClick } = props;
  let classNameLi = done ? 'completed' : '';
  classNameLi += edit ? ' editing' : '';

  return (
    <li className={classNameLi}>
      {children}
      <div className='view'>
        <input className='toggle' type='checkbox' checked={done} onChange={() => toogleClick(id, 'done')} />
        <label>
          <span
            role='textbox'
            tabIndex={0}
            className='description'
            onClick={() => toogleClick(id, 'done')}
            onKeyDown={() => toogleClick(id, 'done')}
          >
            {value}
          </span>
          <span className='created'> {formatDistanceToNow(new Date(date), { addSuffix: true })}</span>
        </label>
        <button type='button' className='icon icon-edit' aria-label='edit' onClick={() => toogleClick(id, 'edit')} />
        <button type='button' className='icon icon-destroy ' aria-label='destroy' onClick={() => onDeleted(id)} />
      </div>
    </li>
  );
}
Task.defaultProps = {
  onDeleted: () => {},
  toogleClick: () => {},
};
export default Task;
