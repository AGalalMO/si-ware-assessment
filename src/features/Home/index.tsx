import StocksPieChart from "../../features/Home/components/PieChart";
import ProductPriceTrendsChart from "../../features/Home/components/LineChart";
import CategoriesBarChart from "../../features/Home/components/BarChart";
import { useHome } from "./hooks/useHome";
import { useProducts } from "../../hooks/useProducts";

const Home = () => {
  useProducts();
  const { dashboardAnalytics } = useHome();
  return (
    <div className='w-full p-6 bg-gray-50 flex-wrap  gap-3'>
      <div className='flex flex-col md:flex-row gap-3 items-start'>
        <CategoriesBarChart data={dashboardAnalytics.category} />
        <StocksPieChart stocksData={dashboardAnalytics.stocks} />
      </div>
      <ProductPriceTrendsChart data={dashboardAnalytics.prices} />
    </div>
  );
};
export default Home;
