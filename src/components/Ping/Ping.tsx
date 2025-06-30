import { FaInfoCircle } from "react-icons/fa";
import axios from "axios";
import { useState, useEffect, useRef } from "react";

export default function Ping() {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const [logs, setLog] = useState([
    { status: "Not known", logMessage: "Yeh", timePinged: "Today" },
  ]);

  useEffect(() => {
    const fetchLog = async () => {
      try {
        const res = await axios.get("https://thelong.xyz/api/monitor");
        const limitedLogs = res.data.slice(0, 30);
        setLog(limitedLogs);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLog();
    const interval = setInterval(fetchLog, 100000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });;
  }, [logs]);

  return (
    <div className="space-y-2 px-4 py-2">
      {logs.map((log, index) => (
        <div
          key={index}
          className="text-sm md:text-base text-gray-800 bg-gray-100 rounded-md px-3 py-2 flex flex-wrap items-center gap-3 border border-gray-200 shadow-sm"
        >
          {/* Time */}
          <time className="text-gray-500 font-mono min-w-[160px]">
            {new Date(log.timePinged).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}{" "}
            {new Date(log.timePinged).toLocaleDateString()}
          </time>

          {/* Icon */}
          <FaInfoCircle className="text-blue-500 shrink-0" />

          {/* Status */}
          <span
            className={`font-semibold ${
              log.status?.toLowerCase().includes("success")
                ? "text-green-600"
                : "text-yellow-600"
            }`}
          >
            {log.status}
          </span>

          {/* Message */}
          <span className="break-words">{log.logMessage}</span>
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
