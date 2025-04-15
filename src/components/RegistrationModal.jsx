import { useState } from "react";
import Button from "./common/Button";
import InputField from "./common/InputField";
import { formSubmitHandler } from "../utils/formSubmitHandler";
import { useNavigate } from "react-router";

function RegistrationModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleModalClickPropagation = (e) => {
    e.stopPropagation();
  };

  const formSubmit = (e) => {
    formSubmitHandler(e, email, password, navigate);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
    >
      <div
        onClick={handleModalClickPropagation}
        className="xs:w-[40%] rounded-lg bg-white p-8 shadow-lg lg:w-[920px] lg:max-w-[920px]"
      >
        <div className="mb-6 text-start text-[#333333]">
          <h2 className="text-[26px] font-[700]">Create Your Account</h2>
          <p className="text-[18px] font-[400]">
            Enter the following information
          </p>
        </div>

        <form onSubmit={formSubmit} className="flex flex-col">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <InputField
                type="text"
                placeholder="Name"
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                }
              />

              <InputField
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
            </div>

            <div className="flex flex-col gap-4">
              <InputField
                type="tel"
                placeholder="Phone Number"
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                }
              />

              <InputField
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
            </div>
          </div>

          <Button
            type="submit"
            className="m-auto mt-[30px] w-[250px] rounded-[30px] py-3 text-white hover:bg-[#2264e5] lg:w-[400px]"
          >
            Create Account
          </Button>

          <div className="mt-3 text-center text-sm text-[#687182]">
            You have an account{" "}
            <button
              onClick={onClose}
              className="cursor-pointer text-[#2264e5] underline underline-offset-3"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationModal;
