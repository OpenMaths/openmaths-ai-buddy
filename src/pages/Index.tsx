import { useState } from "react";
import Layout from "@/components/Layout";
import ChatArea from "@/components/ChatArea";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: string;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleSearch = async (query: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: query,
      isUser: true,
      timestamp: new Date().toLocaleTimeString()
    };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: `I'll solve this math problem step by step for you!

**Problem:** ${query}

**Step 1: Understanding the Problem**
${query.includes("2x + 5 = 13") ? `
We have a linear equation: 2x + 5 = 13
Our goal is to find the value of x.

**Step 2: Isolate the variable term**
Subtract 5 from both sides:
2x + 5 - 5 = 13 - 5
2x = 8

**Step 3: Solve for x**
Divide both sides by 2:
2x ÷ 2 = 8 ÷ 2
x = 4

**Final Answer:** x = 4

**Verification:**
Let's check: 2(4) + 5 = 8 + 5 = 13 ✓

Great work! This is a fundamental linear equation. The key principle is using inverse operations to isolate the variable.` : `

Let me break this down step by step with clear explanations.

**Analysis:**
This is a great question! I'll walk you through the solution process methodically.

**Solution Steps:**
I'll provide multiple approaches where helpful, and explain the mathematical reasoning behind each step.

Would you like me to show alternative solution methods as well? I'm here to help you understand the concepts thoroughly! 💡`}

**Related concepts you might find helpful:**
- Linear equations and their properties
- Inverse operations in algebra
- Verification of solutions

Feel free to ask follow-up questions!`,
        isUser: false,
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 2000);
  };
  return (
    <Layout>
      <ChatArea
        messages={messages}
        isLoading={isLoading}
        onSearch={handleSearch}
      />
    </Layout>
  );
};
export default Index;