import AddressAndMap from "../addressAndMap/AddressAndMap";
import BangladeshContactUsForm from "../bangladeshContactUsForm/BangladeshContactUsForm";

function BangladeshContactUsSection({ data }) {
  const { address } = data;
  return (
    <section className="py-[50px] md:py-[100px]">
      <div className="container">
        <div className="flex flex-col gap-10 md:gap-[50px] 0.5xl:flex-row">
          <BangladeshContactUsForm />
          <AddressAndMap address={address} />
        </div>
      </div>
    </section>
  );
}

export default BangladeshContactUsSection;
