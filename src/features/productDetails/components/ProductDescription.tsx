import { handleValueChangeType } from "../types";

export default function ProductDescription({
  isEditEnabled,
  description,
  handleValueChange,
}: {
  isEditEnabled: boolean;
  description: string;
  handleValueChange: handleValueChangeType;
}) {
  return (
    <div className='flex  flex-col gap-3 items-start'>
      <h2 className=' font-medium mt-2'>Description :</h2>
      {isEditEnabled ? (
        <textarea
          value={description}
          className='outline-blue-700 p-1 border-[1px] border-blue-700 rounded-md sm:w-full md:min-w-[400px] resize-none'
          rows={3}
          onChange={(event) => {
            handleValueChange("description", event?.target?.value);
          }}
        />
      ) : (
        <p>{description} </p>
      )}
    </div>
  );
}
