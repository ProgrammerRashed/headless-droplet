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

function DonationForm({country, donation_options}) {
  const { sendMail, loading, message, error, setMessage, setError } = useSendMail("donation");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    country: "",
    donationType: "",
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
    if (!formData.donationType) newErrors.donationType = 'Donation Type is required';
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
            donationType: "",
            message: "",
        });
        } else {
          setErrors(formErrors);
        }
      } catch (err) {
        console.error("Mail send error:", err);
      }
  };


  return (
    <div className="flex w-full flex-grow flex-col gap-10 border-b border-gray-50 pb-[30px] 0.5xl:max-w-[740px] 0.5xl:border-b-0 0.5xl:border-l 0.5xl:pb-0 0.5xl:pl-[30px] 0.5xl:pt-[30px]">
      <form onSubmit={handleSubmit}  className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
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
                {
                    country?.map((item, index) => (
                      <SelectItem
                      key={index}
                        value={item?.slug}
                        className="text-gray-700 hover:bg-surface focus:bg-surface"
                      >
                        {item?.data}
                      </SelectItem>
                    ))
                }
             
              </SelectGroup>
            </SelectContent>
          </Select>
          {errors.country && <span className="text-red-400">{errors.country}</span>}
        </div>
        <div data-aos="fade-up" className="w-full flex-col gap-1">
          <Label
            htmlFor="donation-type"
            className="text-base font-normal capitalize leading-[26px] text-gray-800"
          >
           Donation Typecarbon-fields/our-partners-section <span className="text-red-500">*</span>
          </Label>
          <Select  onValueChange={(value) => handleSelectChange("donationType", value)} className="w-full">
            <SelectTrigger
              id="donationType"
              className="m-0 h-auto w-full rounded-[40px] border border-gray-50 bg-surface px-4 py-3 text-sm leading-[22px] text-gray-700 shadow-none placeholder:text-gray-400 focus:ring-green-500"
            >
              <SelectValue placeholder="Select donation type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>

              {
                    donation_options?.map((item, index) => (
                      <SelectItem
                      key={index}
                        value={item?.slug}
                       className="text-gray-700 hover:bg-surface focus:bg-surface"
                      >
                        {item?.data}
                      </SelectItem>
                    ))
                }
             
              
              </SelectGroup>
            </SelectContent>
          </Select>
          {errors.donationType && <span className="text-red-400">{errors.donationType}</span>}
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
           disabled={loading}
          data-aos="fade-up"
          className="-mt-1 flex w-fit flex-row items-center gap-2 rounded-full border border-red-600 bg-red-600 stroke-white px-6 py-[13px] text-sm font-semibold leading-[22px] text-white transition-all duration-300 hover:bg-red-900 md:col-span-2 md:px-6 md:py-[15px] md:text-base md:leading-[24px]"
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
  );
}

export default DonationForm;
