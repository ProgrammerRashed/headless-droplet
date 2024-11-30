import FooterBottom from "./FooterBottom";
import FooterLinks from "./FooterLinks";
import FooterTop from "./FooterTop";

function FooterSection({ links }) {
  return (
    <footer className="bg-dark-dark pb-6 pt-10 md:pb-0">
      <div className="container">
        <div className="flex w-full flex-col">
          <FooterTop />
          <FooterLinks />
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
