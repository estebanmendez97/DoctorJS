import React from "react";
import ResponsiveContainer from "recharts/lib/component/ResponsiveContainer";
import LineChart from "recharts/lib/chart/LineChart";
import Line from "recharts/lib/cartesian/Line";
import XAxis from "recharts/lib/cartesian/XAxis";
import YAxis from "recharts/lib/cartesian/YAxis";
import CartesianGrid from "recharts/lib/cartesian/CartesianGrid";
import Tooltip from "recharts/lib/component/Tooltip";
import Legend from "recharts/lib/component/Legend";

const data = [
  {
    name: "Mon",
    Sugar_Level: 111,
    Blood_Pressure_Level: 113,
    Carbs_Level: 223
  },
  {
    name: "Tue",
    Sugar_Level: 103,
    Blood_Pressure_Level: 105,
    Carbs_Level: 209
  },
  {
    name: "Wed",
    Sugar_Level: 99,
    Blood_Pressure_Level: 91,
    Carbs_Level: 201
  },
  {
    name: "Thu",
    Sugar_Level: 95,
    Blood_Pressure_Level: 109,
    Carbs_Level: 195
  },
  {
    name: "Fri",
    Sugar_Level: 102,
    Blood_Pressure_Level: 102,
    Carbs_Level: 220
  },
  {
    name: "Sat",
    Sugar_Level: 107,
    Blood_Pressure_Level: 110,
    Carbs_Level: 234
  },
  {
    name: "Sun",
    Sugar_Level: 117,
    Blood_Pressure_Level: 99,
    Carbs_Level: 151
  }
];

function SimpleLineChart() {
  return (
    // 99% per https://github.com/recharts/recharts/issues/172
    <ResponsiveContainer width="99%" height={320}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Sugar_Level" stroke="#82ca9d" />
        <Line
          type="monotone"
          dataKey="Blood_Pressure_Level"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SimpleLineChart;
