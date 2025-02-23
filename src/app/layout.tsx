import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ThemeControls from "@/components/ThemeControls";
import ProgressTracker from "@/components/ProgressTracker";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LLMShowcase - Learn About AI & Language Models",
  description: "Explore the world of Large Language Models (LLMs) and Artificial Intelligence. Learn about their capabilities, implications, and impact on society.",
  keywords: "LLM, AI, artificial intelligence, machine learning, language models, education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          <div className="flex flex-col min-h-screen transition-colors duration-200">
            <Navigation />
            <ProgressTracker />
            <main className="container mx-auto px-4 py-8 flex-grow [data-font-size='small']:text-sm [data-font-size='large']:text-lg">
              {children}
            </main>
            <footer className="border-t mt-20 dark:border-gray-800">
              <div className="container mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} LLMShowcase. Educational platform for AI and Language Models.
              </div>
            </footer>
            <ThemeControls />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
