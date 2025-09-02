import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Focus, Image, Paperclip, Mic, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

const SearchBox = ({ onSearch }: SearchBoxProps) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      setQuery("");
    }
  };

  const suggestionButtons = [
    { icon: null, label: "Compare", color: "text-white/60" },
    { icon: null, label: "Troubleshoot", color: "text-white/60" },
    { icon: null, label: "Learn", color: "text-white/60" },
    { icon: null, label: "Analyze", color: "text-white/60" },
    { icon: null, label: "Calculate", color: "text-white/60" },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Main search box */}
      <form onSubmit={handleSubmit} className="relative">
        <div className={cn(
          "relative rounded-2xl border bg-card/50 backdrop-blur-sm transition-all duration-200",
          isFocused ? "shadow-lg border-primary/30 bg-card/70" : "shadow-sm hover:shadow-md border-border/30"
        )}>
          <div className="flex items-center px-4 py-3">
            <Search className="h-5 w-5 text-muted-foreground mr-3" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Ask anything or @mention a Space"
              className="flex-1 border-0 bg-transparent text-base placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            
            <div className="flex items-center gap-2 ml-3">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
              >
                <Paperclip className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
              >
                <Image className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
              >
                <Mic className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
              >
                <Focus className="h-4 w-4" />
              </Button>
              
              <Button
                type="submit"
                disabled={!query.trim()}
                className="h-8 w-8 rounded-full bg-primary hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground transition-all"
                size="icon"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </form>

      {/* Suggestion pills */}
      <div className="flex flex-wrap gap-2 mt-4 justify-center">
        {suggestionButtons.map((button, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className={cn(
              "rounded-full border-border/50 hover:border-border",
              button.color
            )}
            onClick={() => {
              const mathPrompts = [
                "Solve: 2x + 5 = 13",
                "Find derivative of x² + 3x",
                "Explain quadratic formula",
                "Simplify: (x²-4)/(x-2)",
                "Calculate: ∫(2x+1)dx"
              ];
              onSearch(mathPrompts[index]);
            }}
          >
            {button.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SearchBox;