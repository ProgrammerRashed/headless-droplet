import BackButton from "@/components/shared/BackButton";
import ApplyNowForm from "./ApplyNowForm";

function ApplyNowSection({data}) {
  return (
    <section className="py-[88px] pb-[50px] lg:py-[156px] lg:pb-[100]">
      <div className="container">
        <BackButton />
        <ApplyNowForm
          title="Application form"
          details={
            "We’re glad you’re here. Fill out this form and one of our client representatives will get back to you."
          }
          position={data?.title}
        />
      </div>
    </section>
  );
}

export default ApplyNowSection;
