import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "./components/SmoothScroll/SmoothScrolling";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Loopify Subscriptions: Grow Your Subscription Business Effortlessly",
  description:
    "Effortlessly manage your subscription business with Loopify Subscriptions. Automate tasks, streamline operations, and deliver exceptional customer experiences. Grow your business with Loopify - the all-in-one subscription management platform. Contact us today for a personalized demo and see how Loopify can help you thrive.",
  keywords: [
    "best subscription management software",
    "subscription management software for small business",
    "automate subscription business",
    "streamline subscription operations",
    "improve customer experience for subscriptions",
    "grow subscription business",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon.png"
          type="image/svg+xml"
          sizes="16x16 32x32 48x48"
        />

        <meta
          property="og:image"
          // content="https://bmcglobal.co/linkImageWhatsApp.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
      </head>
      <body className={inter.className}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
