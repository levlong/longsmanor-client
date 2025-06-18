import { FaInfoCircle } from "react-icons/fa";

const logs = [
  {
    status: "success",
    date: new Date().toLocaleString(),
    server_response: "Ping cai deo gi ???",
  },
  {
    status: "success",
    date: new Date().toLocaleString(),
    server_response: "Ping cai deo gi ???",
  },
  {
    status: "success",
    date: new Date().toLocaleString(),
    server_response: "Ping cai deo gi ???",
  },
];

export default function Ping() {
  return (
    <>
      {logs.map((log, index) => (
        <div
          key={index}
          className="type-mono-00 text-primary group relative space-x-4 page-primary px-3 py-1"
        >
          <div className="relative inline-flex">
            <time className="select-none hover:status-highlight-background">
              {new Date(log.date).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}{" "}
              {new Date(log.date).toLocaleDateString()}
            </time>
          </div>

          <span className="inline-flex space-x-1 uppercase group/line-level relative mr-2">
            <svg
              fill="currentColor"
              className="inline w-3 h-3 translate-y-px log-line-info-icon"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <FaInfoCircle />
            </svg>
          </span>

          <div className="relative inline-flex">
            <span className="text-yellow-200 whitespace-pre-wrap select-none">
              {log.server_response}
            </span>
          </div>

          <span className="whitespace-pre-wrap break-all">
            {log.server_response}
          </span>
        </div>
      ))}
    </>
  );
}
