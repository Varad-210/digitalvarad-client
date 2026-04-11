export const metadata = {
  title: "High Income Skills Builder | VaradBuilds",
  description: "Learn high income skills with VaradBuilds — Bizgurukul-certified affiliate marketing, freelancing and digital skills courses for students in India.",
  keywords: "high income skills, bizgurukul, varadbuilds, affiliate marketing india",
  openGraph: {
    title: "High Income Skills Builder | VaradBuilds",
    description: "Bizgurukul-certified high income skills courses for Indian students.",
    url: "https://digitalvarad.vercel.app",
    type: "website",
  },
}

import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
