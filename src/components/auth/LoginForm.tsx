import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { usePasswordToggle } from "./hooks/usePasswordToggle";



export default function LoginForm() {
const { type, visible, toggle } = usePasswordToggle();

  return (
    <form className="space-y-4">
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
      type={type}
      placeholder="••••••••"
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none pr-10"
      required
    />

    <button
      type="button"
        className="absolute inset-y-0 right-3 flex items-center text-gray-500 z-10 "
      onClick={toggle}
    >
      {visible ? <FiEyeOff size={18} /> : <FiEye size={18} />}
    </button>
  </div>
</div>


      {/* Remember + Forgot */}
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-gray-600">
          <input type="checkbox" className="rounded text-green-600" />
          Remember me
        </label>

        <button
          type="button"
          className="text-green-600 hover:underline font-medium"
        >
          Forgot password?
        </button>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2.5 rounded-lg font-medium hover:bg-green-700 transition"
      >
        Login
      </button>

      {/* Divider */}
      <div className="flex items-center my-4">
        <hr className="flex-1 border-gray-200" />
        <span className="mx-2 text-sm text-gray-500">or continue with</span>
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
