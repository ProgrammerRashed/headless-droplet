import FooterBottom from "./FooterBottom";
import FooterLinks from "./FooterLinks";
import FooterTop from "./FooterTop";

function FooterSection({ data }) {
  const footerLogo = data?.customNavigationBy?.footerLogo;
  const footerDonation = data?.customNavigationBy?.donationDetails[0];
  const socialLinks = data?.customNavigationBy?.socialLinks;
  const navigations = data?.customNavigationBy?.navigations;

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
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
