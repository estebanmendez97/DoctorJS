import React from "react";
import CarbsItem from "./CarbsItem.jsx";

const CarbsList = props => (
  <div>
    {props.carbsList.map((carbsItem, index) => (
      <CarbsItem carbsItem={carbsItem} key={index} />
    ))}
  </div>
);
export default CarbsList;
