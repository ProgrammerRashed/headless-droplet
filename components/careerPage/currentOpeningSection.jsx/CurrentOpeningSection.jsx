"use client";

import { useState } from "react";
import SectionHeading from "@/components/sectionHeader/SectionHeading";
import CurrentOpeningFilter from "./CurrentOpeningFilter";
import CurrentOpeningCard from "./CurrentOpeningCard";
import ApplyNowForm from "@/components/applyNowPage/applyNowSection/ApplyNowForm";

function CurrentOpeningSection({ jobs }) {
  let sectionTitle = "Current openings";

  // Get current date and time
  const currentDate = new Date();

  // Filter out expired jobs
  const activeJobs = jobs?.filter((job) => {
    const deadlineDate = new Date(job.node.deadline);
    return deadlineDate > currentDate;
  });

  // Create Unique Department List
  const departmentArray = activeJobs?.map((job) => ({
    label: job.node.department.label,
    value: job.node.department.value,
  }));
  departmentArray.unshift({ label: "All Department", value: "all-department" });

  const uniqueDepartmentArray = Array.from(
    new Map(departmentArray.map((item) => [item.value, item])).values()
  );

  // Create Unique Country List
  const countryArray = activeJobs.map((job) => ({
    label: job.node.location.label,
    value: job.node.location.value,
  }));
  countryArray.unshift({ label: "All Location", value: "all-location" });

  const uniqueCountryArray = Array.from(
    new Map(countryArray.map((item) => [item.value, item])).values()
  );

  // State for Filters
  const [selectedDepartment, setSelectedDepartment] = useState("all-department");
  const [selectedLocation, setSelectedLocation] = useState("all-location");

  // Filter Jobs based on selected filters
  const filteredJobs = activeJobs.filter((job) => {
    const matchesDepartment =
      selectedDepartment === "all-department" || job.node.department.value === selectedDepartment;
    const matchesLocation =
      selectedLocation === "all-location" || job.node.location.value === selectedLocation;

    return matchesDepartment && matchesLocation;
  });

  return (
    <section className="bg-surface py-[50px] md:py-[100px]">
      {activeJobs.length ? (
        <div className="container">
          <div className="flex flex-col gap-5 md:gap-[30px] lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[640px]" data-aos="fade-up">
              <SectionHeading>{sectionTitle}</SectionHeading>
            </div>
            <CurrentOpeningFilter
              departments={uniqueDepartmentArray}
              country={uniqueCountryArray}
              selectedDepartment={selectedDepartment}
              selectedLocation={selectedLocation}
              onDepartmentChange={setSelectedDepartment}
              onLocationChange={setSelectedLocation}
            />
          </div>
          <div className="col-span-1 mt-[30px] grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-1 lg:gap-0">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => <CurrentOpeningCard key={index} card={job} />)
            ) : (
              <p className="text-center text-gray-600">No jobs found for the selected filters.</p>
            )}
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="mb-5 flex flex-col items-center justify-center gap-[10px] md:mb-10">
            <div data-aos="fade-up">
              <SectionHeading>{filteredJobs.length < 1 ? "No Vacancy" : sectionTitle}</SectionHeading>
            </div>
            <p data-aos="fade-up" className="text-center text-base font-normal leading-[26px] text-gray-600 max-w-[700px]">
              We currently don’t have any job openings at the moment. However, if you don’t see a
              suitable position available, feel free to send us your updated resume—we’d love to
              keep it on file for future opportunities!
            </p>
          </div>
          <ApplyNowForm />
        </div>
      )}
    </section>
  );
}

export default CurrentOpeningSection;
