import { Dimension } from "../../../types/dimension";
import { handleValueChangeType } from "../types";
import { EditableText } from "./EditableText";

export default function ProductDimensions({
  dimensions,
  isEditEnabled,
  handleValueChange,
}: {
  dimensions: Dimension;
  isEditEnabled: boolean;
  handleValueChange: handleValueChangeType;
}) {
  return (
    <div className='flex  flex-col gap-2 items-start'>
      <h3 className='font-medium mt-2'>Dimensions :</h3>
      {}
      <EditableText
        editEnabled={isEditEnabled}
        numberInput={true}
        label='Width'
        setValue={(value) => {
          handleValueChange("dimensions", value, "width");
        }}
        value={dimensions?.width}
      />
      <EditableText
        editEnabled={isEditEnabled}
        numberInput={true}
        label='Height'
        setValue={(value) => {
          handleValueChange("dimensions", value, "height");
        }}
        value={dimensions?.height}
      />
      <EditableText
        editEnabled={isEditEnabled}
        numberInput={true}
        label='Depth'
        setValue={(value) => {
          handleValueChange("dimensions", value, "depth");
        }}
        value={dimensions?.depth}
      />
    </div>
  );
}
