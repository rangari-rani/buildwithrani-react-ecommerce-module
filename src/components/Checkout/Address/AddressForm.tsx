import AddressTypeSelector from "./AddressTypeSelector";

const AddressForm = ({
  form,
  handleChange,
  handleTextareaChange,
}: any) => {
  return (
    <div className="flex-1 bg-white p-6 rounded-xl shadow-sm">
      <h1 className="text-2xl font-bold mb-6">Shipping Address</h1>

      <div className="flex flex-col gap-4">
        {/* Name */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={form.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            placeholder="Enter phone number"
            value={form.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* Street */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Street Address
          </label>
          <textarea
            name="street"
            placeholder="Enter street address"
            value={form.street}
            onChange={handleTextareaChange}
            className="border border-gray-300 rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-green-600 h-20"
          />
        </div>

        {/* City / State / Pincode */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex-1 flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div className="flex-1 flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              State
            </label>
            <input
              type="text"
              name="state"
              placeholder="State"
              value={form.state}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div className="flex-1 flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Pincode
            </label>
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={form.pincode}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
        </div>

        {/* Address Type */}
        <AddressTypeSelector
          value={form.addressType}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default AddressForm;
