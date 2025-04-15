function RegistrationModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-semibold text-[#171c26]">
            Create Your Account
          </h2>
          <p className="text-sm text-[#687182]">
            Enter the following information
          </p>
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <input
              type="text"
              placeholder="Name"
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
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <input
              type="tel"
              placeholder="Phone Number"
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

          <button className="hover:bg-primary w-full rounded-md bg-[#2264e5] py-3 text-white">
            Create Account
          </button>

          <div className="text-center text-sm text-[#687182]">
            You have an account?{" "}
            <button
              onClick={onClose}
              className="text-[#2264e5] hover:underline"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationModal;
