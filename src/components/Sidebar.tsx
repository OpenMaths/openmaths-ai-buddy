import { Home, Plus, Globe, BookOpen, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatHistory from "./ChatHistory";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const navigate = useNavigate();
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
    },
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
    <div className={cn("w-16 flex flex-col", className)} style={{ backgroundColor: '#1E1E1E' }}>
      {/* Logo */}
      <button 
        onClick={() => navigate("/about")}
        className="h-16 flex items-center justify-center hover:bg-secondary/50 transition-colors cursor-pointer"
        title="About OpenMath"
      >
        <img 
          src="/lovable-uploads/55babc2c-ec94-466f-bfa8-7eb9a1fb3ed6.png" 
          alt="AI Math Tutor Logo" 
          className="h-8 w-8 object-contain"
        />
      </button>

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
                    ? "bg-primary/10 text-white hover:bg-primary/20" 
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
                title={item.label}
                onClick={item.onClick}
              >
                <Icon className="h-7 w-7" />
              </Button>
            );
          })}
        </div>
      </nav>

      {/* Bottom actions */}
      <div className="p-2 space-y-1">
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
                  ? "bg-primary/10 text-white hover:bg-primary/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              )}
              title={item.label}
              onClick={item.onClick}
            >
              <Icon className="h-7 w-7" />
            </Button>
          );
        })}
      </div>

      <ChatHistory 
        isOpen={isChatHistoryOpen} 
        onClose={() => setIsChatHistoryOpen(false)} 
      />
    </div>
  );
};

export default Sidebar;