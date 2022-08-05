import React, { useEffect, useState } from "react";
import Project14List from "./Project14List";
import "./Project14.scss";
const Project14 = () => {
  const getData = JSON.parse(localStorage.getItem("state"));
  const [initState, setInitState] = useState(getData ? getData : []);
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(initState));
  }, [initState]);
  const [input, setInput] = useState("");
  const [editTerm, setEditTerm] = useState(null);
  const [editInput, setEditInput] = useState();
  const [toggle, setToggle] = useState(false);
  const handleSubmit = () => {
    if (input !== "") {
      const props = {
        id: Math.floor(Math.random() * 10000),
        data: input,
      };
      setInitState([...initState, props]);
      appendNoti("add");
    }
    setInput("");
  };
  const handleDelete = (index) => {
    const newState = [...initState];
    newState.splice(index, 1);
    setInitState([...newState]);
    appendNoti("remove");
    setToggle(false);
  };
  const handleEdit = () => {
    const editedTodo = [...initState].map((todo) => {
      if (todo.id === editTerm.id) {
        todo.data = editInput;
      }
      return todo;
    });
    setInitState([...editedTodo]);
    setToggle(false);
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };
  const handleClear = () => {
    setInitState([]);
    appendNoti("remove");
    setToggle(false);
  };
  const appendNoti = (status) => {
    const container = document.querySelector(".message__container");
    if (status === "add") {
      container.innerHTML = `<p class="add">Add success</p>`;
    } else if (status === "remove") {
      container.innerHTML = `<p class="remove">Remove success</p>`;
    }
    setTimeout(() => {
      container.removeChild(container.firstElementChild);
    }, 1000);
  };
  const handeClickEdit = (item) => {
    setEditInput(item);
    setEditTerm(item);
    setToggle(!toggle);
  };
  return (
    <div className="project14">
      <div className="project14__container">
        <div className="message__container"></div>
        <h1>Grocery Bud</h1>
        <form action="" onSubmit={handleSubmitForm}>
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            value={input}
            placeholder="e.g. eggs"
          />
          <button onClick={handleSubmit}>Submit</button>
        </form>

        {toggle ? (
          <div className="edit-container active">
            <input
              onChange={(e) => setEditInput(e.target.value)}
              type="text"
              value={editInput?.data}
            />
            <button onClick={handleEdit}>Edit</button>
          </div>
        ) : (
          <div className="edit-container"></div>
        )}
        <div className="project14__list">
          <Project14List
            initState={initState}
            handeClickEdit={handeClickEdit}
            handleDelete={handleDelete}
            handleClear={handleClear}
          />
        </div>
      </div>
    </div>
  );
};

export default Project14;
