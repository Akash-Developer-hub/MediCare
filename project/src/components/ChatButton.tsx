import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { clsx } from 'clsx';

const ChatButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 w-full max-w-sm bg-white rounded-lg shadow-lg z-50 border overflow-hidden">
          <div className="p-4 border-b flex justify-between items-center bg-blue-600 text-white">
            <h3 className="font-semibold">Chat with Us</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-blue-700 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="h-96 p-4 bg-gray-50">
            <div className="text-center text-gray-500">
              Chat functionality coming soon!
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "fixed bottom-4 right-4 sm:right-6 z-50",
          "bg-blue-600 text-white p-3 rounded-full shadow-lg",
          "hover:bg-blue-700 active:bg-blue-800",
          "transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        )}
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </>
  );
};

export default ChatButton;