import React, { useState } from 'react';
import { Upload, X, FileText, Check } from 'lucide-react';
import { clsx } from 'clsx';

interface PrescriptionUploadProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrescriptionUpload: React.FC<PrescriptionUploadProps> = ({ isOpen, onClose }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'application/pdf')) {
      setUploadedFile(file);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={onClose} />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl w-full max-w-md relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>

          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Upload Prescription</h3>
            
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={clsx(
                "border-2 border-dashed rounded-lg p-8",
                "flex flex-col items-center justify-center space-y-4",
                "transition-colors duration-200",
                isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300",
                uploadedFile ? "bg-green-50" : "hover:bg-gray-50"
              )}
            >
              {uploadedFile ? (
                <>
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-gray-500" />
                    <span className="text-sm text-gray-600">{uploadedFile.name}</span>
                  </div>
                </>
              ) : (
                <>
                  <Upload className="h-8 w-8 text-gray-400" />
                  <div className="text-center">
                    <p className="text-gray-600">Drag and drop your prescription here</p>
                    <p className="text-sm text-gray-500">or</p>
                  </div>
                </>
              )}
              
              <input
                type="file"
                id="prescription"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={handleFileInput}
                className="hidden"
              />
              <label
                htmlFor="prescription"
                className={clsx(
                  "px-4 py-2 rounded-lg text-sm font-medium",
                  "cursor-pointer transition-colors",
                  uploadedFile
                    ? "bg-green-100 text-green-700 hover:bg-green-200"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                )}
              >
                {uploadedFile ? "Upload Another File" : "Browse Files"}
              </label>
              <p className="text-xs text-gray-500">
                Supported formats: JPEG, PNG, PDF
              </p>
            </div>

            {uploadedFile && (
              <button
                onClick={() => {
                  // Handle prescription submission
                  onClose();
                }}
                className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors"
              >
                Submit Prescription
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PrescriptionUpload;