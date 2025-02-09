import HeroSection from "./heroSection/HeroSection";
import AboutSAFSection from "./homePage/aboutSAF/AboutSAFSection";
import CounterSection from "./homePage/counterSection/CounterSection";
import GlobalPresence from "./homePage/globalPresence/GlobalPresence";
import MissionVissionSection from "./homePage/missionVission/MissionVissionSection";
import OurWorkSection from "./homePage/ourWork/OurWorkSection";
import VideosSection from "./homePage/videosSection.jsx/VideosSection";
import MainBlogsSection from "./shared/blogsAndInsightsSection/MainBlogsSection";
import DirectorsSaySection from "./shared/directorSay/DirectorsSaySection";
import OurPartnersSections from "./shared/ourPartnersSection/OurPartnersSections";
import SDGSContributionSection from "./shared/sdgsContributionSection/SDGSContributionSection";



const blockComponentsMapping = {
  'carbon-fields/global-presence': GlobalPresence,
  'carbon-fields/hero-section': HeroSection,
  'carbon-fields/our-work-section': OurWorkSection,
  'carbon-fields/about-saf-section': AboutSAFSection,
  'carbon-fields/mission-vision-section': MissionVissionSection,
  'carbon-fields/counter-section': CounterSection,
  'carbon-fields/directors-say-section': DirectorsSaySection,
  'carbon-fields/home-videos-section': VideosSection,
  'carbon-fields/sdgs-contribution-section': SDGSContributionSection,
  'carbon-fields/our-partners-section': OurPartnersSections,
  'carbon-fields/blogs-section': MainBlogsSection,
 
};

export default blockComponentsMapping;
