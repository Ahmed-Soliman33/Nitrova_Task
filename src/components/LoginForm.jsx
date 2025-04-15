import Logo from "./Logo";

function LoginForm({ onRegisterClick }) {
  return (
    <div className="w-full rounded-lg bg-white p-8 shadow-lg">
      <div className="mb-8 flex flex-col items-center">
        <Logo className="mb-6" />
        <h2 className="mb-1 text-2xl font-semibold text-[#171c26]">
          Hello Again!
        </h2>
        <p className="text-[#687182]">Welcome Back</p>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-[#687182]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-md border border-[#e9edf5] py-3 pr-4 pl-10 text-[#687182] focus:border-transparent focus:ring-2 focus:ring-[#2264e5] focus:outline-none"
          />
        </div>

        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-[#687182]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-md border border-[#e9edf5] py-3 pr-4 pl-10 text-[#687182] focus:border-transparent focus:ring-2 focus:ring-[#2264e5] focus:outline-none"
          />
        </div>

        <button className="w-full rounded-md bg-[#2264e5] py-3 text-white hover:bg-[#0575e6]">
          Login
        </button>

        <div className="text-center text-sm text-[#687182]">
          Don't have an account?{" "}
          <button
            onClick={onRegisterClick}
            className="text-[#2264e5] hover:underline"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
