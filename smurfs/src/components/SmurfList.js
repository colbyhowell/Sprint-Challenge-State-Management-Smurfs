import React, { useContext } from "react";
import SmurfContext from "../contexts/smurfContext";

import SmurfNames from "./SmurfNames";

const SmurfList = () => {
  const smurfs = useContext(SmurfContext);
  console.log(smurfs);

  if (!smurfs.smurfs) return <div>LOADING...</div>;
  return (
    <div>
      {smurfs.smurfs.data.map(s => (
        <SmurfNames smurfs={s} />
      ))}
    </div>
  );
};

export default SmurfList;
