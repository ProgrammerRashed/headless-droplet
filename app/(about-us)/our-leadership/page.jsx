import SecondaryBanner from "@/components/heroSection/SecondaryBanner";
import DirectorsDetailsSection from "@/components/ourLeadershipPage/directorsDetailsSection/DirectorsDetailsSection";
import LeadershipGridSection from "@/components/ourLeadershipPage/leadershipGridSection/LeadershipGridSection";

function OurLeadershipPage() {
  return (
    <>
      <SecondaryBanner
        sectionHeading="Our Leadership"
        bannerCover="/hero-banners/our-leadership.jpg"
      />
      <DirectorsDetailsSection
        imageLink="/directors-say/directors-avatar.png"
        directorName="Simon Winter"
        role="Executive Director &#45; SAF HQ"
        about="Lorem ipsum dolor sit amet consectetur. Tempor ut enim aliquam viverra interdum.  Diam cursus pharetra netus vitae augue pharetra lacus. Non aliquet orci feugiat turpis ipsum sed. Mauris porta bibendum ipsum amet eget. Sed vestibulum quis erat fermentum risus sed bibendum pellentesque. Commodo ac elit enim nulla nunc egestas nullam duis. Nunc dis feugiat ullamcorper aliquam. Proin fringilla quam morbi velit amet massa in Eget ut nibh turpis tempus pellentesque consequat habitant ultrices nunc."
      />
      <LeadershipGridSection
        sectionTitle="Our Leadership Team"
        leaders={[
          {
            id: crypto.randomUUID(),
            leaderName: "Farhad Zamil",
            role: "Executive Director - SAF Bangladesh",
            imageLink: "/our-leaders/leader-1.png",
            details:
              "Farhad Zamil joined the Syngenta Foundation in 2011 as Country Director and now serves as the Executive Director of SAF Bangladesh. Before joining the foundation, he managed the private sector potato development program in Bangladesh for a US-based non-profit organization Action for Enterprise. Farhad has over 20 years of working experience with leading International development organizations like BRAC, CARE, iDE, AFE, and UN agencies like FAO and UNDP in various capacities of program development, implementation management, partnerships, and technical backstopping. He works in a wider landscape of agriculture, food and nutrition systems, agribusiness promotion, and private-sector engagement. Farhad holds a Master’s in Horticulture from the Bangladesh Agricultural University, a Master’s in Business Administration from the Southeast University, and a Postgraduate Diploma in International Relations from the University of Dhaka. He was conferred Honorary Doctorate in Business Administration by Commonwealth University in 2020 and was also awarded Food 2.0 - Outstanding Leadership Award in 2022 for his significant contribution to sustainable development and poverty reduction in developing countries like Bangladesh. Farhad likes promoting new ideas and concepts, fostering creativity and innovation to change the livelihoods of farmers, and agricultural transformation in developing countries.",
          },
          {
            id: crypto.randomUUID(),
            leaderName: "Rajendra Jog",
            role: "Executive Director - SAF India ",
            imageLink: "/our-leaders/leader-2.png",
            details:
              "Rajendra was the CEO of the Agri-Entrepreneur (AE) Growth Foundation since its inception in 2019, as well as Senior Advisor to Syngenta Foundation India (SFI). He was instrumental in setting up our SFI office and the AE training facility in Pune. From 2018-to 2022, Rajendra was also CEO of the Indo-Swiss Centre of Excellence there.  He previously worked for more than three decades at Syngenta and its legacy companies. His leadership positions there included Head of Engineering & Projects APAC, Head of Supply Chain South Asia, and Head of Toll Manufacturing Asia-Pacific. From 1995-to 97, Rajendra worked at a German manufacturing facility near the company headquarters in Switzerland. He holds an Engineering degree in Instrumentation & Control Systems and is an alumnus of the two-year Supply Chain Management course at Warwick University, UK. As country Director (Syngenta Foundation India), Rajendra is now responsible for leading the Foundation team to scale up of Agri Entrepreneur program across various states to help millions of smallholder farmers significantly increase their income while creating sustainable livelihoods for tens of thousands of unemployed rural youth.",
          },
          {
            id: crypto.randomUUID(),
            leaderName: "Lucy Mutheu Kioko",
            role: "Executive Director - SAF Africa",
            imageLink: "/our-leaders/leader-3.png",
            details:
              "Lucy joined SFSA in January 2022 and now serves as the Executive Director of SAF Africa. She has more than 15 years experience of developing agricultural market systems at NGOs and in the private sector across East and Southern Africa. Lucy’s work has covered, for example, value chain upgrading, commodity trading, social and environmental sustainability, digital technologies, and climate-smart agriculture. Before coming to the Foundation, she was Deputy Director of Gatsby Africa’s Kenya Commercial Forestry Program. Lucy has also worked for Mercy Corps, Kenya Cooperative Coffee Exporters Group, TechnoServe, and Farm Africa. She holds a BSc in Agriculture from the University of Nairobi, a BA and MA in Development Studies from the University of South Africa, and a Diploma from the Kenya Institute of Management. Lucy is passionate about people and is driven by making a difference in smallholders’ lives. In her free time, she likes to read, cook and watch documentaries. Read Lucy's April 2022 interview.",
          },
        ]}
      />
    </>
  );
}

export default OurLeadershipPage;
