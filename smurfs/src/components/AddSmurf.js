import React from "react";
import useForm from "react-hook-form";

import axios from "axios";

function AddSmurf() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = values => {
    axios
      .post("http://localhost:3333/smurfs", values)
      .then(res => window.alert("New Smurf Added!"))
      .catch(err => console.log(err));
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="name" name="name" ref={register} />
      <input type="number" placeholder="age" name="age" ref={register} />
      <input type="text" placeholder="height" name="height" ref={register} />

      <input type="submit" />
    </form>
  );
}

export default AddSmurf;
