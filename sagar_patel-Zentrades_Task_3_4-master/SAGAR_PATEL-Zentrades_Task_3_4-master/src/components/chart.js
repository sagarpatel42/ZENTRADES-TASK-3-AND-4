import React, { useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto'

const Charts = ({ labels, dataset, title, color, xaxis }) => {
  const chartRef = useRef(null);
  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const newChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: title,
            data: dataset,
            backgroundColor: [color], // Specify colors for each bar
            borderColor: "black",
            borderWidth: 1,
          },
        ],
      },
      options: {
        indexAxis: "y",
        scales: {
          x: {
            type: "linear",
            beginAtZero: true,
            title: {
              display: true,
              text: xaxis, // Add a label for the x-axis
            },
          },
        },
      },
    });

    // Clean up the chart when the component is unmounted
    return () => {
      newChart.destroy();
      // localStorage.removeItem("zentrades")
    };
  }, []);

  //   return <Bar data={data} options={options} />;
  return <canvas ref={chartRef}  style={{ backgroundColor: 'white' }}/>;
};

export default Charts;
