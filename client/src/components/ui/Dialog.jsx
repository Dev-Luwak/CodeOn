import { Fragment } from "react";
import { Dialog as HDialog, Transition } from "@headlessui/react";

export function Dialog({ open, onClose, title, children }) {
  return (
    <Transition show={open} as={Fragment}>
      <HDialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100"
          leave="ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
              leave="ease-in duration-150" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
            >
              <HDialog.Panel className="w-full max-w-lg border-gradient rounded-2xl">
                <div className="rounded-2xl bg-[#18181B] p-6">
                  {title && <HDialog.Title className="text-lg font-semibold">{title}</HDialog.Title>}
                  <div className="mt-3">{children}</div>
                </div>
              </HDialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </HDialog>
    </Transition>
  );
}
