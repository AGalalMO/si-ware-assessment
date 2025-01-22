import { MainStore } from "../../types/storeType";
import { useProductsTable } from "./hooks/useProductsTable";
import TableFilters from "./components/FilterComponent";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import TableHead from "./components/TableHead";
import TableText from "./components/TableText";
import StockStatusCircle from "../../ components/common/stockColorCircle";

const ProductTable = () => {
  const navigate = useNavigate();

  const products = useSelector(
    (state: MainStore) => state?.mainStore?.products
  );
  const { productsToView, sortTableData, sortOptions, runProductsFilter } =
    useProductsTable();
  return (
    <>
      <div className='flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4'>
        <TableFilters
          runProductsFilter={(category, stock) => {
            runProductsFilter(products, category ?? null, stock ?? null);
          }}
        />
      </div>
      <div className='overflow-x-auto flex gap-1'>
        <table className='w-full text-sm text-left text-gray-500 '>
          <TableHead sortOptions={sortOptions} sortTableData={sortTableData} />
          <tbody>
            {productsToView?.map((product, index) => (
              <tr
                key={`${index}_${product?.id}`}
                onClick={() => {
                  navigate(`/products/${index + 1}`);
                }}
                className='border-b hover:bg-gray-100 cursor-pointer '>
                <td className='px-4 py-2 min-w-8'>
                  <img
                    src={"https://placehold.co/32x32/png"}
                    alt={product?.name}
                    onError={(
                      event: React.SyntheticEvent<HTMLImageElement, Event>
                    ) => {
                      (event.target as HTMLImageElement).src =
                        "https://placehold.co/32x32/png";
                    }}
                    className='w-auto h-8  min-w-8'
                  />
                </td>
                <TableText text={product?.name} />
                <TableText text={product?.category} />
                <td className='px-4 py-2 font-medium text-gray-900 whitespace-nowrap '>
                  <div className='flex items-center'>
                    <StockStatusCircle stockStatus={product?.stockStatus} />
                  </div>
                </td>
                <TableText text={product?.price} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ProductTable;
