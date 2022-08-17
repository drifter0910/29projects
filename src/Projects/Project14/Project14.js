import React, { useEffect, useState } from 'react';
import './Project14.scss';
import Project14Item from './Project14Item';
const Project14 = () => {
  const getData = JSON.parse(localStorage.getItem('state'));
  const [initState, setInitState] = useState(getData ? getData : []);
  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(initState));
  }, [initState]);
  const [input, setInput] = useState('');
  const handleSubmit = () => {
    if (input) {
      const props = {
        id: Math.floor(Math.random() * 1000),
        data: input,
      };
      setInitState([...initState, props]);
      appendNoti('add');
    }
    setInput('');
  };
  const handleDelete = (index) => {
    const newState = [...initState];
    newState.splice(index, 1);
    setInitState([...newState]);
    appendNoti('remove');
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };
  const handleClear = () => {
    setInitState([]);
    appendNoti('remove');
  };
  const appendNoti = (status) => {
    const container = document.querySelector('.message__container');
    if (status === 'add') {
      container.innerHTML = `<p class="add">Add success</p>`;
    } else if (status === 'remove') {
      container.innerHTML = `<p class="remove">Remove success</p>`;
    }
    setTimeout(() => {
      container.removeChild(container.firstElementChild);
    }, 1000);
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
        <div className="project14__list">
          {initState?.map((item, index) => (
            <Project14Item
              setInitState={setInitState}
              initState={initState}
              key={index}
              item={item}
              index={index}
              handleDelete={handleDelete}
            />
          ))}
          {initState.length !== 0 ? <h3 onClick={handleClear}>Clear Items</h3> : undefined}
        </div>
      </div>
    </div>
  );
};

export default Project14;
