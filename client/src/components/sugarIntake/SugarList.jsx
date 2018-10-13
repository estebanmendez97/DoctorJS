import React from "react";

import SugarItem from "./SugarItem.jsx";

const SugarList = props => (
  <div>
    {props.sugarLevels.map((sugarLevel, index) => (
      <SugarItem sugarLevel={sugarLevel} key={index} />
    ))}
  </div>
);
export default SugarList;
