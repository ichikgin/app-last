import React from 'react';

import NewTaskForm from '../new-task-form/new-task-form';
import TaskList from '../task-list/task-list';
import Footer from '../footer/footer';
import './App.css';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
      filter: 'All',
    };
    this.newFilter = (value) => {
      this.setState(() => ({ filter: value }));
    };
    this.newItem = (text) => {
      const newItem = {
        value: text,
        date: new Date().getTime(),
        id: Date.now(),
        done: false,
        edit: false,
      };
      this.setState(({ dataList }) => {
        const newArr = [...dataList, newItem];
        return {
          dataList: newArr,
        };
      });
    };
    this.deleteItem = (id) => {
      this.setState(({ dataList }) => {
        const newArr = dataList.filter((item) => item.id !== id);
        return {
          dataList: newArr,
        };
      });
    };

    this.deleteAllDone = () => {
      this.setState(({ dataList }) => {
        const newArr = dataList.filter((item) => item.done === false);
        return {
          dataList: newArr,
        };
      });
    };
    this.toogleClick = (id, elementState) => {
      this.setState(({ dataList }) => {
        const newArr = dataList.map((item) => {
          if (item.id === id) {
            return { ...item, [elementState]: !item[elementState] };
          }
          return item;
        });
        return {
          dataList: newArr,
        };
      });
    };

    this.editLabel = (id, newValue) => {
      this.setState(({ dataList }) => {
        const newArr = dataList.map((item) => {
          if (item.id === +id) {
            return { ...item, value: newValue, edit: !item.edit };
          }
          return item;
        });
        return {
          dataList: newArr,
        };
      });
    };
  }

  render() {
    const { dataList, filter } = this.state;
    const todoCount = dataList.filter((item) => !item.done).length;
    return (
      <section className='todoapp'>
        <NewTaskForm newItem={this.newItem} />
        <TaskList
          dataList={dataList}
          onDeleted={this.deleteItem}
          toogleClick={this.toogleClick}
          filter={filter}
          editLabel={this.editLabel}
        />
        <Footer deleteAllDone={this.deleteAllDone} todoCount={todoCount} newFilter={this.newFilter} filter={filter} />
      </section>
    );
  }
}

export default TodoApp;
