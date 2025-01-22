/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { Stock_Status } from "../../../types/product";
import Select from "../../../ components/common/SelectComponent";
import { filterOptions } from "../types";
import { useSelector } from "react-redux";
import { MainStore } from "../../../types/storeType";

const TableFilters = ({
  runProductsFilter,
}: {
  runProductsFilter: (category: string | null, stock: string | null) => void;
}) => {
  const categories = useSelector(
    (state: MainStore) => state?.mainStore?.categories
  );
  const [filtersValue, setFiltersValue] = useState<filterOptions>({
    category: null,
    stock: null,
    loading: false,
  });

  return (
    <div className='flex flex-col md:flex-row items-start md:items-center flex-1  gap-3'>
      <h5>
        <span className='text-gray-500'>Filter Products </span>
      </h5>
      <div className="flex flex-row gap-3 ">
        <Select
          id='categories'
          defaultText='All Categories'
          options={categories}
          setValue={(value) => {
            runProductsFilter(value, filtersValue?.stock);
            setFiltersValue({
              ...filtersValue,
              category: value ?? null,
              loading: true,
            });
          }}
          value={filtersValue?.category ?? ""}
        />

        <Select
          id='stocks'
          defaultText='All Stocks'
          options={Object.values(Stock_Status)}
          setValue={(value) => {
            runProductsFilter(filtersValue?.category, value);
            setFiltersValue({
              ...filtersValue,
              stock: value,
              loading: true,
            });
          }}
          value={filtersValue?.stock ?? ""}
        />
      </div>
    </div>
  );
};
export default TableFilters;
