import { useState } from "react";
import Button from "../common/Button";
import Modal from "../common/Modal";
import RegistrationForm from "../common/RegistrationForm";

const TableToolbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (data) => {
    console.log("Submitted Data:", data);
    setIsSubmitted(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
  };
  return (
    <div className="flex items-center justify-end border-b border-gray-200 bg-white px-4 py-3">
      <Button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Register
      </Button>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={isSubmitted ? "Success!" : "Create Account"}
      >
        {isSubmitted ? (
          <div className="space-y-4 text-center">
            <p className="text-lg text-gray-700">
              🎉 Congratulations! Your account has been created successfully.
            </p>
            <Button onClick={handleCloseModal}>Close</Button>
          </div>
        ) : (
          <RegistrationForm
            onSubmit={handleFormSubmit}
            onCancel={handleCloseModal}
          />
        )}
      </Modal>
    </div>
  );
};

export default TableToolbar;
