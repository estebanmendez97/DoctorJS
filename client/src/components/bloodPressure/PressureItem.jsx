import React from "react";

const PressureItem = props => (
  <div>
    {props.pressureItem.when_reading}
    <br />
    {props.pressureItem.bloodPresure}
    <br />
    {props.pressureItem.created}
  </div>
);
export default PressureItem;
