import React from "react";
import axios from "axios";

const SmurfNames = props => {
  const handleDelete = () => {
    axios
      .delete(`http://localhost:3333/smurfs/${[props.smurfs.id]}`)
      .then(window.alert("Smurf Deleted"))
      .catch(err => console.log(err));
    window.location.reload();
  };
  return (
    <div className="smurf-container">
      <div className="smurf-box">
        <div className="smurf-name">Name:{props.smurfs.name}</div>
        <div className="smurf-age">Age:{props.smurfs.age}</div>
        <div className="smurf-height">Height:{props.smurfs.height}</div>
        <div className="smurf-delete">
          <button className="smurf-delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmurfNames;
