import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Focus, Image, Paperclip, Mic, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
interface SearchBoxProps {
  onSearch: (query: string) => void;
}
const SearchBox = ({
  onSearch
}: SearchBoxProps) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      setQuery("");
    }
  };
  return <div className="w-full max-w-2xl lg:max-w-3xl mx-auto">
      {/* Main search box */}
      <form onSubmit={handleSubmit} className="relative">
        <div className={cn(
          "relative rounded-2xl border bg-card transition-all duration-normal shadow-chat",
          isFocused 
            ? "shadow-elevation border-primary/30 ring-2 ring-primary/20 translate-y-[-2px]" 
            : "hover:shadow-elevation hover:translate-y-[-1px]"
        )}>
          <div className="flex items-center px-4 py-4 sm:px-5 sm:py-5">
            <Search className="h-5 w-5 text-muted-foreground mr-3 transition-colors duration-fast" />
            <Input 
              value={query} 
              onChange={e => setQuery(e.target.value)} 
              onFocus={() => setIsFocused(true)} 
              onBlur={() => setIsFocused(false)} 
              placeholder="Ask anything..." 
              className="flex-1 border-0 bg-transparent text-base placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0" 
            />
            
            <div className="flex items-center gap-1 sm:gap-2 ml-3">
              <Button 
                type="button" 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-fast"
              >
                <Paperclip className="h-4 w-4" />
              </Button>
              <Button 
                type="button" 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-fast"
              >
                <Image className="h-4 w-4" />
              </Button>
              <Button 
                type="button" 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-fast"
              >
                <Mic className="h-4 w-4" />
              </Button>
              <Button 
                type="button" 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-fast"
              >
                <Focus className="h-4 w-4" />
              </Button>
              
              <Button 
                type="submit" 
                disabled={!query.trim()} 
                className={cn(
                  "h-8 w-8 rounded-full transition-all duration-normal",
                  query.trim() 
                    ? "bg-primary hover:bg-primary/90 hover:scale-105 shadow-message" 
                    : "bg-muted text-muted-foreground cursor-not-allowed"
                )} 
                size="icon"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>;
};
export default SearchBox;