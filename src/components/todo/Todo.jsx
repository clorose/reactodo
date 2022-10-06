import React, { useCallback } from 'react';
import './style.css';

const Todo = ({ item, onRemove, onToggle }) => {
  const { title, content, checked, id } = item || {};
  return (
    <div className='cards'>
      <h1>{title}</h1>
      <p>{content}</p>
      <button className='del-btn'
        onClick={() => {
          onRemove(id);
        }}
      >
        삭제하기
      </button>
      {checked === false ? (
        <button className='done-btn'
          onClick={() => {
            onToggle(id);
          }}
        >
          완료
        </button>
      ) : (
        <button className='done-btn'
          onClick={() => {
            onToggle(id);
          }}
        >
          취소
        </button>
      )}
    </div>
  );
};

export default Todo;
