import { Home, Plus, Globe, BookOpen, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const menuItems = [
    { icon: Home, label: "Home", isActive: true },
    { icon: Plus, label: "New Thread" },
    { icon: Globe, label: "Discover" },
    { icon: BookOpen, label: "Library" },
  ];

  return (
    <div className={cn("w-16 border-r bg-card flex flex-col", className)}>
      {/* Logo */}
      <div className="h-16 flex items-center justify-center border-b">
        <img 
          src="/lovable-uploads/7116060b-c9bb-43d7-9490-a727e85f1feb.png" 
          alt="OpenMaths AI" 
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
                  item.isActive 
                    ? "bg-primary/10 text-primary hover:bg-primary/20" 
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
                title={item.label}
              >
                <Icon className="h-5 w-5" />
              </Button>
            );
          })}
        </div>
      </nav>

      {/* Bottom actions */}
      <div className="p-2 border-t space-y-1">
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
    </div>
  );
};

export default Sidebar;