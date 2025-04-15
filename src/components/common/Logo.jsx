function Logo({ className }) {
  return (
    <div className={`flex items-center ${className || ""}`}>
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16"
      >
        <path
          d="M40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M28.5 20C25.4624 20 23 22.4624 23 25.5V54.5C23 57.5376 25.4624 60 28.5 60H51.5C54.5376 60 57 57.5376 57 54.5V25.5C57 22.4624 54.5376 20 51.5 20H28.5Z"
          fill="white"
          fillOpacity="0.2"
        />
        <path
          d="M40 30C36.134 30 33 33.134 33 37V43C33 46.866 36.134 50 40 50C43.866 50 47 46.866 47 43V37C47 33.134 43.866 30 40 30Z"
          fill="white"
          fillOpacity="0.2"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="0"
            y1="0"
            x2="80"
            y2="80"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0575E6" />
            <stop offset="1" stopColor="#4F5AED" />
          </linearGradient>
        </defs>
      </svg>
      <div className="text-primary text-2xl font-bold">
        UPNA<span className="text-[#4f5aed]">8</span>
      </div>
    </div>
  );
}

export default Logo;
