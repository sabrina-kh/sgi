import React, { Fragment } from 'react'
import {
    Chart as ChartJS,
    defaults
  } from 'chart.js';
  import {
    Chart,
    Line
  } from 'react-chartjs-2';

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'],
    datasets: [
      {
        label: 'N° Clients Cumulés',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [50,100,120,165,210,310,500,601,702,760,800,999],
      },
      {
        label: 'NB° Commandes',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'purple',
        borderColor: 'purple',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'purple',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'purple',
        pointHoverBorderColor: 'purple',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [100,120,200,180,90,400,70,500,600,150,190,700],
      }
    ]
  };

  const lineOptions = {
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
        },
      }],
      yAxes: [{
        // stacked: true,
        gridLines: {
          display: false,
        },
        ticks: {
          beginAtZero: true,
          // Return an empty string to draw the tick line but hide the tick label
          // Return `null` or `undefined` to hide the tick line entirely
          userCallback(value) {
            // Convert the number to a string and splite the string every 3 charaters from the end
            value = value.toString();
            value = value.split(/(?=(?:...)*$)/);
  
            // Convert the array to a string and format the output
            value = value.join('.');
            return `Rp.${value}`;
          },
        },
      }],
    },
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
  };
  
  
  const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    //margin: '-10%'
  };

const GraphAdmin = () => {
  return (
    <Fragment>
<Line
style={{ backgroundColor:"white" }}
  datasetIdKey='id'
  data={data}
  options={lineOptions}
/>
    </Fragment>
  )
}

export default GraphAdmin