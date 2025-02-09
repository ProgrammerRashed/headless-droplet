import AboutCountrySection from "./bangladeshPage/aboutCountrysection/AboutCountrySection";
import LocalMapSection from "./bangladeshPage/localMapSection/LocalMapSection";
import OurImpactSection from "./bangladeshPage/ourImpact/OurImpactSection";
import HeroSection from "./heroSection/HeroSection";
import SecondaryBanner from "./heroSection/SecondaryBanner";
import AboutSAFSection from "./homePage/aboutSAF/AboutSAFSection";
import CounterSection from "./homePage/counterSection/CounterSection";
import GlobalPresence from "./homePage/globalPresence/GlobalPresence";
import MissionVissionSection from "./homePage/missionVission/MissionVissionSection";
import OurWorkSection from "./homePage/ourWork/OurWorkSection";
import VideosSection from "./homePage/videosSection.jsx/VideosSection";
import MainBlogsSection from "./shared/blogsAndInsightsSection/MainBlogsSection";
import CtaSection from "./shared/ctaSection/CtaSection";
import DirectorsSaySection from "./shared/directorSay/DirectorsSaySection";
import TeamGridSection from "./shared/leadershipGridSection/TeamGridSection";
import OurPartnersSections from "./shared/ourPartnersSection/OurPartnersSections";
import OurValuesSection from "./shared/ourValuesSection/OurValuesSection";
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
  'carbon-fields/cta-section': CtaSection,
  'carbon-fields/secondary-banner': SecondaryBanner,
  'carbon-fields/about-country-section': AboutCountrySection,
  'carbon-fields/our-impact-section': OurImpactSection,
  'carbon-fields/our-values-section': OurValuesSection,
  'carbon-fields/local-map-section': LocalMapSection,
  'carbon-fields/team-grid-section': TeamGridSection,
  
 
};

export default blockComponentsMapping;
