import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import AppSidebar from "@/components/AppSidebar";
import ChatHeader from "@/components/ChatHeader";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="h-screen flex bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <ChatHeader />
          <main className="flex-1 overflow-hidden">
            {children}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;