// src/app/layout.tsx
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "EmoVibe",
  description: "Professional emotional companion — AI + Human"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-800">
        <Header />
        <main className="container mx-auto py-8 px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
