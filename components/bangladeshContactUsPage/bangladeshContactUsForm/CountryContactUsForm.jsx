"use client"
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import useSendMail from "@/utils/useSendEmail";

function CountryContactUsForm({section_heading, section_description}) {
  const { sendMail, loading, message, error, setMessage, setError } = useSendMail("cform");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    country: "",
    inquiryType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    setErrors({});
  };

  const handleSelectChange = (id, value) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.inquiryType) newErrors.inquiryType = 'Inquiry Type is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formErrors = validateForm();
      if (Object.keys(formErrors).length === 0) {
        await sendMail(formData);
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          country: "",
          inquiryType: "",
          message: "",
        });
      } else {
        setErrors(formErrors);
      }
    } catch (err) {
      console.error("Mail send error:", err);
    }
  };

  const inquiryTypes = [
    { value: "General Inquiry", label: "General Inquiry" },
    { value: "Partnership & Collaboration", label: "Partnership & Collaboration" },
    { value: "Funding & Grants", label: "Funding & Grants" },
    { value: "Volunteering & Internships", label: "Volunteering & Internships" },
    { value: "Educational Programs & Workshops", label: "Educational Programs & Workshops" },
    { value: "Media & Press", label: "Media & Press" },
    { value: "Research & Publications", label: "Research & Publications" },
    { value: "Donations & Sponsorships", label: "Donations & Sponsorships" },
    { value: "Technical Assistance & Support", label: "Technical Assistance & Support" },
    { value: "Feedback & Suggestions", label: "Feedback & Suggestions" },
  ];

  return (
    <div className="flex w-full flex-grow flex-col gap-10 border-b border-gray-50 pb-[30px] 0.5xl:max-w-[740px] 0.5xl:border-b-0 0.5xl:border-r 0.5xl:pb-0 0.5xl:pr-[30px]">
      <div className="flex flex-col gap-[10px]">
        <h3 className="text-[30px] font-bold leading-[40px] tracking-[1%] text-gray-800 md:text-[32px] md:font-bold md:leading-[42px]">
          {section_heading}
        </h3>
        <p className="text-base font-normal leading-[26px] text-gray-600">
          {section_description}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
        <div data-aos="fade-up" className="w-full flex-col gap-1">
          <Label htmlFor="firstName" className="text-base font-normal capitalize leading-[26px] text-gray-800">
            First name <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            id="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            className="m-0 h-auto w-full rounded-[10px] border border-gray-50 bg-surface px-4 py-3 text-sm leading-[22px] text-gray-700 shadow-none placeholder:text-gray-400 focus-visible:ring-green-500"
          />
          {errors.firstName && <span className="text-red-400">{errors.firstName}</span>}
        </div>

        {/* Last Name */}
        <div data-aos="fade-up" className="w-full flex-col gap-1">
          <Label htmlFor="lastName" className="text-base font-normal capitalize leading-[26px] text-gray-800">
            Last name <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            id="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            className="m-0 h-auto w-full rounded-[10px] border border-gray-50 bg-surface px-4 py-3 text-sm leading-[22px] text-gray-700 shadow-none placeholder:text-gray-400 focus-visible:ring-green-500"
          />
          {errors.lastName && <span className="text-red-400">{errors.lastName}</span>}
        </div>

        {/* Phone */}
        <div data-aos="fade-up" className="w-full flex-col gap-1">
          <Label htmlFor="phone" className="text-base font-normal capitalize leading-[26px] text-gray-800">
            Phone <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            id="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            className="m-0 h-auto w-full rounded-[10px] border border-gray-50 bg-surface px-4 py-3 text-sm leading-[22px] text-gray-700 shadow-none placeholder:text-gray-400 focus-visible:ring-green-500"
          />
          {errors.phone && <span className="text-red-400">{errors.phone}</span>}
        </div>

        {/* Email */}
        <div data-aos="fade-up" className="w-full flex-col gap-1">
          <Label htmlFor="email" className="text-base font-normal capitalize leading-[26px] text-gray-800">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="m-0 h-auto w-full rounded-[10px] border border-gray-50 bg-surface px-4 py-3 text-sm leading-[22px] text-gray-700 shadow-none placeholder:text-gray-400 focus-visible:ring-green-500"
          />
          {errors.email && <span className="text-red-400">{errors.email}</span>}
        </div>

        {/* Country */}
        <div data-aos="fade-up" className="w-full flex-col gap-1">
          <Label htmlFor="country" className="text-base font-normal capitalize leading-[26px] text-gray-800">
            Country <span className="text-red-500">*</span>
          </Label>
          <Select onValueChange={(value) => handleSelectChange("country", value)} className="w-full">
            <SelectTrigger
              id="country"
              className="m-0 h-auto w-full rounded-[10px] border border-gray-50 bg-surface px-4 py-3 text-sm leading-[22px] text-gray-700 shadow-none placeholder:text-gray-400 focus:ring-green-500"
            >
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="switzerland" className="text-gray-700 hover:bg-surface focus:bg-surface">
                  Switzerland
                </SelectItem>
                <SelectItem value="bangladesh" className="text-gray-700 hover:bg-surface focus:bg-surface">
                  Bangladesh
                </SelectItem>
                <SelectItem value="india" className="text-gray-700 hover:bg-surface focus:bg-surface">
                  India
                </SelectItem>
                <SelectItem value="kenya" className="text-gray-700 hover:bg-surface focus:bg-surface">
                  Kenya
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {errors.country && <span className="text-red-400">{errors.country}</span>}
        </div>

        {/* Inquiry Type */}
        <div data-aos="fade-up" className="w-full flex-col gap-1">
          <Label htmlFor="inquiry-type" className="text-base font-normal capitalize leading-[26px] text-gray-800">
            Inquiry type <span className="text-red-500">*</span>
          </Label>
          <Select onValueChange={(value) => handleSelectChange("inquiryType", value)} className="w-full">
            <SelectTrigger
              id="inquiry-type"
              className="m-0 h-auto w-full rounded-[10px] border border-gray-50 bg-surface px-4 py-3 text-sm leading-[22px] text-gray-700 shadow-none placeholder:text-gray-400 focus:ring-green-500"
            >
              <SelectValue placeholder="Select inquiry type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {inquiryTypes.map((type) => (
                  <SelectItem
                    key={type.value}
                    value={type.value}
                    className="text-gray-700 hover:bg-surface focus:bg-surface"
                  >
                    {type.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {errors.inquiryType && <span className="text-red-400">{errors.inquiryType}</span>}
        </div>

        {/* Message */}
        <div data-aos="fade-up" className="col-span-1 w-full flex-col gap-1 md:col-span-2">
          <Label htmlFor="message" className="text-base font-normal capitalize leading-[26px] text-gray-800">
            Message <span className="text-red-500">*</span>
          </Label>
          <Textarea
            placeholder="Write here..."
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="scrollbar-thin m-0 h-auto w-full rounded-[10px] border border-gray-50 bg-surface px-4 py-3 text-sm leading-[22px] text-gray-700 shadow-none placeholder:text-gray-400 focus-visible:ring-green-500"
          />
          {errors.message && <span className="text-red-400">{errors.message}</span>}
        </div>

        <button
          type="submit"
          data-aos="fade-up"
          disabled={loading}
          className="-mt-1 flex w-fit flex-row items-center gap-2 rounded-full border border-red-600 bg-red-600 stroke-white px-6 py-[13px] text-sm font-semibold leading-[22px] text-white transition-all duration-300 hover:bg-red-900 md:col-span-2 md:px-6 md:py-[15px] md:text-base md:leading-[24px] 0.5xl:mt-5"
        >
          <span>{loading ? "Sending..." : "Submit now"}</span>
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
        {message && (
          <div className="mt-5 text-base font-normal text-gray-800">
            {message}
          </div>
        )}
      </form>
    </div>
  );
}

export default CountryContactUsForm;
