import "./lineplot.css";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


export default function App(props) {
  let data = props.data
  data.map((d)=>{
    d.calories = parseInt(d.calories)
    d.name= d._id
    return d
  })
  return (
    <LineChart
      width={500}
      height={600}
      data={data}
      margin={{
        top: 30,
        right: 30,
        left: 20,
        bottom: 10
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" dy={10}/>
      <YAxis domain={[0, 'dataMax+50']}/>
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="calories"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="height" stroke="#82ca9d" />
    </LineChart>
  );
}