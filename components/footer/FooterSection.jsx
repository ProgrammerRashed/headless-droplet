import FooterBottom from "./FooterBottom";
import FooterLinks from "./FooterLinks";
import FooterTop from "./FooterTop";

function FooterSection({
  footerLogo,
  footerDonation,
  navigations,
  footerBottom,
}) {
  return (
    <footer className="bg-dark-dark pb-6 pt-10 md:pb-0">
      <div className="container">
        <div className="flex w-full flex-col">
          <FooterTop footerLogo={footerLogo} footerDonation={footerDonation} />
          <FooterLinks navigations={navigations} />
          <FooterBottom footerBottom={footerBottom} />
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
