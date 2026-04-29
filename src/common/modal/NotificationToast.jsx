import React, { useEffect } from "react";

/**
 * NotificationToast - A beautiful animated toast modal
 * Props:
 *   isOpen: bool
 *   type: "success" | "error"
 *   message: string
 *   onClose: fn
 *   autoCloseDuration: number (ms, default 3500)
 */
export default function NotificationToast({
  isOpen,
  type = "success",
  message = "",
  onClose,
  autoCloseDuration = 3500,
}) {
  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(onClose, autoCloseDuration);
    return () => clearTimeout(timer);
  }, [isOpen, autoCloseDuration, onClose]);

  if (!isOpen) return null;

  const isSuccess = type === "success";

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
      {/* Backdrop blur overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto"
        onClick={onClose}
      />

      {/* Toast Card */}
      <div
        className="relative pointer-events-auto w-full max-w-sm animate-bounce-in"
        style={{ animation: "toastIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both" }}
      >
        <div
          className={`rounded-2xl border shadow-2xl p-6 flex flex-col items-center gap-4 text-center
            ${isSuccess
              ? "bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 border-emerald-500/30 shadow-emerald-500/20"
              : "bg-gradient-to-br from-slate-900 via-red-950 to-slate-900 border-red-500/30 shadow-red-500/20"
            }`}
        >
          {/* Icon */}
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg
              ${isSuccess
                ? "bg-emerald-500/20 border border-emerald-400/40"
                : "bg-red-500/20 border border-red-400/40"
              }`}
          >
            {isSuccess ? (
              <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </div>

          {/* Title */}
          <h3 className={`text-lg font-bold tracking-tight ${isSuccess ? "text-emerald-300" : "text-red-300"}`}>
            {isSuccess ? "Success!" : "Failed!"}
          </h3>

          {/* Message */}
          <p className="text-sm text-gray-300 leading-relaxed">{message}</p>

          {/* Progress bar */}
          <div className="w-full h-1 rounded-full bg-white/10 overflow-hidden">
            <div
              className={`h-full rounded-full ${isSuccess ? "bg-emerald-400" : "bg-red-400"}`}
              style={{
                animation: `progressShrink ${autoCloseDuration}ms linear forwards`,
              }}
            />
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className={`text-xs font-semibold px-4 py-1.5 rounded-full transition-all duration-200
              ${isSuccess
                ? "text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20"
                : "text-red-300 border border-red-500/30 hover:bg-red-500/20"
              }`}
          >
            Dismiss
          </button>
        </div>
      </div>

      <style>{`
        @keyframes toastIn {
          from { opacity: 0; transform: scale(0.7) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes progressShrink {
          from { width: 100%; }
          to   { width: 0%; }
        }
      `}</style>
    </div>
  );
}
