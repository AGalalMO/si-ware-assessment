export const barChartOptions = {
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  responsive: false,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#000000", // X-axis labels.
      },
    },
    y: {
      ticks: {
        color: "#fff", // Y-axis labels.
      },
    },
  },
};
export const pieChartOptions = {
  maintainAspectRatio: false,
  responsive: false,
 
};
export const lineChartOptions = {
  responsive: false,
  scales: {
    y: {
      title: {
        display: true,
        text: " Prices $",
      },
    },
  },
};
