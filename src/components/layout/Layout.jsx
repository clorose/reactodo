import React from 'react';
import Header from '../header/Header';
import Form from '../form/Form';
import Todo from '../todo/Todo';
import List from '../list/List';

const Layout = () => {
  return (
    <>
      <Header />
      <Form />
      <Todo />
      <List />
    </>
  );
};

export default Layout;
