import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, ThumbsUp, ThumbsDown, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp?: string;
}

const ChatMessage = ({ message, isUser, timestamp }: ChatMessageProps) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(message);
  };

  return (
    <div className={cn(
      "flex gap-3 sm:gap-4 group animate-fade-in-up", 
      isUser ? "justify-end" : "justify-start"
    )}>
      {!isUser && (
        <div className="flex-shrink-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary/10 flex items-center justify-center ring-1 ring-primary/20">
            <img 
              src="/lovable-uploads/7116060b-c9bb-43d7-9490-a727e85f1feb.png" 
              alt="AI" 
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
            />
          </div>
        </div>
      )}
      
      <div className={cn("flex flex-col gap-2 sm:gap-3", isUser ? "items-end" : "items-start")}>
        <div className={cn(
          "max-w-[85%] sm:max-w-[80%] p-3 sm:p-4 rounded-2xl transition-all duration-normal",
          isUser 
            ? "bg-primary text-primary-foreground ml-8 sm:ml-12 shadow-message hover:shadow-elevation" 
            : "bg-card shadow-message hover:shadow-elevation border border-border/50"
        )}>
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <p className="whitespace-pre-wrap leading-relaxed text-sm sm:text-base m-0">{message}</p>
          </div>
        </div>
        
        {!isUser && (
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-normal">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={copyToClipboard} 
              className="h-7 sm:h-8 px-2 sm:px-3 text-xs hover:bg-accent/50 transition-all duration-fast"
            >
              <Copy className="h-3 w-3 mr-1" />
              <span className="hidden sm:inline">Copy</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-7 sm:h-8 px-2 sm:px-3 text-xs hover:bg-accent/50 transition-all duration-fast"
            >
              <ThumbsUp className="h-3 w-3 mr-1" />
              <span className="hidden sm:inline">Good</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-7 sm:h-8 px-2 sm:px-3 text-xs hover:bg-accent/50 transition-all duration-fast"
            >
              <ThumbsDown className="h-3 w-3 mr-1" />
              <span className="hidden sm:inline">Bad</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-7 sm:h-8 px-2 sm:px-3 text-xs hover:bg-accent/50 transition-all duration-fast"
            >
              <RotateCcw className="h-3 w-3 mr-1" />
              <span className="hidden sm:inline">Retry</span>
            </Button>
          </div>
        )}
        
        {timestamp && (
          <span className="text-xs text-muted-foreground transition-colors duration-fast">{timestamp}</span>
        )}
      </div>
      
      {isUser && (
        <div className="flex-shrink-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-secondary flex items-center justify-center ring-1 ring-border">
            <span className="text-sm font-medium text-secondary-foreground">Y</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;