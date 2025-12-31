import React from "react";
import { Dialog } from "@headlessui/react";
import { Close } from "@mui/icons-material";
import { products } from "../../data/products";

interface Props {
  invoiceOrderId: number | null;
  setInvoiceOrderId: (v: number | null) => void;
}

const InvoiceModal: React.FC<Props> = ({
  invoiceOrderId,
  setInvoiceOrderId,
}) => {
  return (
    <Dialog
      open={invoiceOrderId !== null}
      onClose={() => setInvoiceOrderId(null)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-xl p-6 max-w-md w-full shadow-lg relative">
          <button
            onClick={() => setInvoiceOrderId(null)}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          >
            <Close />
          </button>

          <Dialog.Title className="text-xl font-semibold mb-3">
            Order Invoice
          </Dialog.Title>

          <p className="text-sm text-gray-600 mb-1">
            Invoice No:{" "}
            <span className="font-medium">
              INV-{String(invoiceOrderId).padStart(5, "0")}
            </span>
          </p>

          <p className="text-sm text-gray-600 mb-4">
            Date: 22 Oct 2025
          </p>

          <div className="border-t border-gray-200 pt-4 text-sm space-y-2">
            <p>
              <span className="font-medium">Product:</span>{" "}
              {products.find((p) => p.id === invoiceOrderId)?.name}
            </p>

            <p>
              <span className="font-medium">Amount:</span> ₹
              {products.find((p) => p.id === invoiceOrderId)?.price}
            </p>

            <p>
              <span className="font-medium">Payment Mode:</span> UPI
            </p>

            <p>
              <span className="font-medium">Status:</span> Paid
            </p>
          </div>

          <div className="mt-5 flex justify-end">
            <button
              onClick={() => setInvoiceOrderId(null)}
              className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700"
            >
              Download PDF
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default InvoiceModal;
