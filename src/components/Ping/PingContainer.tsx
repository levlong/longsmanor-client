import { FaInfo } from "react-icons/fa";
import Ping from "./Ping";

export default function PingContainer() {
  return (
    <div className="p-12">
      <div className="relative border border-primary flex flex-col w-full page-primary size-110">
        <div className="border-b border-solid border-secondary">
          <div className="flex lg:space-x-3 justify-stretch max-lg:flex-wrap px-3 py-3">
            {/* Dropdown - All logs */}
            <div className="max-lg:order-1 max-lg:grow max-lg:mr-2">
              <div className="relative">
                <button
                  className="type-interface-01 border border-solid button-secondary-inverted-border button-secondary-inverted-text button-secondary-inverted-background hover:button-secondary-inverted-background--hover hover:button-secondary-inverted-text--hover active:button-secondary-inverted-background--active active:button-secondary-inverted-text--hover--active h-10 py-2.5 px-3 focus-visible:outline focus-visible:outline-focus-action outline-offset-2 outline-2 flex items-center"
                  type="button"
                >
                  <div className="flex justify-between w-full items-center">
                    <span className="flex items-center space-x-2.5 whitespace-nowrap">
                      <span className="type-interface-01">All logs</span>
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Search box */}
            <div className="flex-1 max-lg:order-5 grow shrink max-lg:mt-2 max-lg:basis-full min-w-0">
              <div className="relative">
                <div className="flex border border-solid border-primary type-body-01 text-primary justify-start p-0 min-h-10 overflow-hidden items-stretch">
                  <div className="grow flex flex-wrap min-w-0 items-center">
                    <FaInfo />
                    <label>Response from server</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="custom-scrollbar flex-1 flex flex-col pt-1 pb-4 overflow-y-scroll">
          <Ping />
        </div>
      </div>
    </div>
  );
}
