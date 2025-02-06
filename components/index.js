import HeroSection from "./heroSection/HeroSection";
import AboutSAFSection from "./homePage/aboutSAF/AboutSAFSection";
import CounterSection from "./homePage/counterSection/CounterSection";
import GlobalPresence from "./homePage/globalPresence/GlobalPresence";
import MissionVissionSection from "./homePage/missionVission/MissionVissionSection";
import OurWorkSection from "./homePage/ourWork/OurWorkSection";



const blockComponentsMapping = {
  'carbon-fields/global-presence': GlobalPresence,
  'carbon-fields/hero-section': HeroSection,
  'carbon-fields/our-work-section': OurWorkSection,
  'carbon-fields/about-saf-section': AboutSAFSection,
  'carbon-fields/mission-vision-section': MissionVissionSection,
  'carbon-fields/counter-section': CounterSection,
 
};

export default blockComponentsMapping;
