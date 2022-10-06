import React, { useState, useCallback } from 'react';
import './style.css';

const Form = ({ onInsert }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const onChangeContext = useCallback((e) => {
    setContent(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(title, content);
      setTitle('');
      setContent('');
      e.preventDefault();
    },
    [onInsert, title, content]
  );
  return (
    <form className='form' onSubmit={onSubmit}>
      <div className='input-parent'>
        <label className='title' htmlFor='title'>
          제목
        </label>
        <input
          className='input'
          type='text'
          id='title'
          value={title}
          onChange={onChangeTitle}
        />
        <label className='title-content' htmlFor='text'>
          내용
        </label>
        <input
          className='input'
          type='text'
          id='text'
          onChange={onChangeContext}
          value={content}
        />
      </div>
      <button className='button' onSubmit={onSubmit}>
        추가하기
      </button>
    </form>
  );
};

export default Form;
