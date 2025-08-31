import { Search, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

const TopHeader = () => {
  return (
    <header className="h-14 border-b bg-card/80 backdrop-blur-sm flex items-center justify-end px-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" className="text-sm text-muted-foreground">
          Sign in or create an account
        </Button>
        <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
          Unlock Pro Search and History
        </Button>
      </div>
    </header>
  );
};

export default TopHeader;