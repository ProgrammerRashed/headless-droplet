
import { getPageData } from "@/graphql/Components";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

async function DonationPage() {
  const pageData = await getPageData("donation-page");
  return (<RenderBlocksHelper blocks={pageData}/>);
 
}

export default DonationPage;

  {/* 
  <DonationSection
    data={{
      donationTitle: "Donation Page",
      bannerImage: "/donation-page/donation-about-banner.jpg",
      donationSubTitle: "Join us in making tomorrow better",
      country: [
        {
        value: "Bangladesh",
        "slug": "bangladesh",
        },
         {
        value: "Kenay",
        "slug": "kenya",
        }
        {
        value: switz Switzerland",
        }
      ]
      donationOptions: [
        {
          value: "Monthly Gift",
          "slug": "monthly-gift",
        },
        {
          value: "Donation",
          "slug": "donation",
        },

    }}
  />
  <SideBySideBulletPoints
    data={{
      bannerImage: "/donation-page/why-donate.jpg",
      title: "Why donate to SAF?",
      description:
        "Lorem ipsum dolor sit amet consectetur. Turpis malesuada tincidunt fames bibendum id vitae. Pretium laoreet arcu urna mattis mattis lectus massa viverra ut. Vitae in sed arcu augue.",
      points: [
        {
          id: crypto.randomUUID(),
          point:
            "Lectus gravida sed cras tempus pretium dolor tempor hendrerit.",
        },
        {
          id: crypto.randomUUID(),
          point:
            "Lobortis in mi ac leo ullamcorper commodo quis diam quis. Tempus ut ultricies nunc a gravida. Arcu eu vitae interdum aenean blandit odio justo in. Semper purus mauris tempus auctor sed tincidunt ornare. Scelerisque sit euismod netus mattis.",
        },
        {
          id: crypto.randomUUID(),
          point:
            "Sem orci dictum interdum eget mi semper ornare pretium vitae. Blandit sed facilisi vel semper pellentesque libero ut.",
        },
      ],
      buttonPrimaryDetails: { title: "Contact Us to Donate", link: "/" },
    }}
  />
  <CardSliderSection
    data={{
      sectionTitle: "Donors' voices of impact: how you're helping children",
      testimonials: [
        {
          id: crypto.randomUUID(),
          name: "Simon Winter",
          position: "Executive Director at SFSA",
          quote:
            "Tellus fusce lorem tristique odio. Tristique mauris malesuada blandit orci sed. Pretium gravida eleifend odio condimentum consequat scelerisque risus enim faucibus. Faucib ligula amet ultrices purus curabitur placerat ultrices lacus.",
        },
        {
          id: crypto.randomUUID(),
          name: "Simon Winter",
          position: "Executive Director at SFSA",
          quote:
            "Tellus fusce lorem tristique odio. Tristique mauris malesuada blandit orci sed. Pretium gravida eleifend odio condimentum consequat scelerisque risus enim faucibus. Faucib ligula amet ultrices purus curabitur placerat ultrices lacus.",
        },
        {
          id: crypto.randomUUID(),
          name: "Simon Winter",
          position: "Executive Director at SFSA",
          quote:
            "Tellus fusce lorem tristique odio. Tristique mauris malesuada blandit orci sed. Pretium gravida eleifend odio condimentum consequat scelerisque risus enim faucibus. Faucib ligula amet ultrices purus curabitur placerat ultrices lacus.",
        },
        {
          id: crypto.randomUUID(),
          name: "Simon Winter",
          position: "Executive Director at SFSA",
          quote:
            "Tellus fusce lorem tristique odio. Tristique mauris malesuada blandit orci sed. Pretium gravida eleifend odio condimentum consequat scelerisque risus enim faucibus. Faucib ligula amet ultrices purus curabitur placerat ultrices lacus.",
        },
      ],
      buttonDetails: { title: "Contact Us to Donate", link: "/" },
    }}
  />
  <MonthlyGiftSection
    data={{
      sectionTitle: "It's your monthly gift that gives you hope",
      cardItems: [
        {
          id: crypto.randomUUID(),
          imageLink: "/donation-page/monthly-gift-card-banner.png",
          category: "Agriculture",
          title:
            "Helping children like Sanad fight hunger and malnutrition",
          details:
            "Lorem ipsum dolor sit amet consectetur. Turpis malesuada tincidunt fames bibendum id vitae. Pretium laoreet arcu urna mattis mattis lectus massa viverra ut. Vitae in sed arcu augue porta viverra tristique eu. Porta in arcu neque metus pulvinar vulputate tortor.",
          buttonDetails: {
            title: "Read More",
            link: "/",
          },
        },
        {
          id: crypto.randomUUID(),
          imageLink: "/donation-page/monthly-gift-card-banner.png",
          category: "Agriculture",
          title:
            "Helping children like Sanad fight hunger and malnutrition",
          details:
            "Lorem ipsum dolor sit amet consectetur. Turpis malesuada tincidunt fames bibendum id vitae. Pretium laoreet arcu urna mattis mattis lectus massa viverra ut. Vitae in sed arcu augue porta viverra tristique eu. Porta in arcu neque metus pulvinar vulputate tortor.",
          buttonDetails: {
            title: "Read More",
            link: "/",
          },
        },
        {
          id: crypto.randomUUID(),
          imageLink: "/donation-page/monthly-gift-card-banner.png",
          category: "Agriculture",
          title:
            "Helping children like Sanad fight hunger and malnutrition",
          details:
            "Lorem ipsum dolor sit amet consectetur. Turpis malesuada tincidunt fames bibendum id vitae. Pretium laoreet arcu urna mattis mattis lectus massa viverra ut. Vitae in sed arcu augue porta viverra tristique eu. Porta in arcu neque metus pulvinar vulputate tortor.",
          buttonDetails: {
            title: "Read More",
            link: "/",
          },
        },
        {
          id: crypto.randomUUID(),
          imageLink: "/donation-page/monthly-gift-card-banner.png",
          category: "Agriculture",
          title:
            "Helping children like Sanad fight hunger and malnutrition",
          details:
            "Lorem ipsum dolor sit amet consectetur. Turpis malesuada tincidunt fames bibendum id vitae. Pretium laoreet arcu urna mattis mattis lectus massa viverra ut. Vitae in sed arcu augue porta viverra tristique eu. Porta in arcu neque metus pulvinar vulputate tortor.",
          buttonDetails: {
            title: "Read More",
            link: "/",
          },
        },
      ],
      buttonDetails: { title: "Contact Us to Donate", link: "/" },
    }}
  />
  <FAQSection
    data={{
      sectionTitle: "Frequently Asked Questions (FAQ)",
      faqs: [
        {
          id: crypto.randomUUID(),
          question: "What is SAF?",
          answer:
            "At SAF, culture is the foundation of our success. Our team thrives on a shared commitment to innovation, integrity, and community.",
        },
        {
          id: crypto.randomUUID(),
          question: "What does SAF do?",
          answer:
            "At SAF, culture is the foundation of our success. Our team thrives on a shared commitment to innovation, integrity, and community.",
        },
        {
          id: crypto.randomUUID(),
          question: "Where does SAF get its funding?",
          answer:
            "At SAF, culture is the foundation of our success. Our team thrives on a shared commitment to innovation, integrity, and community.",
        },
        {
          id: crypto.randomUUID(),
          question: "How can I make a donation to SAF?",
          answer:
            "At SAF, culture is the foundation of our success. Our team thrives on a shared commitment to innovation, integrity, and community.",
        },
        {
          id: crypto.randomUUID(),
          question: "What is SAF?",
          answer:
            "At SAF, culture is the foundation of our success. Our team thrives on a shared commitment to innovation, integrity, and community.",
        },
        {
          id: crypto.randomUUID(),
          question: "What does SAF do?",
          answer:
            "At SAF, culture is the foundation of our success. Our team thrives on a shared commitment to innovation, integrity, and community.",
        },
        {
          id: crypto.randomUUID(),
          question: "Where does SAF get its funding?",
          answer:
            "At SAF, culture is the foundation of our success. Our team thrives on a shared commitment to innovation, integrity, and community.",
        },
        {
          id: crypto.randomUUID(),
          question: "How can I make a donation to SAF?",
          answer:
            "At SAF, culture is the foundation of our success. Our team thrives on a shared commitment to innovation, integrity, and community.",
        },
      ],
    }}
  /> */}