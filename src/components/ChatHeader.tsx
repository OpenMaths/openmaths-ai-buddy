import { Button } from "@/components/ui/button";
import { Plus, Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const ChatHeader = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <img 
                src="/lovable-uploads/7116060b-c9bb-43d7-9490-a727e85f1feb.png" 
                alt="OpenMaths AI" 
                className="h-8 w-8 object-contain"
              />
              <div className="absolute inset-0 bg-gradient-secondary opacity-20 rounded-full blur-sm"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                OpenMaths AI
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block">
                Your friendly math tutor
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="h-9 w-9"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          
          <Button variant="outline" size="sm" className="gap-2">
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">New Chat</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;