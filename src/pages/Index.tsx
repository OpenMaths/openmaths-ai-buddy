import { useState } from "react";
import { ThemeProvider } from "next-themes";
import Sidebar from "@/components/Sidebar";
import TopHeader from "@/components/TopHeader";
import SearchBox from "@/components/SearchBox";
import ChatMessage from "@/components/ChatMessage";
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

  const handleSearch = async (query: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: query,
      isUser: true,
      timestamp: new Date().toLocaleTimeString(),
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
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="h-screen flex bg-background">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main content */}
        <div className="flex-1 flex flex-col">
          <TopHeader />
          
          <main className="flex-1 flex flex-col">
            {messages.length === 0 ? (
              /* Welcome/Search State */
              <div className="flex-1 flex flex-col items-center justify-center p-8">
                <div className="text-center mb-12">
                  <div className="mb-6 flex justify-center">
                    <img 
                      src="/lovable-uploads/e82cda38-2924-46c6-b1dc-de27f2ffc4ff.png" 
                      alt="OpenMaths AI Logo" 
                      className="h-26 w-26 object-contain"
                    />
                  </div>
                  <h1 className="text-4xl font-medium text-foreground mb-2">
                    openmaths
                  </h1>
                  <p className="text-muted-foreground">
                    Your friendly AI math tutor
                  </p>
                </div>
                
                <SearchBox onSearch={handleSearch} />
              </div>
            ) : (
              /* Chat State */
              <div className="flex-1 flex flex-col">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto">
                  <div className="max-w-4xl mx-auto py-8 px-6 space-y-8">
                    {messages.map((message) => (
                      <ChatMessage
                        key={message.id}
                        message={message.content}
                        isUser={message.isUser}
                        timestamp={message.timestamp}
                      />
                    ))}
                    
                    {isLoading && (
                      <div className="flex gap-4 justify-start">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <img 
                              src="/lovable-uploads/7116060b-c9bb-43d7-9490-a727e85f1feb.png" 
                              alt="AI" 
                              className="w-5 h-5 object-contain"
                            />
                          </div>
                        </div>
                        <div className="bg-card p-4 rounded-lg shadow-clean">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse [animation-delay:0.2s]"></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse [animation-delay:0.4s]"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Search box at bottom */}
                <div className="border-t bg-background p-6">
                  <div className="max-w-4xl mx-auto">
                    <SearchBox onSearch={handleSearch} />
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
