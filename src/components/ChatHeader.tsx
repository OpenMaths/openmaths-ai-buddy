import { Button } from "@/components/ui/button";

const ChatHeader = () => {
  return (
    <header className="h-16 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-full items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <img
            src="/lovable-uploads/73b9e6a2-78c4-4dba-b0c9-1f6148c296be.png"
            alt="OpenMaths AI"
            className="h-8 w-auto object-contain"
          />
          <div>
            <h1 className="text-lg font-semibold text-foreground">OpenMaths AI</h1>
            <p className="text-xs text-muted-foreground">Your intelligent math tutor</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-sm text-muted-foreground">
            Sign in or create an account
          </Button>
          <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
            Unlock Pro Search and History
          </Button>
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;