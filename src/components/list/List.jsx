import React, { useState } from 'react';
import Todo from '../todo/Todo';
import './style.css';

const List = ({ todos, onRemove, onToggle }) => {
  console.log(todos);
  const { title, content, checked, id } = todos;

  return (
    <>
      <div className='working-tree'>
        <div className='title'>
          <h1>Working.. 🔥</h1>
        </div>
        <div className='container'>
          {todos.map((item) => {
            if (item.checked === false) {
              return (
                <Todo item={item} onToggle={onToggle} onRemove={onRemove} />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div className='done-tree'>
        <div className='title'>
          <h1>Done..! 🎉</h1>
        </div>
        <div className='container'>
          {todos.map((item) => {
            if (item.checked === true) {
              return (
                <Todo item={item} onToggle={onToggle} onRemove={onRemove} />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default List;
