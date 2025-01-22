import { LoadingSpinner } from "../../assets/loading";
import { Product } from "../../types/product";
import React from "react";
import { EditableText } from "./components/EditableText";
import { ProductInfo } from "./components/ProductInfo";
import ProductDescription from "./components/ProductDescription";
import ProductDimensions from "./components/ProductDimensions";
import EditControls from "./components/EditControls";
import { useProductDetails } from "./hooks/useProductDetails";

const ProductDetail = ({ product }: { product: Product }) => {
  const {
    mutableProduct,
    loading,
    isEditEnabled,
    handleValueChange,
    handleEditClick,
    handleSaveClick,
    handleCancelClick,
  } = useProductDetails(product);
  return (
    <div className='w-full flex items-center justify-center'>
      {!product ? (
        <LoadingSpinner />
      ) : (
        <div className='flex flex-col md:flex-row justify-between items-start shadow-lg  h-full px-2 md:px-8 py-2 md:py-4 w-[95%]'>
          <div className='flex flex-col md:flex-row  gap-8 items-center md:items-start'>
            <img
              width={400}
              height={400}
              onError={(
                event: React.SyntheticEvent<HTMLImageElement, Event>
              ) => {
                (event.target as HTMLImageElement).src =
                  "https://placehold.co/400x400/png";
              }}
              src={product?.image}
            />
            <div className={`flex flex-col gap-2 items-start`}>
              <ProductInfo
                mutableProduct={mutableProduct}
                handleValueChange={handleValueChange}
                isEditEnabled={isEditEnabled}
              />
              <ProductDescription
                description={mutableProduct?.description}
                handleValueChange={handleValueChange}
                isEditEnabled={isEditEnabled}
              />
              <ProductDimensions
                dimensions={mutableProduct?.dimensions}
                handleValueChange={handleValueChange}
                isEditEnabled={isEditEnabled}
              />

              <EditableText
                editEnabled={isEditEnabled}
                label='SKU'
                setValue={(value) => {
                  handleValueChange("sku", value);
                }}
                value={mutableProduct?.sku}
              />
              <EditableText
                editEnabled={isEditEnabled}
                numberInput={true}
                label='Price'
                setValue={(value) => {
                  handleValueChange("price", value);
                }}
                value={mutableProduct?.price}
              />
            </div>
          </div>
          <EditControls
            handleCancel={handleCancelClick}
            handleEdit={handleEditClick}
            handleSave={handleSaveClick}
            loading={loading}
            isEditEnabled={isEditEnabled}
          />
        </div>
      )}
    </div>
  );
};
export default ProductDetail;
