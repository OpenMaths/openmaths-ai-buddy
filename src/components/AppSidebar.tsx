import { useState } from "react";
import { Home, Plus, Globe, BookOpen, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChatHistory from "@/components/ChatHistory";
import { cn } from "@/lib/utils";

const AppSidebar = () => {
  const [isChatHistoryOpen, setIsChatHistoryOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [activeBottomItem, setActiveBottomItem] = useState("");

  const menuItems = [
    {
      icon: Home,
      label: "Home",
      id: "Home",
      onClick: () => setActiveItem("Home")
    },
    {
      icon: Plus,
      label: "New Thread",
      id: "New Thread",
      onClick: () => {
        setActiveItem("New Thread");
        setIsChatHistoryOpen(true);
      }
    },
    {
      icon: Globe,
      label: "Discover", 
      id: "Discover",
      onClick: () => setActiveItem("Discover")
    },
    {
      icon: BookOpen,
      label: "Library",
      id: "Library", 
      onClick: () => setActiveItem("Library")
    }
  ];

  const bottomItems = [
    {
      icon: Settings,
      label: "Settings",
      id: "Settings",
      onClick: () => setActiveBottomItem(activeBottomItem === "Settings" ? "" : "Settings")
    },
    {
      icon: User,
      label: "Profile", 
      id: "Profile",
      onClick: () => setActiveBottomItem(activeBottomItem === "Profile" ? "" : "Profile")
    }
  ];

  return (
    <>
      <div className="w-16 bg-sidebar border-r border-sidebar-border flex flex-col">
        {/* Logo */}
        <div className="h-16 flex items-center justify-center border-b border-sidebar-border">
          <img
            src="/lovable-uploads/55babc2c-ec94-466f-bfa8-7eb9a1fb3ed6.png"
            alt="AI Math Tutor Logo"
            className="h-8 w-8 object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4">
          <div className="space-y-1 px-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "w-12 h-12 rounded-xl transition-colors",
                    activeItem === item.id
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                  )}
                  title={item.label}
                  onClick={item.onClick}
                >
                  <Icon className="h-5 w-5" />
                </Button>
              );
            })}
          </div>
        </nav>

        {/* Bottom actions */}
        <div className="p-2 space-y-1 border-t border-sidebar-border">
          {bottomItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className={cn(
                  "w-12 h-12 rounded-xl transition-colors",
                  activeBottomItem === item.id
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                )}
                title={item.label}
                onClick={item.onClick}
              >
                <Icon className="h-5 w-5" />
              </Button>
            );
          })}
        </div>
      </div>

      <ChatHistory
        isOpen={isChatHistoryOpen}
        onClose={() => setIsChatHistoryOpen(false)}
      />
    </>
  );
};

export default AppSidebar;