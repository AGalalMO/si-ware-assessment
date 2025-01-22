import { Stock_Status } from "../../types/product";

export default function StockStatusCircle({ stockStatus }: { stockStatus :Stock_Status}) {
  return (
    <div
      className={`inline-block w-4 h-4 mr-2 ${
        stockStatus == Stock_Status.OUT_OF_STOCK
          ? "bg-red-700"
          : stockStatus == Stock_Status.LIMITED
          ? "bg-yellow-500"
          : "bg-green-500"
      } rounded-full`}></div>
  );
}
