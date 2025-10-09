'use client'
import Header from "@/common/header/Header";
import Sidebar from "@/common/sidebar";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
     <div className="flex bg-[#f9f9f9] h-screen w-screen max-w-[120rem] mx-auto overflow-hidden">
      <Sidebar isSidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col h-full min-w-0">
        <Header />
        <main className="flex-1 p-4 overflow-auto min-w-0">
          {children}
        </main>
      </div>
    </div>
      
  );
}
