import AddressAndMap from "../addressAndMap/AddressAndMap";
import CountryContactUsForm from "../bangladeshContactUsForm/CountryContactUsForm";

function CountryContactUsSection({ data }) {
  const {section_heading, section_description } = data.data
  const rawAddress = data?.data?.address[0]
  const mapLink = rawAddress?.map_link
  const srcMatch = mapLink.match(/src="([^"]+)"/);
  const srcValue = srcMatch ? srcMatch[1] : null;
  const address = {
    addressHeading: rawAddress.address_heading,
    address: rawAddress.address,
    phone: rawAddress.phone,
    email: rawAddress.email,
    map_link: srcValue
  }
  return (
    <section className="py-[50px] md:py-[100px]">
      <div className="container">
        <div className="flex flex-col gap-10 md:gap-[50px] 0.5xl:flex-row">
          <CountryContactUsForm section_heading={section_heading} section_description={section_description}/>
          <AddressAndMap address={address} />
        </div>
      </div>
    </section>
  );
}

export default CountryContactUsSection;
