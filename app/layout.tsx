import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inioluwa Rhoda & Adeboye Amos | Wedding Celebration",
  description:
    "Celebrate the wedding of Inioluwa Rhoda and Adeboye Amos in Ijebu Igbo on Friday, 19 June 2026 and Saturday, 20 June 2026.",
  openGraph: {
    title: "Inioluwa Rhoda & Adeboye Amos | Wedding Celebration",
    description:
      "Celebrate the wedding of Inioluwa Rhoda and Adeboye Amos in Ijebu Igbo on Friday, 19 June 2026 and Saturday, 20 June 2026.",
    url: "https://ini-ade.vercel.app/", // 👈 replace with your actual URL
    siteName: "#IniAde26",
    images: [
      {
        url: "https://ini-ade.vercel.app/ini-ade-invitation.jpeg", // 👈 same URL
        width: 853,
        height: 1280,
        alt: "Inioluwa Rhoda & Adeboye Amos Wedding Invitation",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}