import { Home, Plus, Globe, BookOpen, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import ChatHistory from "./ChatHistory";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [isChatHistoryOpen, setIsChatHistoryOpen] = useState(false);
  const menuItems = [
    { icon: Home, label: "Home", isActive: true, onClick: () => {} },
    { icon: Plus, label: "New Thread", onClick: () => setIsChatHistoryOpen(true) },
    { icon: Globe, label: "Discover", onClick: () => {} },
    { icon: BookOpen, label: "Library", onClick: () => {} },
  ];

  return (
    <div className={cn("w-16 flex flex-col shadow-lg", className)} style={{ backgroundColor: '#1E1E1E' }}>
      {/* Logo */}
      <div className="h-16 flex items-center justify-center">
        <img 
          src="/lovable-uploads/adfa9ea6-324a-4d1d-8ac1-45f836505465.png" 
          alt="AI Logo" 
          className="h-8 w-8 object-contain"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-2">
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
                  item.isActive 
                    ? "bg-primary/10 text-primary hover:bg-primary/20" 
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
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
      <div className="p-2 space-y-1">
        <Button
          variant="ghost"
          size="icon"
          className="w-12 h-12 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary/50"
          title="Settings"
        >
          <Settings className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="w-12 h-12 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary/50"
          title="Profile"
        >
          <User className="h-5 w-5" />
        </Button>
      </div>

      <ChatHistory 
        isOpen={isChatHistoryOpen} 
        onClose={() => setIsChatHistoryOpen(false)} 
      />
    </div>
  );
};

export default Sidebar;