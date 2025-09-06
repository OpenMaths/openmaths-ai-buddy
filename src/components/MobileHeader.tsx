import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileHeaderProps {
  onMenuToggle: () => void;
}

const MobileHeader = ({ onMenuToggle }: MobileHeaderProps) => {
  return (
    <div className="block md:hidden fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="flex items-center gap-3 p-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuToggle}
          className="h-10 w-10"
        >
          <Menu className="h-6 w-6" />
        </Button>
        
        <img 
          src="/lovable-uploads/55babc2c-ec94-466f-bfa8-7eb9a1fb3ed6.png" 
          alt="AI Math Tutor Logo" 
          className="h-8 w-8 object-contain"
        />
      </div>
    </div>
  );
};

export default MobileHeader;