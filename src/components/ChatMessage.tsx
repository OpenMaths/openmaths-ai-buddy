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
    <div className={cn("flex gap-4 group", isUser ? "justify-end" : "justify-start")}>
      {!isUser && (
        <div className="flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <img 
              src="/lovable-uploads/7116060b-c9bb-43d7-9490-a727e85f1feb.png" 
              alt="AI" 
              className="w-5 h-5 object-contain"
            />
          </div>
        </div>
      )}
      
      <div className={cn("flex flex-col gap-3", isUser ? "items-end" : "items-start")}>
        <div className={cn(
          "max-w-[85%] p-4 rounded-2xl",
          isUser 
            ? "bg-primary text-primary-foreground ml-12" 
            : "bg-card shadow-clean"
        )}>
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <p className="whitespace-pre-wrap leading-relaxed text-sm">{message}</p>
          </div>
        </div>
        
        {!isUser && (
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button variant="ghost" size="sm" onClick={copyToClipboard} className="h-8 px-3 text-xs">
              <Copy className="h-3 w-3 mr-1" />
              Copy
            </Button>
            <Button variant="ghost" size="sm" className="h-8 px-3 text-xs">
              <ThumbsUp className="h-3 w-3 mr-1" />
              Good
            </Button>
            <Button variant="ghost" size="sm" className="h-8 px-3 text-xs">
              <ThumbsDown className="h-3 w-3 mr-1" />
              Bad
            </Button>
            <Button variant="ghost" size="sm" className="h-8 px-3 text-xs">
              <RotateCcw className="h-3 w-3 mr-1" />
              Retry
            </Button>
          </div>
        )}
        
        {timestamp && (
          <span className="text-xs text-muted-foreground">{timestamp}</span>
        )}
      </div>
      
      {isUser && (
        <div className="flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
            <span className="text-sm font-medium text-secondary-foreground">Y</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;