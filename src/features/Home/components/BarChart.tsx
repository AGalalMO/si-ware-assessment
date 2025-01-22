import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { ChartDataType } from "../types";
import { barChartOptions } from "../utils/chartsOptions";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const CategoriesBarChart = ({ data }: { data: ChartDataType }) => {
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: "Category",
        data: Object.values(data),
        barThickness: window?.innerWidth < 768 ? 25 : 50,
        borderColor: "#6b92bf",
        backgroundColor: "#04204d",
        color: "#ffffff",
      },
    ],
  };

  return (
    <div className='flex px-2 pt-2  shadow-md bg-white flex-col gap-3 items-center flex-1 w-full  md:min-h-[500px]'>
      <h2 className='text-xl'>Products count by Category</h2>
      <div className='  w-fit px-8 py-4'>
        <Bar
          width={window?.innerWidth < 768 ? 200 : 600}
          height={window?.innerWidth < 768 ? 200 : 400}
          options={barChartOptions}
          data={chartData}
        />
      </div>
    </div>
  );
};
export default CategoriesBarChart;
