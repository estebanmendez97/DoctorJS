import React from "react";

const CarbsItem = props => (
  <div>
    {props.carbsItem.amount_mesuare}
    <br />
    {props.carbsItem.carbs}
    <br />
    {props.carbsItem.carbs_time}
  </div>
);
export default CarbsItem;
