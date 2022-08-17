import React, { useState } from 'react';

const Project14Item = ({ index, item, handleDelete, setInitState, initState }) => {
  const [toggle, setToggle] = useState(false);
  const [edit, setEdit] = useState(item.data);
  const clickToEdit = () => {
    setToggle(!toggle);
  };
  const handleEdit = (e) => {
    e.preventDefault();
    const editedTodo = [...initState].map((todo) => {
      if (todo.id === item.id) {
        todo.data = edit;
      }
      return todo;
    });
    setInitState([...editedTodo]);
    setToggle(false);
  };
  return (
    <form onSubmit={handleEdit} key={index} className="project14__item">
      {toggle ? (
        <input type="text" value={edit} onChange={(e) => setEdit(e.target.value)} />
      ) : (
        <p>{item.data}</p>
      )}
      <div className="project14__button">
        <i onClick={clickToEdit} className="fas fa-edit"></i>
        <i onClick={() => handleDelete(index)} className="fas fa-trash"></i>
      </div>
    </form>
  );
};

export default Project14Item;
