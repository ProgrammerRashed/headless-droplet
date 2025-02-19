"use client"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Dropzone from "@/components/shared/DropZone";
import { cn } from "@/lib/utils";
import useApplyJob from "@/utils/useApplyJob";
import { useState } from "react";

function ApplyNowForm({ title, details, position }) {
  const { sendMail, loading, message, error, setMessage, setError } = useApplyJob();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    resume: null,  
    coverLetter: null, 
  });
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  // Handle file selection from DropZone
  const handleFileUpload = (file, fileType) => {
    if (file && file instanceof File) {
      setFormData((prev) => ({
        ...prev,
        [fileType]: file, 
      }));
    } else {
      console.error("Invalid file selected:", file);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);
  
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.resume || !formData.coverLetter) {
      setError("All fields, including the files, are required.");
      return;
    }
  
    const formDataToSend = new FormData();
    formDataToSend.append("firstName", formData.firstName);
    formDataToSend.append("lastName", formData.lastName);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("job_title", position || "");
    formDataToSend.append("resume", formData.resume); 
    formDataToSend.append("coverLetter", formData.coverLetter);  
  
    try {
      await sendMail(formDataToSend);
    } catch (err) {
      setError("Failed to send email. Please try again.");
      console.error("Mail send error:", err);
    }
  };
  
  
  return (
    <div
      data-aos="fade-up"
      className="shadow-form mx-auto flex max-w-[1000px] flex-col items-center justify-center overflow-hidden rounded-[8px] border border-gray-50 bg-white p-5 md:p-10"
    >
      <div className="flex w-full flex-col items-center justify-center">
        {title && (
          <h2
            data-aos="fade-up"
            className="mb-[10px] text-center text-4xl font-bold leading-[40px] tracking-[-1%] text-gray-800 md:text-5xl md:leading-[60px]"
          >
            {title}
          </h2>
        )}
        {details && (
          <p
            data-aos="fade-up"
            className="text-center text-sm font-normal leading-normal text-gray-600 md:text-base md:leading-[26px]"
          >
            {details}
          </p>
        )}
      </div>
      {position && (
        <p
          data-aos="fade-up"
          className="mb-5 mt-[50px] w-full border-y border-gray-50 py-3 text-left text-base font-medium leading-[26px] text-gray-600"
        >
          Position:
          <span className="ml-[10px] font-normal">{position}</span>
        </p>
      )}
      <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data" className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2">
        <div data-aos="fade-up" className="w-full flex-col gap-1">
          <Label
            htmlFor="firstName"
            className="text-base font-normal capitalize leading-[26px] text-gray-800"
          >
            First name <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First name"
            className="m-0 h-auto w-full rounded-[40px] border border-gray-50 bg-surface px-4 py-3 text-sm leading-[22px] text-gray-700 shadow-none placeholder:text-gray-400 focus-visible:ring-green-500"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div data-aos="fade-up" className="w-full flex-col gap-1">
          <Label
            htmlFor="lastName"
            className="text-base font-normal capitalize leading-[26px] text-gray-800"
          >
            Last name <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last name"
            className="m-0 h-auto w-full rounded-[40px] border border-gray-50 bg-surface px-4 py-3 text-sm leading-[22px] text-gray-700 shadow-none placeholder:text-gray-400 focus-visible:ring-green-500"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div data-aos="fade-up" className="w-full flex-col gap-1">
          <Label
            htmlFor="phone"
            className="text-base font-normal capitalize leading-[26px] text-gray-800"
          >
            Phone <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone number"
            className="m-0 h-auto w-full rounded-[40px] border border-gray-50 bg-surface px-4 py-3 text-sm leading-[22px] text-gray-700 shadow-none placeholder:text-gray-400 focus-visible:ring-green-500"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div data-aos="fade-up" className="w-full flex-col gap-1">
          <Label
            htmlFor="email"
            className="text-base font-normal capitalize leading-[26px] text-gray-800"
          >
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="m-0 h-auto w-full rounded-[40px] border border-gray-50 bg-surface px-4 py-3 text-sm leading-[22px] text-gray-700 shadow-none placeholder:text-gray-400 focus-visible:ring-green-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div data-aos="fade-up" className="mt-2 sm:col-span-2">
          <Dropzone
          onFileSelect={(file) => handleFileUpload(file, 'resume')} 
          fileType="Resume"
            className="group flex cursor-pointer items-center justify-center rounded-[10px] border border-dashed border-gray-50 bg-surface px-4 py-3 transition-all duration-300 hover:border-green-500"
          />
          <p className="mt-2 text-sm font-normal leading-[22px] text-gray-600">
            Upload file size max 5MB. Accept file (.pdf**)
          </p>
        </div>
        <div data-aos="fade-up" className="mt-2 sm:col-span-2">
          <Dropzone
            onFileSelect={(file) => handleFileUpload(file, 'coverLetter')} 
            fileType="Cover Letter"
            className="group flex cursor-pointer items-center justify-center rounded-[10px] border border-dashed border-gray-50 bg-surface px-4 py-3 transition-all duration-300 hover:border-green-500"
          />
          <p className="mt-2 text-sm font-normal leading-[22px] text-gray-600">
            Upload file size max 5MB. Accept file (.pdf**)
          </p>
        </div>
        <button
          type="submit"
          disabled={loading}
          data-aos="fade-up"
          className={cn(
            "mx-auto mt-[30px] flex w-fit flex-row items-center gap-2 rounded-full border border-red-600 bg-red-600 stroke-white px-6 py-[13px] text-sm font-semibold leading-[22px] text-white transition-all duration-300 hover:bg-red-900 sm:col-span-2 md:px-6 md:py-[15px] md:text-base md:leading-[24px]",
          )}
        >
          <span>{loading ? "Submitting..." : "Submit Now"}</span>
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2181_7358)">
              <path
                d="M8 14L12 10L8 6"
                stroke="current"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2181_7358">
                <rect width={20} height={20} fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </form>

       {/* Success/Error Messages */}
       {message && <p className="mt-4 text-green-600">{message}</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
 
    </div>
  );
}

export default ApplyNowForm;
