import { Dialog, DialogPanel } from "@headlessui/react";

export default function Modal({ isOpen, onClose, title, children }) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        aria-hidden="true"
      />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-6 shadow-2xl">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">{title}</h2>
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
}
