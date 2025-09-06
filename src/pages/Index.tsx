import { useState } from "react";
import { ThemeProvider } from "next-themes";
import { Home, Plus, Globe, BookOpen, Settings, User, Menu } from "lucide-react";
import SearchBox from "@/components/SearchBox";
import ChatMessage from "@/components/ChatMessage";
import ChatHistory from "@/components/ChatHistory";
import MobileHeader from "@/components/MobileHeader";
import MobileNavOverlay from "@/components/MobileNavOverlay";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: string;
}
const Index = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isChatHistoryOpen, setIsChatHistoryOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [activeBottomItem, setActiveBottomItem] = useState("");
  const menuItems = [{
    icon: Home,
    label: "Home",
    id: "Home",
    onClick: () => setActiveItem("Home")
  }, {
    icon: Plus,
    label: "New Thread",
    id: "New Thread",
    onClick: () => {
      setActiveItem("New Thread");
      setIsChatHistoryOpen(true);
    }
  }, {
    icon: Globe,
    label: "Discover",
    id: "Discover",
    onClick: () => setActiveItem("Discover")
  }, {
    icon: BookOpen,
    label: "Library",
    id: "Library",
    onClick: () => setActiveItem("Library")
  }];
  const bottomItems = [{
    icon: Settings,
    label: "Settings",
    id: "Settings",
    onClick: () => setActiveBottomItem(activeBottomItem === "Settings" ? "" : "Settings")
  }, {
    icon: User,
    label: "Profile",
    id: "Profile",
    onClick: () => setActiveBottomItem(activeBottomItem === "Profile" ? "" : "Profile")
  }];
  const handleSearch = async (query: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: query,
      isUser: true,
      timestamp: new Date().toLocaleTimeString()
    };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: `I'll solve this math problem step by step for you!

**Problem:** ${query}

**Step 1: Understanding the Problem**
${query.includes("2x + 5 = 13") ? `
We have a linear equation: 2x + 5 = 13
Our goal is to find the value of x.

**Step 2: Isolate the variable term**
Subtract 5 from both sides:
2x + 5 - 5 = 13 - 5
2x = 8

**Step 3: Solve for x**
Divide both sides by 2:
2x ÷ 2 = 8 ÷ 2
x = 4

**Final Answer:** x = 4

**Verification:**
Let's check: 2(4) + 5 = 8 + 5 = 13 ✓

Great work! This is a fundamental linear equation. The key principle is using inverse operations to isolate the variable.` : `

Let me break this down step by step with clear explanations.

**Analysis:**
This is a great question! I'll walk you through the solution process methodically.

**Solution Steps:**
I'll provide multiple approaches where helpful, and explain the mathematical reasoning behind each step.

Would you like me to show alternative solution methods as well? I'm here to help you understand the concepts thoroughly! 💡`}

**Related concepts you might find helpful:**
- Linear equations and their properties
- Inverse operations in algebra
- Verification of solutions

Feel free to ask follow-up questions!`,
        isUser: false,
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 2000);
  };
  return <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {/* Mobile Navigation Overlay */}
      <MobileNavOverlay
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        activeItem={activeItem}
        onItemClick={(itemId) => {
          setActiveItem(itemId);
          if (itemId === "New Thread") {
            setIsChatHistoryOpen(true);
          }
        }}
      />

      {/* Main background div */}
      <div className="h-screen bg-neutral-800 relative">
        {/* Desktop Sidebar - hidden on mobile */}
        <div className="hidden md:flex fixed left-0 top-0 h-full w-20 bg-neutral-900 flex-col z-10">
          {/* Logo */}
          <div className="h-20 flex items-center justify-center">
            <img src="/lovable-uploads/55babc2c-ec94-466f-bfa8-7eb9a1fb3ed6.png" alt="AI Math Tutor Logo" className="h-12 w-12 object-contain" />
          </div>

          {/* Navigation */}
          <nav className="flex-1 py-4">
            <div className="space-y-2 px-3">
              {menuItems.map((item, index) => {
              const Icon = item.icon;
              return <Button key={index} variant="ghost" size="icon" className={cn("w-14 h-14 rounded-xl transition-colors", activeItem === item.id ? "bg-primary/10 text-white hover:bg-primary/20" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50")} title={item.label} onClick={item.onClick}>
                    <Icon className="h-8 w-8" />
                  </Button>;
            })}
            </div>
          </nav>

          {/* Bottom actions */}
          <div className="p-3 space-y-2">
            {bottomItems.map((item, index) => {
            const Icon = item.icon;
            return <Button key={index} variant="ghost" size="icon" className={cn("w-14 h-14 rounded-xl transition-colors", activeBottomItem === item.id ? "bg-primary/10 text-white hover:bg-primary/20" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50")} title={item.label} onClick={item.onClick}>
                  <Icon className="h-8 w-8" />
                </Button>;
          })}
          </div>

          <ChatHistory isOpen={isChatHistoryOpen} onClose={() => setIsChatHistoryOpen(false)} />
        </div>

        {/* Chat section - responsive margins and padding */}
        <div className="ml-0 md:ml-20 h-full p-0 md:p-2 bg-neutral-900">
          {/* Floating hamburger menu for mobile */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileNavOpen(true)}
            className="block md:hidden fixed top-4 left-4 z-30 h-10 w-10 bg-background/80 backdrop-blur-sm"
          >
            <Menu className="h-6 w-6" />
          </Button>
          
          <div className="h-full bg-card md:rounded-2xl md:shadow-2xl flex flex-col relative">
            {messages.length === 0 ? (/* Welcome/Search State */
          <div className="flex-1 flex flex-col items-center justify-center relative px-4">
                {/* Desktop Sign in buttons - hidden on mobile */}
                <div className="hidden md:flex absolute top-6 right-6 items-center gap-2">
                  <Button variant="ghost" size="sm" className="text-sm text-muted-foreground">
                    Sign in or create an account
                  </Button>
                  <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
                    Unlock Pro Search and History
                  </Button>
                </div>

                {/* Mobile welcome text */}
                <div className="text-center mb-8 md:hidden">
                  <h1 className="text-2xl font-semibold text-foreground mb-2">
                    Ask any math related question...
                  </h1>
                  <p className="text-muted-foreground">
                    Get step-by-step solutions and explanations
                  </p>
                </div>

                {/* Logo image above input - hidden on mobile */}
                <div className="hidden md:flex mb-2 justify-center">
                  <img src="/lovable-uploads/73b9e6a2-78c4-4dba-b0c9-1f6148c296be.png" alt="AI Math Tutor Logo" className="h-24 w-auto object-contain" />
                </div>
                
                {/* Input positioned in center on desktop, bottom on mobile */}
                <div className="w-full max-w-2xl px-4 md:px-8 fixed md:relative bottom-4 md:bottom-auto left-0 md:left-auto right-0 md:right-auto">
                  <SearchBox onSearch={handleSearch} />
                </div>
              </div>) : (/* Chat State */
          <div className="h-full flex flex-col">
                {/* Desktop Sign in buttons - hidden on mobile */}
                <div className="hidden md:flex absolute top-6 right-6 items-center gap-2 z-10">
                  <Button variant="ghost" size="sm" className="text-sm text-muted-foreground">
                    Sign in or create an account
                  </Button>
                  <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
                    Unlock Pro Search and History
                  </Button>
                </div>

                {/* Messages - scrollable within chat section */}
                <div className="flex-1 overflow-y-auto pt-4 md:pt-16 pb-20 md:pb-4">
                  <div className="max-w-3xl mx-auto px-4 md:px-6 space-y-6">
                    {messages.map(message => <ChatMessage key={message.id} message={message.content} isUser={message.isUser} timestamp={message.timestamp} />)}
                    
                    {isLoading && <div className="flex gap-4 justify-start">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <img src="/lovable-uploads/eebb080e-8632-4260-9770-0dd2b4566b62.png" alt="AI" className="w-5 h-5 object-contain" />
                          </div>
                        </div>
                        <div className="bg-card p-4 rounded-lg shadow-sm">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse [animation-delay:0.2s]"></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse [animation-delay:0.4s]"></div>
                          </div>
                        </div>
                      </div>}
                  </div>
                </div>
                
                {/* Logo image above input tab - hidden on mobile */}
                <div className="hidden md:flex justify-center mb-1">
                  <img src="/lovable-uploads/73b9e6a2-78c4-4dba-b0c9-1f6148c296be.png" alt="AI Math Tutor Logo" className="h-8 w-auto object-contain opacity-60" />
                </div>
                
                {/* Search box - fixed at bottom on mobile, bottom of chat on desktop */}
                <div className="fixed md:relative bottom-0 md:bottom-auto left-0 md:left-auto right-0 md:right-auto px-4 md:px-6 pb-4 md:pb-6 bg-card md:bg-transparent">
                  <div className="max-w-3xl mx-auto">
                    <SearchBox onSearch={handleSearch} />
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </ThemeProvider>;
};
export default Index;