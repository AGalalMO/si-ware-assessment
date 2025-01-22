import { EditableText } from "./EditableText";
import Select from "../../../ components/common/SelectComponent";
import StockStatusCircle from "../../../ components/common/stockColorCircle";
import { Product, Stock_Status } from "../../../types/product";
import { handleValueChangeType } from "../types";

export const ProductInfo = ({
  isEditEnabled,
  handleValueChange,
  mutableProduct,
}: {
  isEditEnabled: boolean;
  handleValueChange: handleValueChangeType;
  mutableProduct: Product;
}) => {
  return (
    <div className={`flex flex-col gap-2 items-start`}>
      <h2 className=' font-medium mb-2'>Product Info</h2>
      <EditableText
        editEnabled={isEditEnabled}
        label='Name'
        setValue={(value) => {
          handleValueChange("name", value);
        }}
        value={mutableProduct?.name}
      />
      <EditableText
        editEnabled={isEditEnabled}
        label='Category'
        setValue={(value) => {
          handleValueChange("category", value);
        }}
        value={mutableProduct?.category}
      />
      <div className='flex gap-2 items-center'>
        <h3>Stock Status :</h3>
        {isEditEnabled ? (
          <Select
            noMargin={true}
            defaultText='Stock'
            id='stocks'
            options={Object.values(Stock_Status)}
            setValue={(value) => {
              handleValueChange("stockStatus", value);
            }}
            value={mutableProduct?.stockStatus}
          />
        ) : (
          <>
            <p>{mutableProduct?.stockStatus} </p>
            <StockStatusCircle stockStatus={mutableProduct?.stockStatus} />
          </>
        )}
      </div>
    </div>
  );
};
