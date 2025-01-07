import { Poppins } from "next/font/google";
import "./globals.css";
import FooterSection from "@/components/footer/FooterSection";
import HeaderSection from "@/components/HeaderSection.jsx/HeaderSection";
import AOSWrapper from "@/utils/AOSWrapper";
import { ReactLenis } from "@/utils/lenis";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "SAF - Sustainable Agricultural Foundation",
  description:
    "A world where smallholders, communities, and nature thrive together",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body
          className={`${poppins.variable} relative font-poppins antialiased`}
        >
          <AOSWrapper>
            <HeaderSection
              logoLink="/saf-logo.svg"
              buttonDetails={{ title: "Contact Us", link: "/contact-us" }}
              navigations={[
                {
                  id: crypto.randomUUID(),
                  groupName: "About Us",
                  bannerImage: "/nav-images/nav-1.jpg",
                  childNavigations: [
                    {
                      id: crypto.randomUUID(),
                      title: "Who we are",
                      link: "/who-we-are",
                    },
                    {
                      id: crypto.randomUUID(),
                      title: "Our leadership",
                      link: "/our-leadership",
                    },
                    {
                      id: crypto.randomUUID(),
                      title: "Our history",
                      link: "/our-history",
                    },
                  ],
                },
                {
                  id: crypto.randomUUID(),
                  groupName: "Our Work",
                  bannerImage: "/nav-images/nav-2.jpg",
                  childNavigations: [
                    {
                      id: crypto.randomUUID(),
                      title: "Thematic Areas",
                      link: "/",
                    },
                    {
                      id: crypto.randomUUID(),
                      title: "Projects & Programs",
                      link: "/",
                    },
                    {
                      id: crypto.randomUUID(),
                      title: "Donors and Partners",
                      link: "/",
                    },
                  ],
                },
                {
                  id: crypto.randomUUID(),
                  groupName: "Global Presence",
                  bannerImage: "/nav-images/nav-3.jpg",
                  childNavigations: [
                    {
                      id: crypto.randomUUID(),
                      title: "Switzerland (HQ)",
                      link: "/",
                    },
                    {
                      id: crypto.randomUUID(),
                      title: "Bangladesh",
                      link: "/bangladesh",
                    },
                    {
                      id: crypto.randomUUID(),
                      title: "India",
                      link: "/",
                    },
                    {
                      id: crypto.randomUUID(),
                      title: "Kenya",
                      link: "/",
                    },
                  ],
                },
                {
                  id: crypto.randomUUID(),
                  groupName: "Our Impact",
                  bannerImage: "/nav-images/nav-4.jpg",
                  childNavigations: [
                    {
                      id: crypto.randomUUID(),
                      title: "Reports & Publications",
                      link: "/",
                    },
                    {
                      id: crypto.randomUUID(),
                      title: "Impact Stories",
                      link: "/",
                    },
                    {
                      id: crypto.randomUUID(),
                      title: "Blogs and article | media",
                      link: "/",
                    },
                    {
                      id: crypto.randomUUID(),
                      title: "Photo Gallery",
                      link: "/",
                    },
                    {
                      id: crypto.randomUUID(),
                      title: "Video Gallery",
                      link: "/",
                    },
                  ],
                },
                {
                  id: crypto.randomUUID(),
                  groupName: "Get Involved",
                  bannerImage: "/nav-images/nav-5.jpg",
                  childNavigations: [
                    {
                      id: crypto.randomUUID(),
                      title: "Our Culture",
                      link: "/",
                    },
                    {
                      id: crypto.randomUUID(),
                      title: "Career",
                      link: "/",
                    },
                    {
                      id: crypto.randomUUID(),
                      title: "Consultancy & EOI",
                      link: "/",
                    },
                    {
                      id: crypto.randomUUID(),
                      title: "Contact Us",
                      link: "/",
                    },
                  ],
                },
              ]}
              socialLinks={{
                facebook:
                  "https://www.facebook.com/p/Sustainable-Agriculture-Foundation-61568073779734",
                linkedIn:
                  "https://in.linkedin.com/company/sustainable-agriculture-foundation-saf",
                twitter: "https://x.com/Susagfoundation?",
                twitter: "https://x.com/Susagfoundation?",
                youtube: "https://www.youtube.com/@Susagfoundation",
              }}
            />
            {children}
            <FooterSection
              socialLinks={{
                facebook:
                  "https://www.facebook.com/p/Sustainable-Agriculture-Foundation-61568073779734",
                linkedIn:
                  "https://in.linkedin.com/company/sustainable-agriculture-foundation-saf",
                twitter: "https://x.com/Susagfoundation?",
                twitter: "https://x.com/Susagfoundation?",
                youtube: "https://www.youtube.com/@Susagfoundation",
              }}
              footerLogo="/saf-logo-footer.svg"
              footerDonation={{
                label: "You Can Help—Contribute Today!",
                btnDetails: {
                  title: "Donate",
                  link: "/",
                },
              }}
              buttonDetails={{ title: "Contact Us", link: "/contact-us" }}
              navigations={[
                {
                  id: crypto.randomUUID(),
                  groupName: "About Us",
                  childNavigations: [
                    {
                      id: crypto.randomUUID(),
                      title: "Who we are",
                      link: "/who-we-are",
                    },
                    {
                      id: crypto.randomUUID(),
                      title: "Our leadership",
                      link: "/our-leadership",
                    },
                    {
                      id: crypto.randomUUID(),
                      title: "Our history",
                      link: "/our-history",
                    },
                  ],
                },
                {
                  id: crypto.randomUUID(),
                  groupName: "Our Work",
                  childNavigations: [
                    {
                      id: crypto.randomUUID(),
                      title: "Thematic Areas",
                      link: "/",
                    },
                    {
                      id: crypto.randomUUID(),
                      title: "Projects & Programs",
                      link: "/",
                    },
                    {
                      id: crypto.randomUUID(),
                      title: "Donors and Partners",
                      link: "/",
                    },
                  ],
                },
                {
                  id: crypto.randomUUID(),
                  groupName: "Global Presence",
                  childNavigations: [
                    {
                      id: crypto.randomUUID(),
                      title: "Switzerland (HQ)",
                      link: "/",
                    },
                    {
                      id: crypto.randomUUID(),
                      title: "Bangladesh",
                      link: "/bangladesh",
                    },
                    {
                      id: crypto.randomUUID(),
                      title: "India",
                      link: "/",
                    },
                    {
                      id: crypto.randomUUID(),
                      title: "Kenya",
                      link: "/",
                    },
                  ],
                },
                {
                  id: crypto.randomUUID(),
                  groupName: "Our Impact",
                  childNavigations: [
                    {
                      id: crypto.randomUUID(),
                      title: "Reports & Publications",
                      link: "/",
                    },
                    {
                      id: crypto.randomUUID(),
                      title: "Impact Stories",
                      link: "/",
                    },
                    {
                      id: crypto.randomUUID(),
                      title: "Blogs and article | media",
                      link: "/",
                    },
                    {
                      id: crypto.randomUUID(),
                      title: "Photo Gallery",
                      link: "/",
                    },
                    {
                      id: crypto.randomUUID(),
                      title: "Video Gallery",
                      link: "/",
                    },
                  ],
                },
                {
                  id: crypto.randomUUID(),
                  groupName: "Get Involved",
                  childNavigations: [
                    {
                      id: crypto.randomUUID(),
                      title: "Our Culture",
                      link: "/",
                    },
                    {
                      id: crypto.randomUUID(),
                      title: "Career",
                      link: "/",
                    },
                    {
                      id: crypto.randomUUID(),
                      title: "Consultancy & EOI",
                      link: "/",
                    },
                    {
                      id: crypto.randomUUID(),
                      title: "Contact Us",
                      link: "/contact-us",
                    },
                  ],
                },
              ]}
              footerBottom={{
                navigations: [
                  {
                    id: crypto.randomUUID(),
                    title: "Privacy Notice",
                    link: "/",
                  },
                  {
                    id: crypto.randomUUID(),
                    title: "Tearms of Use",
                    link: "/",
                  },
                ],
              }}
            />
          </AOSWrapper>
        </body>
      </ReactLenis>
    </html>
  );
}
