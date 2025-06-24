import { FaInfoCircle } from "react-icons/fa";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Ping() {
  const [logs, setLog] = useState([{'status': '', 'logMessage': '', 'timePinged': ''}]);

  useEffect(() => {
    const fetchLog = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/monitor");
        setLog(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLog();
    const interval = setInterval(fetchLog, 100000);
    return () => clearInterval(interval);
  }, []);

    return (
    <>
      {logs.map((log, index) => (
        <div
          key={index}
          className="type-mono-00 text-primary group relative space-x-4 page-primary px-3 py-1"
        >
          <div className="relative inline-flex">
            <time className="select-none hover:status-highlight-background">
              {new Date(log.timePinged).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}{" "}
              {new Date(log.timePinged).toLocaleDateString()}
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
            <span className="text-green-500 whitespace-pre-wrap select-none">
              {log.status}
            </span>
          </div>

          <span className="whitespace-pre-wrap break-all">
            {log.logMessage}
          </span>
        </div>
      ))}
    </>
  );
}
