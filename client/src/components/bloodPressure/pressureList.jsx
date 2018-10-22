import React from "react";
import PressureItem from "./PressureItem.jsx";
const PressureList = props => (
  <div>
    {props.pressure.map((pressureItem, index) => (
      <PressureItem pressureItem={pressureItem} key={index} />
    ))}
  </div>
);

export default PressureList;
