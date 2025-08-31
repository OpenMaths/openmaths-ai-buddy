import { useState } from "react";
import { ThemeProvider } from "next-themes";
import ChatHeader from "@/components/ChatHeader";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import ChatWelcome from "@/components/ChatWelcome";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: string;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser: true,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: `Great question! Let me solve this step by step.

**Step 1:** Let's analyze what we have
${content.includes("2x + 5 = 13") ? `
We have the equation: 2x + 5 = 13

**Step 2:** Subtract 5 from both sides
2x + 5 - 5 = 13 - 5
2x = 8

**Step 3:** Divide both sides by 2
2x ÷ 2 = 8 ÷ 2
x = 4

**Final Answer:** x = 4

Let's verify: 2(4) + 5 = 8 + 5 = 13 ✓

You're doing great! This is a classic linear equation. The key is to isolate the variable by using inverse operations.` : `

I'd be happy to help you with this math problem! Let me break it down step by step with clear explanations. 

You're on the right track asking for help - that's exactly how we learn! Let me guide you through the solution process.

Would you like me to show multiple solution methods, or would you prefer to see the most straightforward approach first?`}`,
        isUser: false,
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleSelectExample = (example: string) => {
    handleSendMessage(example);
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen flex flex-col bg-background">
        <ChatHeader />
        
        <main className="flex-1 flex flex-col">
          {messages.length === 0 ? (
            <ChatWelcome onSelectExample={handleSelectExample} />
          ) : (
            <div className="flex-1 overflow-y-auto">
              <div className="container max-w-4xl mx-auto py-6 space-y-6">
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
                      <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                        <img 
                          src="/lovable-uploads/7116060b-c9bb-43d7-9490-a727e85f1feb.png" 
                          alt="AI" 
                          className="w-5 h-5 object-contain opacity-90"
                        />
                      </div>
                    </div>
                    <div className="bg-card p-4 rounded-lg shadow-soft">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse [animation-delay:0.2s]"></div>
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse [animation-delay:0.4s]"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </main>
        
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    </ThemeProvider>
  );
};

export default Index;
