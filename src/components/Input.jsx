function Input({ placeholder, onChange, type = "text" , value}) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={value}
        required
      />
    </>
  );
}

export default Input;
