"use client";

import { Upload } from "lucide-react";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

function Dropzone({ fileType, className }) {
  const [file, setFile] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    if (acceptedFiles?.length) {
      setFile(acceptedFiles);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
    maxSize: 6000000,
    maxFiles: 1,
    multiple: false,
  });

  return (
    <div {...getRootProps({ className: className })}>
      <input {...getInputProps()} />
      <div>
        <Upload className="mx-auto h-[29px] w-[29px] text-gray-600 transition-all duration-300 group-hover:text-green-700" />
        <p className="text-center text-base font-normal leading-[26px] text-gray-800 transition-all duration-300">
          {isDragActive ? "Drop your pdf here" : `Upload your ${fileType}`}
        </p>
        <p className="mt-0.5 text-center text-xs font-normal leading-normal text-gray-800 transition-all duration-300">
          {file.length > 0 && `Selected File: ${file[0].name}`}
        </p>
      </div>
    </div>
  );
}

export default Dropzone;
