import { useState } from "react";
import { ThemeProvider } from "next-themes";
import { Home, Plus, Globe, BookOpen, Settings, User } from "lucide-react";
import SearchBox from "@/components/SearchBox";
import ChatMessage from "@/components/ChatMessage";
import ChatHistory from "@/components/ChatHistory";
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
      {/* Main background div */}
      <div className="h-screen bg-neutral-800 relative">
        {/* Sidebar - positioned within main div */}
        <div className="fixed left-0 top-0 h-full w-20 bg-neutral-900 flex flex-col z-10">
          {/* Logo */}
          <div className="h-20 flex items-center justify-center">
            <img 
              src="/lovable-uploads/55babc2c-ec94-466f-bfa8-7eb9a1fb3ed6.png" 
              alt="AI Math Tutor Logo" 
              className="h-12 w-12 object-contain"
            />
          </div>

          {/* Navigation */}
          <nav className="flex-1 py-4">
            <div className="space-y-2 px-3">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className={cn(
                      "w-14 h-14 rounded-xl transition-colors",
                      activeItem === item.id
                        ? "bg-primary/10 text-white hover:bg-primary/20" 
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    )}
                    title={item.label}
                    onClick={item.onClick}
                  >
                    <Icon className="h-8 w-8" />
                  </Button>
                );
              })}
            </div>
          </nav>

          {/* Bottom actions */}
          <div className="p-3 space-y-2">
            {bottomItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "w-14 h-14 rounded-xl transition-colors",
                    activeBottomItem === item.id
                      ? "bg-primary/10 text-white hover:bg-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                  title={item.label}
                  onClick={item.onClick}
                >
                  <Icon className="h-8 w-8" />
                </Button>
              );
            })}
          </div>

          <ChatHistory isOpen={isChatHistoryOpen} onClose={() => setIsChatHistoryOpen(false)} />
        </div>

        {/* Chat section - elevated over main div */}
        <div className="ml-16 lg:ml-20 h-full p-2 pr-2 pt-2 pb-2">
          <div className="h-full bg-card rounded-2xl shadow-elevation border border-border/30 flex flex-col relative transition-all duration-slow">
            {messages.length === 0 ? (
              /* Welcome/Search State */
              <div className="flex-1 flex flex-col items-center justify-center relative animate-fade-in-up">
                {/* Sign in buttons at top - enhanced responsiveness */}
                <div className="absolute top-4 right-4 lg:top-6 lg:right-6 flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-fast">
                    Sign in or create an account
                  </Button>
                  <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-fast hidden sm:block">
                    Unlock Pro Search and History
                  </Button>
                </div>

                {/* Logo image above input - enhanced */}
                <div className="mb-4 flex justify-center">
                  <img 
                    src="/lovable-uploads/73b9e6a2-78c4-4dba-b0c9-1f6148c296be.png" 
                    alt="AI Math Tutor Logo" 
                    className="h-20 sm:h-24 lg:h-28 w-auto object-contain transition-transform duration-slow hover:scale-105" 
                  />
                </div>
                
                {/* Input positioned in center - responsive */}
                <div className="w-full max-w-2xl lg:max-w-3xl px-4 sm:px-8">
                  <SearchBox onSearch={handleSearch} />
                </div>
              </div>
            ) : (
              /* Chat State */
              <div className="h-full flex flex-col animate-fade-in-up">
                {/* Sign in buttons at top - enhanced */}
                <div className="absolute top-4 right-4 lg:top-6 lg:right-6 flex items-center gap-2 z-10">
                  <Button variant="ghost" size="sm" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-fast">
                    Sign in or create an account
                  </Button>
                  <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-fast hidden sm:block">
                    Unlock Pro Search and History
                  </Button>
                </div>

                {/* Messages - enhanced scrolling */}
                <div className="flex-1 overflow-y-auto pt-12 sm:pt-16 pb-4 scroll-smooth">
                  <div className="max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-6 space-y-4 sm:space-y-6">
                    {messages.map(message => (
                      <ChatMessage 
                        key={message.id} 
                        message={message.content} 
                        isUser={message.isUser} 
                        timestamp={message.timestamp} 
                      />
                    ))}
                    
                    {isLoading && (
                      <div className="flex gap-3 sm:gap-4 justify-start animate-fade-in-up">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary/10 flex items-center justify-center ring-1 ring-primary/20">
                            <img 
                              src="/lovable-uploads/eebb080e-8632-4260-9770-0dd2b4566b62.png" 
                              alt="AI" 
                              className="w-5 h-5 sm:w-6 sm:h-6 object-contain" 
                            />
                          </div>
                        </div>
                        <div className="bg-card p-3 sm:p-4 rounded-2xl shadow-message border border-border/50">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.1s]"></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Logo image above input tab - enhanced */}
                <div className="flex justify-center mb-1 sm:mb-2">
                  <img 
                    src="/lovable-uploads/73b9e6a2-78c4-4dba-b0c9-1f6148c296be.png" 
                    alt="AI Math Tutor Logo" 
                    className="h-6 sm:h-8 w-auto object-contain opacity-60 transition-opacity duration-fast hover:opacity-80" 
                  />
                </div>
                
                {/* Search box at bottom - enhanced responsiveness */}
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <div className="max-w-2xl lg:max-w-3xl mx-auto">
                    <SearchBox onSearch={handleSearch} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ThemeProvider>;
};
export default Index;