import Button from "./common/Button";

function LoginForm({ onRegisterClick }) {
  return (
    <div className="flex w-full flex-col justify-start rounded-lg p-8 shadow-lg">
      <div className="text-textColor mb-8 flex flex-col gap-2 tracking-[0%]">
        <h2 className="text-[26px] leading-[100%] font-bold">Hello Again!</h2>
        <p className="text-[18px] leading-[100%] font-normal">Welcome Back</p>
      </div>

      <div className="flex flex-col gap-2">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-textColor absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform opacity-80"
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
            className="text-textColor w-full rounded-md border border-[#FFFFFF] py-3 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-[#2264e5] focus:outline-none"
          />
        </div>

        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-textColor absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform opacity-80"
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
            className="text-textColor w-full rounded-md border border-[#FFFFFF] py-3 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-[#2264e5] focus:outline-none"
          />
        </div>

        <Button
          className={
            "hover:bg-primary w-full rounded-[30px] bg-[#2264e5] py-3 text-[14px] text-white"
          }
        >
          Login
        </Button>

        <div className="text-textColor text-center text-sm opacity-80">
          Don't have an account?{" "}
          <button
            onClick={onRegisterClick}
            className="text-primary cursor-pointer underline"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
