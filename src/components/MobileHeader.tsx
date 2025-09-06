import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileHeaderProps {
  onMenuToggle: () => void;
}

const MobileHeader = ({ onMenuToggle }: MobileHeaderProps) => {
  return (
    <div className="block md:hidden fixed top-0 left-0 right-0 z-40">
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
          src="/lovable-uploads/477d526e-ebab-4cb5-befe-979a9532b3ba.png" 
          alt="Header Image" 
          className="h-8 w-auto object-contain"
        />
      </div>
    </div>
  );
};

export default MobileHeader;