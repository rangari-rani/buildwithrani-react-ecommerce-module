const AddressTypeSelector = ({ value, onChange }: any) => {
  return (
    <div className="flex items-center gap-6 mt-2">
      <label className="flex items-center gap-2">
        <input
          type="radio"
          name="addressType"
          value="Home"
          checked={value === "Home"}
          onChange={onChange}
          className="accent-green-600"
        />
        Home
      </label>

      <label className="flex items-center gap-2">
        <input
          type="radio"
          name="addressType"
          value="Work"
          checked={value === "Work"}
          onChange={onChange}
          className="accent-green-600"
        />
        Work
      </label>
    </div>
  );
};

export default AddressTypeSelector;
