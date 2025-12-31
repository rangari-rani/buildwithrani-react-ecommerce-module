import React from "react";
import { Dialog } from "@headlessui/react";
import { Close } from "@mui/icons-material";

interface Props {
  trackingOrderId: number | null;
  setTrackingOrderId: (v: number | null) => void;
}

const TrackingModal: React.FC<Props> = ({
  trackingOrderId,
  setTrackingOrderId,
}) => {
  return (
    <Dialog
      open={trackingOrderId !== null}
      onClose={() => setTrackingOrderId(null)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-xl p-6 max-w-md w-full shadow-lg relative">
          <button
            onClick={() => setTrackingOrderId(null)}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          >
            <Close />
          </button>

          <Dialog.Title className="text-xl font-semibold mb-2">
            Track Item
          </Dialog.Title>

          <p className="text-gray-600 text-sm mb-4">
            Tracking No:{" "}
            <span className="font-medium">
              WC{String(trackingOrderId).padStart(5, "0")}
            </span>
          </p>

          <div className="space-y-3 text-sm">
            <div>
              <p className="font-medium text-green-600">Arriving</p>
              <p>by Wed, 22 Oct</p>
            </div>

            <div>
              <p className="font-medium text-blue-600">Shipped</p>
              <p>on Sun, 19 Oct — 02:36 a.m</p>
              <p className="text-gray-500">
                Item shipped to nearest delivery center
              </p>
            </div>

            <div>
              <p className="font-medium text-gray-800">
                Saturday, 18 Oct
              </p>
              <p className="text-gray-500">
                10:28 a.m — Item Packed in Dispatch Warehouse
              </p>
            </div>

            <div>
              <p className="font-medium text-gray-800">Order Placed</p>
              <p>on Sat, 18 Oct</p>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default TrackingModal;
