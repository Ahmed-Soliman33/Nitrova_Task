import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "./common/Button";
import InputField from "./common/InputField";
import { formSubmitHandler } from "../utils/formSubmitHandler";

function LoginForm({ onRegisterClick }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmit = (e) => {
    formSubmitHandler(e, email, password, navigate);
  };

  return (
    <div className="m-auto flex w-[400px] flex-col justify-start rounded-lg shadow-lg">
      <div className="text-textColor mb-8 flex flex-col gap-2 tracking-[0%]">
        <h2 className="text-[26px] leading-[100%] font-bold">Hello Again!</h2>
        <p className="text-[18px] leading-[100%] font-normal">Welcome Back</p>
      </div>

      <form onSubmit={formSubmit} className="flex flex-col gap-2">
        <InputField
          name="email"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          }
        />

        <InputField
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          }
        />

        <Button
          type="submit"
          className="bg-primary w-full rounded-[30px] py-3 text-[14px] text-white transition-all hover:bg-[#2264e5]"
        >
          Login
        </Button>
      </form>

      <div className="text-textColor mt-5 text-center text-sm opacity-80">
        Don't have an account?{" "}
        <button
          onClick={onRegisterClick}
          className="text-primary cursor-pointer underline underline-offset-3"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
