import HeroSection from "./heroSection/HeroSection";
import AboutSAFSection from "./homePage/aboutSAF/AboutSAFSection";
import GlobalPresence from "./homePage/globalPresence/GlobalPresence";
import OurWorkSection from "./homePage/ourWork/OurWorkSection";



const blockComponentsMapping = {
  'carbon-fields/global-presence': GlobalPresence,
  'carbon-fields/hero-section': HeroSection,
  'carbon-fields/our-work-section': OurWorkSection,
  'carbon-fields/about-saf-section': AboutSAFSection,
 
};

export default blockComponentsMapping;
