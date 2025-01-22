export default function Select({
  value,
  defaultText,
  setValue,
  options,
  id,
  noMargin,
}: {
  value: string;
  defaultText: string;
  setValue: (value: string) => void;
  options: string[];
  id: string;
  noMargin?: boolean;
}) {
  return (
    <div className={`${noMargin ? "" : "max-w-sm mx-auto"}`}>
      <select
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        id={id}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '>
        <option key={`${id}`} value={""}>
          {defaultText}
        </option>
        {options?.map((item, index) => (
          <option key={`${id}_${index}`} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
