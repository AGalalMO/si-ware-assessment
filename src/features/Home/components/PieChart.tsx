import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { useMemo } from "react";
import { ChartDataType } from "../types";
import { pieChartOptions } from "../utils/chartsOptions";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const StocksPieChart = ({ stocksData }: { stocksData: ChartDataType }) => {
  const dataValues = useMemo(
    () => Object.values(stocksData ?? {}),
    [stocksData]
  );
  const labels = useMemo(() => Object.keys(stocksData ?? {}), [stocksData]);
  const chartColors = ["#3483cA", "#04204d", "#6b92bf"];
  const data = {
    labels,
    datasets: [
      {
        label: "Products Stock Distribution",
        data: dataValues,
        backgroundColor: chartColors,
        borderColor: chartColors,
        borderWidth: 1,
      },
    ],
  };

  console.log("stocksData", stocksData);
  return (
    <div className='gap-3 shadow-md  w-full  pt-2 pb-2 md:pb-0 px-2 bg-white flex flex-col items-center justify-start flex-1  md:min-h-[500px]'>
      <h2 className='text-xl'>Products Stock</h2>
      <Pie
        width={window?.innerWidth < 768 ? 200 : 400}
        height={window?.innerWidth < 768 ? 200 : 400}
        data={data}
        options={pieChartOptions}
      />
    </div>
  );
};

export default StocksPieChart;
