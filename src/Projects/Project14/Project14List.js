import React from "react";

const Project14List = ({
  initState,
  handeClickEdit,
  handleDelete,
  handleClear,
}) => {
  return (
    <div>
      {initState?.map((item, index) => (
        <div key={index} className="project14__item">
          <p>{item.data}</p>
          <div className="project14__button">
            <i onClick={() => handeClickEdit(item)} className="fas fa-edit"></i>
            <i onClick={() => handleDelete(index)} className="fas fa-trash"></i>
          </div>
        </div>
      ))}
      {initState.length !== 0 ? (
        <h3 onClick={handleClear}>Clear Items</h3>
      ) : undefined}
    </div>
  );
};

export default Project14List;
