import Image from "next/image";

function FooterSection() {
  return (
    <section className="bg-gray-900 pt-10">
      <div className="container">
        <Image
          src="/logo.png"
          alt="SAF logo"
          width={284}
          height={60}
          className="h-auto w-[203px] object-contain"
        />
      </div>
    </section>
  );
}

export default FooterSection;
