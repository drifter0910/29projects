import React, { useState } from "react";
import "./Project14.scss";
const Project14 = () => {
  const getData = JSON.parse(localStorage.getItem("state"));
  const [initState, setInitState] = useState(getData ? getData : []);
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
      console.log(props);
      setInitState((prevState) => {
        const newState = [...prevState, props];
        localStorage.setItem("state", JSON.stringify(newState));
        return newState;
      });
      appendNoti("add");
    }
    setInput("");
  };
  const handleDelete = (index) => {
    const newState = [...initState];
    newState.splice(index, 1);
    setInitState([...newState]);
    localStorage.setItem("state", JSON.stringify(newState));
    appendNoti("remove");
  };
  const handleClear = () => {
    setInitState([]);
    localStorage.setItem("state", JSON.stringify([]));
    appendNoti("remove");
  };
  const appendNoti = (status) => {
    const message__container = document.querySelector(".message__container");
    if (status === "add") {
      message__container.innerHTML = `<p class="add">Add success</p>`;
    } else if (status === "remove") {
      message__container.innerHTML = `<p class="remove">Remove success</p>`;
    }
    setTimeout(() => {
      message__container.removeChild(message__container.firstElementChild);
    }, 1000);
  };
  const handleSubmitEnter = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };
  const handleEditEnter = (event) => {
    if (event.key === "Enter") {
      handleEdit();
    }
  };
  const handeClickEdit = (item) => {
    setEditInput(item);
    setEditTerm(item);
    setToggle(!toggle);
  };
  const handleEdit = () => {
    const editedTodo = [...initState].map((todo) => {
      if (todo.id === editTerm.id) {
        todo.data = editInput;
      }
      return todo;
    });
    setInitState([...editedTodo]);
    localStorage.setItem("state", JSON.stringify(initState));
  };
  return (
    <div className="project14">
      <div className="project14__container">
        <div className="message__container"></div>
        <h1>Grocery Bud</h1>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          placeholder="e.g. eggs"
          onKeyPress={handleSubmitEnter}
          // ref={inputRef}
        />
        <button onClick={handleSubmit}>Submit</button>
        {toggle ? (
          <div className="edit-container">
            <input
              onChange={(e) => setEditInput(e.target.value)}
              type="text"
              value={editInput?.data}
              onKeyPress={handleEditEnter}
            />
            <button onClick={handleEdit}>Edit</button>
          </div>
        ) : undefined}
        <div className="project14__list">
          {initState?.map((item, index) => (
            <div key={index} className="project14__item">
              <p>{item.data}</p>
              <div className="project14__button">
                <i
                  onClick={() => handeClickEdit(item)}
                  className="fas fa-edit"
                ></i>
                <i
                  onClick={() => handleDelete(index)}
                  className="fas fa-trash"
                ></i>
              </div>
            </div>
          ))}
          {initState.length !== 0 ? (
            <h3 onClick={handleClear}>Clear Items</h3>
          ) : undefined}
        </div>
      </div>
    </div>
  );
};

export default Project14;
