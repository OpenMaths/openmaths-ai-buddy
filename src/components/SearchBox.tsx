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


  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Main search box */}
      <form onSubmit={handleSubmit} className="relative">
        <div className={cn(
          "relative rounded-2xl border bg-card transition-all duration-200",
          isFocused ? "shadow-lg border-primary/20" : "shadow-sm hover:shadow-md"
        )}>
          <div className="flex items-center px-4 py-3">
            <Search className="h-5 w-5 text-muted-foreground mr-3" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Ask anything..."
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
                className="h-8 w-8 rounded-full bg-primary hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground"
                size="icon"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </form>

    </div>
  );
};

export default SearchBox;