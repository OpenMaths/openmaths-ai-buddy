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
          <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
            <img 
              src="/lovable-uploads/7116060b-c9bb-43d7-9490-a727e85f1feb.png" 
              alt="AI" 
              className="w-5 h-5 object-contain opacity-90"
            />
          </div>
        </div>
      )}
      
      <div className={cn("flex flex-col gap-2", isUser ? "items-end" : "items-start")}>
        <Card className={cn(
          "p-4 max-w-[85%] transition-all duration-300",
          isUser 
            ? "bg-gradient-primary text-primary-foreground shadow-glow" 
            : "bg-card hover:shadow-soft"
        )}>
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <p className="whitespace-pre-wrap leading-relaxed">{message}</p>
          </div>
        </Card>
        
        {!isUser && (
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button variant="ghost" size="sm" onClick={copyToClipboard}>
              <Copy className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <ThumbsUp className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <ThumbsDown className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <RotateCcw className="h-4 w-4" />
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
            <span className="text-sm font-medium text-secondary-foreground">U</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;