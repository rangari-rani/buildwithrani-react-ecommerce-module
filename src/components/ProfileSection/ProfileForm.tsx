interface Profile {
  name: string;
  email: string;
  phone: string;
  altPhone: string;
  gender: string;
  birthday: string;
}

interface Props {
  profile: Profile;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ProfileForm: React.FC<Props> = ({
  profile,
  onChange,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={onChange}
            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={profile.email}
            disabled
            className="w-full border border-gray-300 rounded-lg p-2.5 bg-gray-100 text-gray-600 cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Mobile Number
          </label>
          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={onChange}
            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Alternate Mobile
          </label>
          <input
            type="text"
            name="altPhone"
            value={profile.altPhone}
            onChange={onChange}
            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Gender
          </label>
          <select
            name="gender"
            value={profile.gender}
            onChange={onChange}
            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Birthday
          </label>
          <input
            type="date"
            name="birthday"
            value={profile.birthday}
            onChange={onChange}
            className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
