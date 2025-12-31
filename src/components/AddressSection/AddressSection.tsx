import React, { useState } from "react";
import PrimaryAddress from "./PrimaryAddress";
import SecondaryAddress from "./SecondaryAddress";
import type { Address } from "./types";


const AddressSection: React.FC = () => {
const [primaryAddress, setPrimaryAddress] = useState<Address>({

    fullName: "Rani Rangari",
    phone: "+91 9876543210",
    addressLine1: "123 Main Street",
    addressLine2: "Near City Mall",
    city: "Nagpur",
    state: "Maharashtra",
    pincode: "440001",
  });

  const [secondaryAddress, setSecondaryAddress] = useState<Address>({
    fullName: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [isEditingSecondary, setIsEditingSecondary] = useState(false);

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Manage Addresses
      </h2>
<PrimaryAddress
  primaryAddress={primaryAddress}
  setPrimaryAddress={setPrimaryAddress}
/>


      <SecondaryAddress
        secondaryAddress={secondaryAddress}
        setSecondaryAddress={setSecondaryAddress}
        isEditingSecondary={isEditingSecondary}
        setIsEditingSecondary={setIsEditingSecondary}
      />
    </div>
  );
};

export default AddressSection;
