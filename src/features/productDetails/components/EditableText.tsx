import { useState } from "react";

export const EditableText = ({
  editEnabled,
  value,
  setValue,
  label,
  numberInput,
}: {
  editEnabled: boolean;
  value: string | number;
  setValue: (value: string | number) => void;
  label: string;
  numberInput?: boolean;
}) => {
  const [error, setError] = useState(false);
  return (
    <div className='flex gap-2 items-center h-12 '>
      <h3 className="font-medium">{label} : </h3>
      {editEnabled ? (
        <input
          required={true}
          min={numberInput ? 4 : undefined}
          type={numberInput ? "number" : "text"}
          className={` px-1 border-[1px]  ${
            error ? "border-red-700" : "border-gray-700"
          }  rounded-[6px] ${
            numberInput ? " w-20 text-center" : "w-full  md:w-auto md:min-w-[350px]"
          } min-h-10 `}
          value={value}
          onChange={(event) => {
            if (!event?.target?.value) setError(true);
            setValue(event.target.value);
          }}
        />
      ) : (
        <p>{value}</p>
      )}
    </div>
  );
};
