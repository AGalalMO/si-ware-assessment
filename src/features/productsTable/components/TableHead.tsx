import { LoadingSpinner } from "../../../assets/loading";
import { sortOptions } from "../types";

export default function TableHead({
  sortOptions,
  sortTableData,
}: {
  sortOptions: sortOptions;
  sortTableData: (key: string) => void;
  }) {
  return (
    <thead className='text-xs text-gray-700 uppercase bg-gray-50 '>
      <tr>
        <th scope='col' className='px-4 py-3 min-w-8'>
          Product
        </th>
        <th scope='col' className='px-4 py-3 '>
          {sortOptions.loading ? (
            <LoadingSpinner />
          ) : (
            <button
              className='flex gap-1 outline-none '
              onClick={() => {
                sortTableData("name");
              }}>
              Product Name
              <img
                src='/src/assets/sort.png'
                width={"16"}
                height={"16"}
                alt='sort icon'
                className='w-4 h-4'
              />
            </button>
          )}
        </th>
        <th scope='col' className='px-4 py-3'>
          Category
        </th>
        <th scope='col' className='px-4 py-3'>
          Stock
        </th>
        <th scope='col' className='px-4 py-3 '>
          {sortOptions.loading ? (
            <LoadingSpinner />
          ) : (
            <button
              className='flex gap-1 outline-none '
              onClick={() => {
                sortTableData("price");
              }}>
              Price
              <img
                src='/src/assets/sort.png'
                width={"16"}
                height={"16"}
                alt='sort icon'
                className='w-4 h-4'
              />
            </button>
          )}
        </th>
      </tr>
    </thead>
  );
}
