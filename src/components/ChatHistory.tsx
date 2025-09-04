import { X, MessageSquare, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface ChatHistoryProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChatSession {
  id: string;
  title: string;
  timestamp: string;
  preview: string;
}

const ChatHistory = ({ isOpen, onClose }: ChatHistoryProps) => {
  // Mock data - replace with actual chat history
  const chatSessions: ChatSession[] = [
    {
      id: "1",
      title: "Mathematical Problem Solving",
      timestamp: "2 hours ago",
      preview: "Help me solve this calculus problem..."
    },
    {
      id: "2", 
      title: "Algebra Questions",
      timestamp: "Yesterday",
      preview: "I need help with quadratic equations..."
    },
    {
      id: "3",
      title: "Geometry Concepts",
      timestamp: "2 days ago", 
      preview: "Can you explain triangles and their properties..."
    },
    {
      id: "4",
      title: "Statistics Help",
      timestamp: "1 week ago",
      preview: "I'm struggling with probability distributions..."
    }
  ];

  if (!isOpen) return null;

  return (
    <div 
      className={cn(
        "fixed left-16 top-0 h-full w-80 bg-card border-r border-border z-50 shadow-xl transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <h2 className="text-lg font-semibold text-foreground">Chat History</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="h-8 w-8"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* New Chat Button */}
      <div className="p-4">
        <Button 
          className="w-full justify-start gap-2" 
          variant="outline"
        >
          <MessageSquare className="h-4 w-4" />
          New Chat
        </Button>
      </div>

      {/* Chat Sessions */}
      <ScrollArea className="flex-1 px-4">
        <div className="space-y-2">
          {chatSessions.map((session) => (
            <div
              key={session.id}
              className="group p-3 rounded-lg border border-border/50 hover:bg-accent/50 cursor-pointer transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm text-foreground truncate">
                    {session.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {session.preview}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {session.timestamp}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ChatHistory;