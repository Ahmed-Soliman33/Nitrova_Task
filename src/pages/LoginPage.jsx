import { useState } from "react";
import RegistrationModal from "../components/RegistrationModal";
import LoginForm from "../components/LoginForm";
import logo from "../assets/login_logo.png";
import Button from "../components/common/Button";

const LoginPage = () => {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  const closeModalHandler = (e) => {
    setShowRegistrationModal(false);
  };

  return (
    <>
      <div className="flex w-full flex-col items-center justify-between overflow-hidden lg:flex-row">
        <div className="from-primary relative h-[400px] w-full grow bg-gradient-to-b via-[#02298A] to-[#021B79] lg:h-screen lg:max-w-[860px]">
          <div className="absolute top-1/2 left-1/2 flex h-[296px] w-[90%] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[23px] sm:w-[471px] lg:items-start">
            <img
              className="h-[150px] w-[200px] lg:h-[196px] lg:w-[319px]"
              src={logo}
            />
            <p className="px-4 text-[16px] leading-[100%] font-[500] text-white lg:text-[18px]">
              You will find comprehensive software solutions with us
            </p>
            <Button className="h-[33px] w-[132px] gap-[10px] rounded-[30px] px-[30px] py-[8px] text-[14px] leading-[100%]">
              Read More
            </Button>
          </div>

          <div className="border-primary absolute top-[570px] left-[-207px] hidden h-[557px] w-[557px] rounded-full border lg:block xl:top-[580px]"></div>
          <div className="border-primary absolute top-[570px] left-[-126px] hidden h-[557px] w-[557px] rounded-full border lg:block xl:top-[606px]"></div>
        </div>

        <div className="w-full bg-white px-4 py-8 lg:relative lg:h-screen lg:w-[540px]">
          <LoginForm
            onRegisterClick={(e) => {
              e.stopPropagation();
              setShowRegistrationModal(true);
            }}
          />
        </div>
      </div>

      {/* Modal */}
      {showRegistrationModal && (
        <RegistrationModal onClose={(e) => closeModalHandler(e)} />
      )}
    </>
  );
};

export default LoginPage;
