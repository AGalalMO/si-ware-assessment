import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
} from "chart.js";
import { LineChartDataType } from "../types";
import { lineChartOptions } from "../utils/chartsOptions";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip
);

const ProductPriceTrendsChart = ({ data }: { data: LineChartDataType }) => {
  const chartData = {
    labels: new Array(Object?.keys(data)?.length)?.fill(""), // Categories (X-axis)
    datasets: Object.values(data)?.map((item, index) => {
      return {
        label: Object?.keys(data)?.[index],
        data: item,
        fill: false,
        borderColor: `rgba(${Math.floor(Math.random() * 56) + 200},${
          Math.floor(Math.random() * 56) + 200
        },${Math.floor(Math.random() * 56) + 210},1)`, // Line color
        tension: 0.2,
      };
    }),
  };

  return (
    <div className='flex shadow-md   w-full flex-col gap-3 items-center mt-6 bg-white '>
      <h2 className='text-xl pt-2'>Stocks Analytics</h2>
      <Line
        width={window?.innerWidth < 768 ? 200 : 850}
        height={window?.innerWidth < 768 ? 200 : 450}
        data={chartData}
        options={lineChartOptions}
      />
    </div>
  );
};

export default ProductPriceTrendsChart;
