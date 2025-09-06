import { X, Home, Plus, Globe, BookOpen, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MobileNavOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  activeItem: string;
  onItemClick: (itemId: string) => void;
}

const MobileNavOverlay = ({ isOpen, onClose, activeItem, onItemClick }: MobileNavOverlayProps) => {
  const menuItems = [
    { icon: Home, label: "Home", id: "Home" },
    { icon: Plus, label: "New Thread", id: "New Thread" },
    { icon: Globe, label: "Discover", id: "Discover" },
    { icon: BookOpen, label: "Library", id: "Library" },
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 z-50 md:hidden"
        onClick={onClose}
      />
      
      {/* Overlay Content */}
      <div className={cn(
        "fixed left-0 top-0 h-full w-80 bg-background border-r border-border z-50 transform transition-transform duration-300 ease-in-out md:hidden",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-semibold">Navigation</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 py-6">
          <div className="space-y-2 px-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-3 h-12 px-4 text-left",
                    activeItem === item.id
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                  onClick={() => {
                    onItemClick(item.id);
                    onClose();
                  }}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-base">{item.label}</span>
                </Button>
              );
            })}
          </div>
        </nav>

        {/* Profile at Bottom */}
        <div className="p-4 border-t border-border">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 h-12 px-4 text-left text-muted-foreground hover:text-foreground hover:bg-accent"
            onClick={() => {
              onItemClick("Profile");
              onClose();
            }}
          >
            <User className="h-5 w-5" />
            <span className="text-base">Profile</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default MobileNavOverlay;