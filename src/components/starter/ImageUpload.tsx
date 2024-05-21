"use client"
import axios from 'axios';
import { Button } from '@nextui-org/react';
import { X } from 'react-feather';
import React, { DragEvent, ChangeEvent, useState } from 'react';

interface Error {
  title: string;
}

const ImageUpload: React.FC = () => {
  const [dragging, setDragging] = useState<boolean>(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [file, setFile] = useState<File | {}>({});
  const [resultURL, setResultURL] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Error[]>([]);

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files[0]; // Only handle the first file
    setFile(file);
    handleFile(file);
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0]; // Only handle the first file
    setFile(file);
    handleFile(file);
  };

  const handleFile = (file: File) => {
    if (file) {
      setUploadedFile(URL.createObjectURL(file));
    }
  };

  const handleRemove = () => {
    const formData = new FormData();
    formData.append('size', 'auto');
    formData.append('image_file', file as Blob, (file as File)?.name);
    axios
      .post('/api/remove', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        responseType: 'arraybuffer',
      })
      .then((res) => {
        if (res.status === 200) {
          const blob = new Blob([res.data], { type: 'image/png' });
          const imageUrl = URL.createObjectURL(blob);
          setResultURL(imageUrl);
          setUploadedFile(null);
        }
      })
      .catch((err) => {
        // Convertendo o Uint8Array para um array de números
        const array = new Uint8Array(err.response.data);
        const numericArray = Array.from(array);
        const msg = JSON.parse(String.fromCharCode.apply(null, numericArray));
        setErrors(msg.errors);
        setLoading(false);
      });
  };

  const handleRemoveImage = () => {
    setUploadedFile(null);
  };

  return (
    <div className='w-full flex flex-col gap-2 items-center'>
      {(!uploadedFile && !resultURL) && (
        <div
          className={`w-full h-64 border-2 border-dashed border-gray-400 rounded-lg flex flex-col justify-center items-center ${
            dragging ? 'bg-gray-200' : ''
          }`}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <>
            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept="image/*"
              onChange={handleFileInputChange}
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <div className="text-center">
                <svg
                  width="15%"
                  height="15%"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto mb-2 text-gray-400 text-center"
                >
                  <path
                    d="M4 16.2422C2.79401 15.435 2 14.0602 2 12.5C2 10.1564 3.79151 8.23129 6.07974 8.01937C6.54781 5.17213 9.02024 3 12 3C14.9798 3 17.4522 5.17213 17.9203 8.01937C20.2085 8.23129 22 10.1564 22 12.5C22 14.0602 21.206 15.435 20 16.2422M8 17L12 21M12 21L16 17M12 21V12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <Button className="mt-2 px-4 py-2 bg-button text-white rounded hover:bg-button_hover focus:outline-none">
                  Upload image
                </Button>
                <p className="text-md mb-4 mt-2 text-gray-500">
                  or drag & drop image
                </p>
                <p className="text-sm text-gray-400">
                  Supported image formats: JPG, PNG, GIF <br />
                  Maximum attachment size: 10MB
                </p>
              </div>
            </label>
          </>
        </div>
      )}
      {uploadedFile && typeof uploadedFile === 'string' && (
       <div className={`text-center relative w-full max-w-md mx-auto h-auto border-2 border-gray-400 rounded-lg p-4`}>
          <img src={uploadedFile} alt="Uploaded" className="max-w-full h-auto" style={{ maxHeight: '250px', margin: 'auto' }} />
          <Button onClick={handleRemoveImage} className='absolute top-2 right-2 bg-black dark:bg-white text-white dark:text-black px-2 py-1 rounded-full focus:outline-none'>
            <X size={16} />
          </Button>
        </div>
      )}
      {resultURL && (
        <div className='relative w-full'>
          <img src={resultURL} alt="Uploaded" className="max-w-full h-auto" style={{ maxHeight: '400px', margin: 'auto' }} />
        </div>
      )}
      {(resultURL || uploadedFile) && (
        <div className='mx-auto px-4 py-2 gap-5 text-center'>
          {errors.map((error, key) => (
            <div key={key} className='p-3 rounded tracking-wide text-md '>
              {error.title}
            </div>
          ))}
          {resultURL && (
            <a href={resultURL} download={'remove.png'} className='px-4 py-2 text-center rounded w-[100%] bg-slate-950'>
              DOWNLOAD
            </a>
          )}
          {uploadedFile && errors.length === 0 && (
            <Button onClick={handleRemove} className='bg-red-600 px-4 py-2 text-white text-center rounded w-[100%]'>
              Remover fundo
            </Button>
          )}
          {errors.length > 0 && (
            <Button onClick={() => { setUploadedFile(null); setLoading(false); setErrors([]) }} className='px-4 py-2 text-center rounded border'>
              Upload Again
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
