import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChangelogAI – AI-Generated Changelogs from Git Commits",
  description: "Automatically generate user-friendly changelogs from your git commits using AI. Perfect for open source maintainers, product managers, and dev teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0b8482ee-a8a1-4706-8dad-f5fe3c7d89d9"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
