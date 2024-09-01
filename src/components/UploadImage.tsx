"use client";
import React, {useState} from "react";
import {FileUpload} from "./ui/file-upload";

interface UploadImageProps {
    onChange?: (files: File[]) => void
}

export function UploadImage({onChange}: UploadImageProps) {
    const [files, setFiles] = useState<File[]>([]);
    const handleFileUpload = (files: File[]) => {
        setFiles(files);
        console.log(files);
    };

    return (
        <div
            className="w-full w-full mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
            <FileUpload onChange={handleFileUpload}/>
        </div>
    );
}
