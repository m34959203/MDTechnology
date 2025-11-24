import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MDTechnology.ai - AI-решения для вашего бизнеса",
  description: "Создание сайтов с AI функционалом, умных чат-ботов и AI-агентов для автоматизации бизнес-процессов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
