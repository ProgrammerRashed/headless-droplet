import FooterBottom from "./FooterBottom";
import FooterLinks from "./FooterLinks";
import FooterTop from "./FooterTop";

function FooterSection({
  footerLogo,
  footerDonation,
  navigations,
  footerBottom,
  socialLinks,
}) {
  return (
    <footer className="bg-surface-dark pb-6 pt-10 md:pb-0">
      <div className="container">
        <div className="flex w-full flex-col">
          <FooterTop
            footerLogo={footerLogo}
            footerDonation={footerDonation}
            socialLinks={socialLinks}
          />
          <FooterLinks navigations={navigations} socialLinks={socialLinks} />
          <FooterBottom footerBottom={footerBottom} />
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
