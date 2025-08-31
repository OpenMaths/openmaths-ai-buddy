import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, BookOpen, TrendingUp, Zap } from "lucide-react";

interface ChatWelcomeProps {
  onSelectExample: (example: string) => void;
}

const ChatWelcome = ({ onSelectExample }: ChatWelcomeProps) => {
  const examples = [
    {
      icon: Calculator,
      title: "Basic Algebra",
      description: "Solve: 2x + 5 = 13",
      query: "Solve the equation: 2x + 5 = 13"
    },
    {
      icon: BookOpen,
      title: "Calculus Problem",
      description: "Find the derivative of x³ + 2x²",
      query: "Find the derivative of f(x) = x³ + 2x²"
    },
    {
      icon: TrendingUp,
      title: "Trigonometry",
      description: "Solve: sin(2x) = 1/2",
      query: "Solve the trigonometric equation: sin(2x) = 1/2"
    },
    {
      icon: Zap,
      title: "Word Problem",
      description: "Speed and distance calculation",
      query: "A car travels 120 miles in 2 hours. What is its average speed, and how far will it travel in 5 hours at the same speed?"
    }
  ];

  return (
    <div className="flex-1 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <div className="relative inline-block">
            <img 
              src="/lovable-uploads/7116060b-c9bb-43d7-9490-a727e85f1feb.png" 
              alt="OpenMaths AI" 
              className="h-16 w-16 mx-auto object-contain"
            />
            <div className="absolute inset-0 bg-gradient-secondary opacity-30 rounded-full blur-lg"></div>
          </div>
          
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Welcome to OpenMaths AI
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your friendly, knowledgeable math tutor. I'm here to solve any mathematics problem 
            step-by-step, making explanations clear and easy to follow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {examples.map((example, index) => {
            const Icon = example.icon;
            return (
              <Card 
                key={index}
                className="p-6 cursor-pointer hover:shadow-soft transition-all duration-300 hover:scale-[1.02] group border-border/50"
                onClick={() => onSelectExample(example.query)}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-gradient-primary group-hover:shadow-glow transition-all duration-300">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      {example.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {example.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            💡 <strong>Pro tip:</strong> Be specific with your questions for the best step-by-step explanations
          </p>
          <p className="text-xs text-muted-foreground">
            I can handle everything from basic arithmetic to advanced calculus, statistics, and more!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatWelcome;