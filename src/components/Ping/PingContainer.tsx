import { useState } from "react";
import { FaInfo } from "react-icons/fa";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Ping from "./Ping";
import axios from "axios";

export default function PingContainer() {
  const [filteredLogs, setFilteredLogs] = useState<any[] | undefined>(
    undefined
  );
  const [customParam, setCustomParam] = useState("");
  return (
    <div className="pt-24 sm:p-12 md:p-8 lg:p-12 bg-gray-50 min-h-screen">
      <div className="relative border border-gray-200 bg-white flex flex-col w-full h-full min-h-[400px] rounded-lg shadow mt-10">
        {/* Header Box */}
        <div className="border-b border-gray-200 px-3 py-3">
          <div className="flex flex-wrap gap-10">
            {/* Status section */}
            <div className="flex gap-10 sm:basis-auto">
              {/* Dropdown status */}
              <div className="flex items-center gap-2">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <MenuButton className="w-[150px] inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
                      Options
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 size-5 text-gray-400"
                      />
                    </MenuButton>
                  </div>

                  <MenuItems
                    transition
                    className="w-full absolute left-0 z-10 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    <div className="py-1">
                      <MenuItem>
                        <button
                          onClick={() => setFilteredLogs(undefined)}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Newest
                        </button>
                      </MenuItem>
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                        >
                          Oldest
                        </a>
                      </MenuItem>
                    </div>
                    <div className="py-1">
                      <MenuItem>
                        <button
                          onClick={async () => {
                            try {
                              const res = await axios.get(
                                "https://thelong.xyz/api/monitors/10-latest"
                              );
                              const logs = res.data._embedded.pingList;
                              setFilteredLogs(logs);
                            } catch (e) {
                              console.error("Failed to fetch latest:", e);
                            }
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          10 Most Recent
                        </button>
                      </MenuItem>
                      <MenuItem>
                        <button
                          onClick={async () => {
                            try {
                              const res = await axios.get(
                                "https://thelong.xyz/api/monitors/20-latest"
                              );
                              const logs = res.data._embedded.pingList;
                              setFilteredLogs(logs);
                            } catch (e) {
                              console.error("Failed to fetch latest:", e);
                            }
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          20 Most Recent
                        </button>
                      </MenuItem>
                    </div>
                    <div className="py-1">
                      <MenuItem>
                        <button
                          onClick={() => setFilteredLogs(undefined)}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Clear
                        </button>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </Menu>
                {/* Input status */}
                <div className="flex gap-2 items-center ml-5">
                  <input
                    type="text"
                    value={customParam}
                    onChange={(e) => setCustomParam(e.target.value)}
                    placeholder="Enter custom parameter"
                    className="h-[35px] border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={async () => {
                      try {
                        const res = await axios.get(
                          `https://thelong.xyz/api/monitors/${customParam}-latest`
                        );
                        setFilteredLogs(res.data._embedded.pingList);
                      } catch (err) {
                        console.error("Lỗi khi gọi API tùy chỉnh:", err);
                      }
                    }}
                    className="bg-blue-600 text-white px-4 py-1.5 rounded text-sm hover:bg-blue-700"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>

            {/* Info box */}
            <div className="flex-grow sm:basis-[300px]">
              <div className="w-full h-10 px-3 py-2 border rounded border-blue-300 bg-blue-50 text-blue-800 flex items-center gap-2">
                <FaInfo />
                <span className="text-sm font-medium">
                  Response from server
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Ping log content */}
        <div className="flex-1 flex flex-col pt-1 mt-1 pb-4 overflow-y-auto scroll-auto max-h-[600px]">
          <Ping externalLogs={filteredLogs} />
        </div>
      </div>
    </div>
  );
}
