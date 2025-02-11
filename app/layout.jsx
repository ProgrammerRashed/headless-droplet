import { Poppins } from "next/font/google";
import "./globals.css";
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

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body
          className={`${poppins.variable} relative font-poppins antialiased`}
        >
          <AOSWrapper>
            {children}
          </AOSWrapper>
        </body>
      </ReactLenis>
    </html>
  );
}
