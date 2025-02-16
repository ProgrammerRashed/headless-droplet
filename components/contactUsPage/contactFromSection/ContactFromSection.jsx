"use client"
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
import { useState } from "react";

function ContactFromSection() {
  const { sendMail, loading, message, error, setMessage, setError } = useSendMail();
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
    if (!formData.country) newErrors.country = 'Contry is required';
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
    <section className="bg-white py-10 md:py-[100px]">
      <div className="container !max-w-[1168px]">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 border border-gray-50/10 px-[15px] py-[30px] shadow-md shadow-gray-200 md:grid-cols-2 md:p-[30px] lg:p-[60px]">
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
              placeholder="First name"
              className="m-0 h-auto w-full rounded-[40px] border border-gray-50 bg-surface px-4 py-3 text-sm leading-[22px] text-gray-700 shadow-none placeholder:text-gray-400 focus-visible:ring-green-500"
              value={formData.firstName}
              onChange={handleChange}
            />
             {errors.firstName && <span className="text-red-400">{errors.firstName}</span>}
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
              placeholder="Last name"
              className="m-0 h-auto w-full rounded-[40px] border border-gray-50 bg-surface px-4 py-3 text-sm leading-[22px] text-gray-700 shadow-none placeholder:text-gray-400 focus-visible:ring-green-500"
              value={formData.lastName}
              onChange={handleChange}
            />
              {errors.lastName && <span className="text-red-400">{errors.lastName}</span>}
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
              placeholder="Phone number"
              className="m-0 h-auto w-full rounded-[40px] border border-gray-50 bg-surface px-4 py-3 text-sm leading-[22px] text-gray-700 shadow-none placeholder:text-gray-400 focus-visible:ring-green-500"
              value={formData.phone}
              onChange={handleChange}
            />
                {errors.phone && <span className="text-red-400">{errors.phone}</span>}
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
              placeholder="Email"
              className="m-0 h-auto w-full rounded-[40px] border border-gray-50 bg-surface px-4 py-3 text-sm leading-[22px] text-gray-700 shadow-none placeholder:text-gray-400 focus-visible:ring-green-500"
              value={formData.email}
              onChange={handleChange}
            />
                {errors.email && <span className="text-red-400">{errors.email}</span>}

          </div>
          <div data-aos="fade-up" className="w-full flex-col gap-1">
            <Label
              htmlFor="country"
              className="text-base font-normal capitalize leading-[26px] text-gray-800"
            >
              Country <span className="text-red-500">*</span>
            </Label>
            <Select onValueChange={(value) => handleSelectChange("country", value)} className="w-full">
              <SelectTrigger
                id="country"
                className="m-0 h-auto w-full rounded-[40px] border border-gray-50 bg-surface px-4 py-3 text-sm leading-[22px] text-gray-700 shadow-none placeholder:text-gray-400 focus:ring-green-500"
              >
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    value="switzerland"
                    className="text-gray-700 hover:bg-surface focus:bg-surface"
                  >
                    Switzerland
                  </SelectItem>
                  <SelectItem
                    value="bangladesh"
                    className="text-gray-700 hover:bg-surface focus:bg-surface"
                  >
                    Bangladesh
                  </SelectItem>
                  <SelectItem
                    value="india"
                    className="text-gray-700 hover:bg-surface focus:bg-surface"
                  >
                    India
                  </SelectItem>
                  <SelectItem
                    value="kenya"
                    className="text-gray-700 hover:bg-surface focus:bg-surface"
                  >
                    Kenya
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.country && <span className="text-red-400">{errors.country}</span>}

          </div>
          <div data-aos="fade-up" className="w-full flex-col gap-1">
            <Label
              htmlFor="inquiry-type"
              className="text-base font-normal capitalize leading-[26px] text-gray-800"
            >
              Inquiry type <span className="text-red-500">*</span>
            </Label>
            <Select onValueChange={(value) => handleSelectChange("inquiryType", value)} className="w-full">
              <SelectTrigger
                id="inquiry-type"
                className="m-0 h-auto w-full rounded-[40px] border border-gray-50 bg-surface px-4 py-3 text-sm leading-[22px] text-gray-700 shadow-none placeholder:text-gray-400 focus:ring-green-500"
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
          <div
            data-aos="fade-up"
            className="col-span-1 w-full flex-col gap-1 md:col-span-2"
          >
            <Label
              htmlFor="message"
              className="text-base font-normal capitalize leading-[26px] text-gray-800"
            >
              Message
            </Label>
            <Textarea
              placeholder="Write here..."
              id="message"
              className="scrollbar-thin m-0 h-auto w-full rounded-[10px] border border-gray-50 bg-surface px-4 py-3 text-sm leading-[22px] text-gray-700 shadow-none placeholder:text-gray-400 focus-visible:ring-green-500"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <span className="text-red-400">{errors.message}</span>}

          </div>
          <button
            type="submit"
            data-aos="fade-up"
            disabled={loading}
            className="-mt-1 flex w-fit flex-row items-center gap-2 rounded-full border border-red-600 bg-red-600 stroke-white px-6 py-[13px] text-sm font-semibold capitalize leading-[22px] text-white transition-all duration-300 hover:bg-red-900 md:col-span-2 md:px-6 md:py-[15px] md:text-base md:leading-[24px]"
          >
            <span>{loading ? "Sending..." : "Send Email"}</span>
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
          {
            message && (
              <div className="mt-5 text-base font-normal text-gray-800">
                {message}
              </div>
            )
          }
        </form>
      </div>
    </section>
  );
}

export default ContactFromSection;
