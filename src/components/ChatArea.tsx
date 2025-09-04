import { useState } from "react";
import SearchBox from "@/components/SearchBox";
import ChatMessage from "@/components/ChatMessage";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: string;
}

interface ChatAreaProps {
  messages: Message[];
  isLoading: boolean;
  onSearch: (query: string) => void;
}

const ChatArea = ({ messages, isLoading, onSearch }: ChatAreaProps) => {
  if (messages.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="text-center mb-8">
          <div className="mb-6 flex justify-center">
            <img
              src="/lovable-uploads/73b9e6a2-78c4-4dba-b0c9-1f6148c296be.png"
              alt="AI Math Tutor Logo"
              className="h-32 w-auto object-contain"
            />
          </div>
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            What can I help you with?
          </h2>
          <p className="text-muted-foreground">
            Ask me anything about mathematics, from basic arithmetic to advanced calculus.
          </p>
        </div>
        
        <div className="w-full max-w-2xl">
          <SearchBox onSearch={onSearch} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* Messages area */}
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
                    src="/lovable-uploads/eebb080e-8632-4260-9770-0dd2b4566b62.png"
                    alt="AI"
                    className="w-5 h-5 object-contain"
                  />
                </div>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border shadow-clean">
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
      <div className="border-t border-border bg-background p-6">
        <div className="max-w-4xl mx-auto">
          <SearchBox onSearch={onSearch} />
        </div>
      </div>
    </div>
  );
};

export default ChatArea;