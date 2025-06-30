import { FaInfo } from "react-icons/fa";
import Ping from "./Ping";

export default function PingContainer() {
  return (
    <div className="pt-24 sm:p-12 md:p-8 lg:p-12 bg-gray-50 min-h-screen">
      <div className="relative border border-gray-200 bg-white flex flex-col w-full h-full min-h-[400px] rounded-lg shadow mt-10">
        {/* Header Box */}
        <div className="border-b border-gray-200 px-3 py-3">
          <div className="flex flex-wrap gap-2">
            {/* Dropdown - All logs */}
            <div className="flex-grow sm:basis-auto">
              <button
                type="button"
                className="w-full h-10 px-3 py-2 border rounded border-gray-300 text-gray-800 bg-gray-100 hover:bg-gray-200 flex items-center justify-between"
              >
                <span className="flex items-center space-x-2.5 text-sm">All logs</span>
              </button>
            </div>

            {/* Info box */}
            <div className="flex-grow sm:basis-[300px]">
              <div className="w-full h-10 px-3 py-2 border rounded border-blue-300 bg-blue-50 text-blue-800 flex items-center gap-2">
                <FaInfo />
                <span className="text-sm font-medium">Response from server</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ping log content */}
        <div className="flex-1 flex flex-col pt-1 pb-4 overflow-y-auto scroll-auto max-h-[600px]">
          <Ping />
        </div>
      </div>
    </div>
  );
}
