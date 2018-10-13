import React from "react";

const SugarItem = props => (
  <div>
    {props.sugarLevel.when_mesuare}
    <br />
    {props.sugarLevel.glucose}
    <br />
    {props.sugarLevel.created}
  </div>
);
export default SugarItem;
