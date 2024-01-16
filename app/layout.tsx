import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
import "./../styles/main.scss";
import "react-quill/dist/quill.snow.css";
import { Providers } from "./providers";

const noto = Noto_Sans_Bengali({
  variable: "--font-noto",
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "News Portal",
  description: "Todays Latest News",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  <meta name="robots" content="noindex,nofollow" />;

  return (
    <html lang="en">
      <body className={noto.className} suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
