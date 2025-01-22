export default function TableText({ text }: { text: string | number }) {
  return (
    <td className='px-4 py-2'>
      <span className='bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded '>
        {text}
      </span>
    </td>
  );
}
