function FormInput({ label, ...inputProps }) {
  return (
    <div className="flex flex-col gap-2 w-3/4">
      <label htmlFor={inputProps.id}>{label}</label>
      <input {...inputProps} className="bg-gray-300 py-2 px-2 rounded"/>
    </div>
  );
}

export default FormInput;