import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface LaTeXRendererProps {
  content: string;
}

const LaTeXRenderer = ({ content }: LaTeXRendererProps) => {
  // Split content by LaTeX delimiters and render accordingly
  const renderContent = (text: string) => {
    // Handle display math ($$...$$)
    const displayMathRegex = /\$\$(.*?)\$\$/g;
    // Handle inline math ($...$)
    const inlineMathRegex = /\$([^$]+)\$/g;
    
    let parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    let match;
    
    // First, handle display math
    while ((match = displayMathRegex.exec(text)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        const beforeText = text.slice(lastIndex, match.index);
        parts.push(...renderInlineMath(beforeText));
      }
      
      // Add the display math
      parts.push(
        <div key={`display-${match.index}`} className="my-4">
          <BlockMath math={match[1]} />
        </div>
      );
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add remaining text and handle inline math
    if (lastIndex < text.length) {
      const remainingText = text.slice(lastIndex);
      parts.push(...renderInlineMath(remainingText));
    }
    
    return parts;
  };
  
  const renderInlineMath = (text: string) => {
    const inlineMathRegex = /\$([^$]+)\$/g;
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    let match;
    
    while ((match = inlineMathRegex.exec(text)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      
      // Add the inline math
      parts.push(
        <InlineMath key={`inline-${match.index}`} math={match[1]} />
      );
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }
    
    return parts;
  };
  
  const formatText = (text: string) => {
    // Handle numbered lists
    const numberedListRegex = /^(\d+)\.\s(.+)$/gm;
    // Handle bullet points
    const bulletListRegex = /^[•·-]\s(.+)$/gm;
    
    let formattedText = text;
    
    // Convert numbered lists
    formattedText = formattedText.replace(numberedListRegex, (match, number, content) => {
      return `${number}. ${content}`;
    });
    
    return formattedText;
  };
  
  const processedContent = formatText(content);
  const renderedParts = renderContent(processedContent);
  
  return (
    <div className="prose prose-sm max-w-none dark:prose-invert font-sans leading-relaxed">
      {renderedParts.map((part, index) => (
        typeof part === 'string' ? (
          <span key={index} className="whitespace-pre-wrap">{part}</span>
        ) : (
          part
        )
      ))}
    </div>
  );
};

export default LaTeXRenderer;