
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { usePasswordToggle } from "./hooks/usePasswordToggle";


export default function SignupForm() {

const password = usePasswordToggle();
const confirmPassword = usePasswordToggle();

  return (
    <form className="space-y-4">
      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          placeholder="John Doe"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          required
        />
      </div>

   {/* Password */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Password
  </label>
  <div className="relative">
    <input
      type={password.type}
      placeholder="••••••••"
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none pr-10"
      required
    />

    <button
      type="button"
       className="absolute inset-y-0 right-3 flex items-center text-gray-500 z-10 "
      onClick={password.toggle}
    >
      {password.visible ? <FiEyeOff size={18} /> : <FiEye size={18} />}
    </button>
  </div>
</div>

{/* Confirm Password */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Confirm Password
  </label>
  <div className="relative">
    <input
      type={confirmPassword.type}
      placeholder="••••••••"
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none pr-10"
      required
    />

    <button
      type="button"
     className="absolute inset-y-0 right-3 flex items-center text-gray-500 z-10 "
      onClick={confirmPassword.toggle}
    >
      {confirmPassword.visible ? <FiEyeOff size={18} /> : <FiEye size={18} />}
    </button>
  </div>
</div>


      {/* Terms */}
      <div className="text-sm text-gray-600">
        By signing up, you agree to our{" "}
        <span className="text-green-600 hover:underline cursor-pointer">
          Terms of Service
        </span>{" "}
        and{" "}
        <span className="text-green-600 hover:underline cursor-pointer">
          Privacy Policy
        </span>.
      </div>

      {/* Submit */}
      <button
     
        type="submit"
        className="w-full bg-green-600 text-white py-2.5 rounded-lg font-medium hover:bg-green-700 transition"
      >
        Create Account
      </button>

      {/* Divider */}
      <div className="flex items-center my-4">
        <hr className="flex-1 border-gray-200" />
        <span className="mx-2 text-sm text-gray-500">or sign up with</span>
        <hr className="flex-1 border-gray-200" />
      </div>

      {/* Social Buttons */}
      <div className="flex gap-3">
        <button
          type="button"
          className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition"
        >
          <FcGoogle size={20} />
          <span className="text-sm font-medium text-gray-700">Google</span>
        </button>

        <button
          type="button"
          className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition"
        >
          <FaGithub size={20} className="text-gray-800" />
          <span className="text-sm font-medium text-gray-700">GitHub</span>
        </button>
      </div>
    </form>
  );
}
