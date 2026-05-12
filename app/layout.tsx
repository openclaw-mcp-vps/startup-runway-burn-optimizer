import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RunwayAI — Optimize Startup Burn Rate",
  description: "Analyze spending patterns and get AI-powered cost-cut suggestions to extend your startup runway without hurting growth."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6e583cee-d5f0-4f5c-924f-1b55772fe305"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
