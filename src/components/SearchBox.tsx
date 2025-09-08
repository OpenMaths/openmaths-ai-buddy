import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Focus, Image, Paperclip, Mic, ArrowUp, Plus } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
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
  return <div className="w-full max-w-2xl mx-auto">
      {/* Main search box */}
      <form onSubmit={handleSubmit} className="relative">
        <div className={cn("relative rounded-2xl border bg-card transition-all duration-200 shadow-md", isFocused ? "shadow-xl border-primary/20 translate-y-[-2px]" : "shadow-lg hover:shadow-xl hover:translate-y-[-1px]")}>
          <div className="flex items-center px-[17px] py-[17px]">
            <Search className="h-5 w-5 text-muted-foreground mr-3" />
            <Input value={query} onChange={e => setQuery(e.target.value)} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} placeholder="Ask anything..." className="flex-1 border-0 bg-transparent text-base placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0" />
            
            <div className="flex items-center gap-2 ml-3">
              {/* Desktop: show all action icons */}
              <div className="hidden sm:flex items-center gap-2">
                <Button type="button" variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Button type="button" variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                  <Image className="h-4 w-4" />
                </Button>
                <Button type="button" variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                  <Mic className="h-4 w-4" />
                </Button>
                <Button type="button" variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                  <Focus className="h-4 w-4" />
                </Button>
              </div>

              {/* Mobile: single plus opens attachment options */}
              <div className="block sm:hidden">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button type="button" variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="z-50 bg-card border shadow-md p-2" align="end" sideOffset={6}>
                    <div className="flex items-center gap-1">
                      <Button type="button" variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                        <Paperclip className="h-4 w-4" />
                      </Button>
                      <Button type="button" variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                        <Image className="h-4 w-4" />
                      </Button>
                      <Button type="button" variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                        <Mic className="h-4 w-4" />
                      </Button>
                      <Button type="button" variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                        <Focus className="h-4 w-4" />
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              {/* Submit */}
              <Button type="submit" disabled={!query.trim()} className="h-8 w-8 rounded-full bg-primary hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground" size="icon">
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </form>

    </div>;
};
export default SearchBox;