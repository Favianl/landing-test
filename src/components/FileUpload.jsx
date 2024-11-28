import { useState, useRef } from "react";

const FileUpload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState(false);

  const inputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const simulateUpload = () => {
    setIsUploading(true);
    let progressInterval = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 10;
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setIsUploading(false);
          setFile(null);
          setSuccessMessage(true);
          setProgress(0);

          inputRef.current.value = "";

          setTimeout(() => {
            setSuccessMessage(false);
          }, 3000);
        }
        return newProgress;
      });
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      simulateUpload();
    }
  };

  return (
    <div className='max-w-md mx-auto p-4'>
      <h2 className='text-center text-2xl font-semibold mb-4'>Subir archivo</h2>

      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <input
            ref={inputRef}
            type='file'
            onChange={handleFileChange}
            className='block w-full text-sm text-gray-700 file:border file:bg-red-800 file:text-white file:rounded-md file:px-4 file:py-2'
            disabled={isUploading}
          />
        </div>

        <div className='relative'>
          <button
            type='submit'
            disabled={isUploading || !file}
            className={`w-full py-2 rounded-md text-white ${
              isUploading ? "bg-gray-400" : "bg-red-800 hover:bg-red-700"
            }`}
          >
            {isUploading ? "Subiendo..." : "Subir archivo"}
          </button>
        </div>

        {isUploading && (
          <div className='mt-4'>
            <div className='w-full bg-gray-200 rounded-full h-2.5'>
              <div
                className='bg-red-800 h-2.5 rounded-full transition-all duration-500'
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className='text-center mt-2 text-sm'>{progress}%</div>
          </div>
        )}

        {successMessage && (
          <div className='mt-4 text-center text-green-600 bg-green-100 p-2 rounded-md'>
            ¡Archivo subido con éxito!
          </div>
        )}
      </form>
    </div>
  );
};

export default FileUpload;
