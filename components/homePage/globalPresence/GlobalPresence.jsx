import React from "react";
import GlobalMap from "./GlobalMap";
import SectionHeading from "../../sectionHeader/SectionHeading";

import CountryListContainer from "./CountryListContainer";
import MapFooter from "./MapFooter";

function GlobalPresence({ sectionHeadline, countries, labels }) {
  return (
    <section className="my-[50px] md:my-[100px]">
      <div className="container">
        <div data-aos="fade-up">
          <SectionHeading className="mb-5 text-center md:mb-[50px]">
            {sectionHeadline}
          </SectionHeading>
        </div>
        <div className="mx-auto flex w-full max-w-[970px] flex-col items-center lg:flex-row lg:gap-20">
          <CountryListContainer countries={countries} />
          <div className="flex w-full flex-col items-center">
            <GlobalMap />
            <MapFooter labels={labels} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GlobalPresence;
