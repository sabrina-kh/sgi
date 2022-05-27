import React, { Fragment } from "react";
import { Line } from "react-chartjs-2";
import { fakeData } from "../../../resources/fakeData";

const StatsChart = () => {
  return (
    <Fragment>
      <Line
        datasetIdKey="id"
        data={{
          labels: fakeData.map(el => el?.month),
          datasets: fakeData,
        }}
      />
    </Fragment>
  );
};

export default StatsChart;
