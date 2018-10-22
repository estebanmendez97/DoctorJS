import React from "react";
import axios from "axios";
import ResponsiveContainer from "recharts/lib/component/ResponsiveContainer";
import LineChart from "recharts/lib/chart/LineChart";
import Line from "recharts/lib/cartesian/Line";
import XAxis from "recharts/lib/cartesian/XAxis";
import YAxis from "recharts/lib/cartesian/YAxis";
import CartesianGrid from "recharts/lib/cartesian/CartesianGrid";
import Tooltip from "recharts/lib/component/Tooltip";
import Legend from "recharts/lib/component/Legend";

class BloodLineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    this.getBloodChart();
  }

  getBloodChart() {
    axios
      .get("/bloodPresure")
      .then(res => {
        this.setState({ data: res.data });
        console.log(this.state.data);
      })
      .catch(err => {
        console.log("THIS IS THE GRAPH ERROR", err);
      });
  }
  render() {
    const formatData = this.state.data;
    const arr2obj = function(formatData) {
      const finalData = [];
      for (var i = 0; i < formatData.length; i++) {
        let obj = {};
        obj.name = formatData[i].when_reading;
        obj.value = formatData[i].bloodPresure;
        finalData.push(obj);
      }
      return finalData;
    };
    return (
      <div>
        <ResponsiveContainer width="99%" height={320}>
          <LineChart data={arr2obj(formatData)}>
            <XAxis dataKey="name" />
            <YAxis
              type="number"
              domain={["dataMin", "dataMax"]}
              dataKey="value"
            />
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
export default BloodLineChart;
