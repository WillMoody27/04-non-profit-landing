import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Community Impact | Empowering Lives Through Action",
  description:
    "A non-profit organization dedicated to creating positive change in our community through education, support services, and sustainable development programs.",
  keywords:
    "non-profit organization, community service, social impact, charitable organization, community development, volunteer opportunities, social services",
  openGraph: {
    title: "Community Impact | Empowering Lives Through Action",
    description:
      "A non-profit organization dedicated to creating positive change in our community through education, support services, and sustainable development programs.",
    url: "https://communityimpact.org",
    siteName: "Community Impact",
    images: [
      {
        url: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Community Impact Non-Profit Organization",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
