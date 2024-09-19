
const CheckBox = ({ id, label, checked, register, required }) => {
  return (
    <div className="flex items-center mb-4">
      <input
        checked={checked}
        id={id}
        {...register(id, { required })}
        type="checkbox"
        value=""
        className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 p-1"
        
      />
      <label htmlFor={id} className="ms-2 text-md font-normal text-gray-600">
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
