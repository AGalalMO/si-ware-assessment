import { LoadingSpinner } from "../../../assets/loading";

export default function EditControls({
  isEditEnabled,
  loading,
  handleSave,
  handleCancel,
  handleEdit,
}: {
  isEditEnabled: boolean;
  loading: boolean;
  handleSave: () => Promise<void>;
  handleCancel: () => void;
  handleEdit: () => void;
}) {
  return (
    <div className='w-full md:w-auto'>
      {isEditEnabled ? (
        <div className='flex  flex-col md:flex-row gap-2 justify-around mt-4'>
          <button
            className='bg-green-600 text-white '
            disabled={loading}
            onClick={handleSave}>
            {loading ? <LoadingSpinner /> : "Save "}
          </button>
          <button
            disabled={loading}
            className='bg-red-600 text-white'
            onClick={handleCancel}>
            Cancel
          </button>
        </div>
      ) : (
        <button
          className='bg-orange-600 text-white w-full md:w-auto'
          onClick={handleEdit}>
          Edit
        </button>
      )}
    </div>
  );
}
