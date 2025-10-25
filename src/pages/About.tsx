import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">About OpenMath</h1>
            <p className="text-lg text-muted-foreground">
              Empowering learners through intelligent mathematics education
            </p>
          </div>

          {/* Vision Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold text-foreground">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              At OpenMath, we envision a world where every student has access to personalized, 
              intelligent mathematics tutoring. We believe that mathematics should be accessible, 
              engaging, and tailored to each learner's unique pace and style. Through the power 
              of artificial intelligence, we're breaking down barriers and making quality math 
              education available to everyone, everywhere.
            </p>
          </section>

          {/* Mission Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold text-foreground">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to revolutionize mathematics education by combining advanced AI 
              technology with proven pedagogical methods. We strive to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Provide step-by-step explanations that build deep understanding</li>
              <li>Offer instant, accurate solutions to mathematical problems</li>
              <li>Adapt to each student's learning style and pace</li>
              <li>Make mathematics less intimidating and more approachable</li>
              <li>Support educators and students in their mathematical journey</li>
            </ul>
          </section>

          {/* Future Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-semibold text-foreground">The Future</h2>
            <p className="text-muted-foreground leading-relaxed">
              We're continuously evolving to serve our community better. Looking ahead, we're 
              working on:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Interactive problem-solving sessions with real-time feedback</li>
              <li>Personalized learning paths based on individual progress</li>
              <li>Collaborative features for peer learning</li>
              <li>Integration with educational curricula worldwide</li>
              <li>Advanced visualization tools for complex mathematical concepts</li>
              <li>Mobile applications for learning on the go</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Join us on this journey to transform mathematics education and unlock the 
              potential of every learner.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
