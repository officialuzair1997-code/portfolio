import React from "react";
import { MessageSquare, Mail, X } from "lucide-react";

const ConnectionModal = ({ isOpen, onClose, onOptionSelect, formData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#020817]/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-[#0b1224] border border-white/10 rounded-3xl p-8 shadow-2xl animate-fade-in-up">
        {/* Glow corner */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-500 hover:text-white hover:bg-white/5 rounded-full transition-all"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-500/10 text-indigo-400 mb-4 border border-indigo-500/20">
            <MessageSquare size={32} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Connect with me</h3>
          <p className="text-slate-400 text-sm">
            Hi {formData.name}! How would you like to send your message?
          </p>
        </div>

        <div className="space-y-4">
          {/* WhatsApp Option */}
          <button
            onClick={() => onOptionSelect("whatsapp")}
            className="w-full group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/5 border border-green-500/20 hover:border-green-500/50 hover:bg-green-500/20 transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
          >
            <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center text-white shadow-lg shadow-green-500/30">
              <MessageSquare size={24} fill="currentColor" className="text-white" />
            </div>
            <div className="text-left">
              <span className="block text-white font-bold text-lg leading-tight">WhatsApp</span>
              <span className="text-green-400/80 text-xs">Direct chat, fast response</span>
            </div>
          </button>

          {/* Email Option */}
          <button
            onClick={() => onOptionSelect("email")}
            className="w-full group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-blue-500/10 to-indigo-500/5 border border-blue-500/20 hover:border-blue-500/50 hover:bg-blue-500/20 transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
              <Mail size={24} />
            </div>
            <div className="text-left">
              <span className="block text-white font-bold text-lg leading-tight">Email</span>
              <span className="text-blue-400/80 text-xs">Professional, detailed inquiry</span>
            </div>
          </button>
        </div>

        <p className="text-center mt-8 text-slate-500 text-[10px] uppercase tracking-widest font-medium">
          Secure & Professional Communication
        </p>
      </div>
    </div>
  );
};

export default ConnectionModal;
