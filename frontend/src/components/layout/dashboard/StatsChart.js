import React, { Fragment } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from "react-chartjs-2";
import { fakeData } from "../../../resources/fakeData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const StatsChart = () => {
  let mapped = fakeData?.map(el => el?.month?.toString())
  return (
    <Fragment>
      <Line
  datasetIdKey='id'
  data={{
    labels: ['Jun', 'Jul', 'Aug'],
    datasets: [
      {
        id: 1,
        label: '',
        data: [5],
      },
      {
        id: 1,
        label: '',
        data: [,10],
      },
      {
        id: 1,
        label: '',
        data: [,,8],
      },
    ],
  }}
/>
    </Fragment>
  );
};

export default StatsChart;
