import "./barplot.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


export default function Barchart(props) {
  const calories = props.me.calories
  const height = props.me.height
  const data = [
    {
      name: "Me",
      calories,
      height,
      amt:2200
    },
    {
      name: "Mt. Fuji",
      calories: 4432,
      height: 3776,
      amt: 2210
    },
    {
      name: "Mt. Everest",
      calories: 10384,
      height: 8849,
      amt: 2290
    }
  ];
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="height" fill="#8884d8" />
      <Bar dataKey="calories" fill="#82ca9d" />
    </BarChart>
  );
}

