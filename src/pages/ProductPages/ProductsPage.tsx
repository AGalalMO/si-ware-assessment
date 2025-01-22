import ProductTable from "../../features/productsTable";
import { useProducts } from "../../hooks/useProducts";

const ProductListPage = () => {
  useProducts();

  return (
    <section className='bg-gray-50  py-3 sm:py-5'>
      <div className='px-4 mx-auto lg:px-12'>
        <div className='relative overflow-hidden bg-white shadow-md  sm:rounded-lg'>
          <ProductTable />
          <nav
            className='flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0'
            aria-label='Table navigation'></nav>
        </div>
      </div>
    </section>
  );
};
export default ProductListPage;
