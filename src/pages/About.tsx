import { useNavigate } from "react-router-dom";
import { ArrowLeft, Target, Eye, Rocket, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-sm bg-amber-50/80 border-b border-amber-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
            className="hover:bg-amber-100/50"
          >
            <ArrowLeft className="h-5 w-5 text-amber-900" />
          </Button>
          <h1 className="text-2xl font-bold text-amber-900">About OpenMath</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 shadow-lg">
            <img 
              src="/lovable-uploads/55babc2c-ec94-466f-bfa8-7eb9a1fb3ed6.png" 
              alt="OpenMath Logo" 
              className="h-16 w-16 object-contain"
            />
          </div>
          <h2 className="text-5xl font-bold text-amber-950 mb-6">
            Welcome to OpenMath
          </h2>
          <p className="text-xl text-amber-800/80 max-w-3xl mx-auto leading-relaxed">
            Your intelligent companion for mastering mathematics through AI-powered learning
          </p>
        </div>

        {/* Vision Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-amber-100/50 to-orange-100/50 rounded-3xl p-8 shadow-lg border border-amber-200/50 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-amber-200/50 rounded-xl">
                <Eye className="h-6 w-6 text-amber-900" />
              </div>
              <h3 className="text-2xl font-bold text-amber-950">Our Vision</h3>
            </div>
            <p className="text-amber-900/70 leading-relaxed">
              To revolutionize mathematics education by making advanced AI tutoring accessible to everyone, 
              breaking down complex concepts into understandable steps, and fostering a love for mathematical thinking.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-gradient-to-br from-red-100/50 to-orange-100/50 rounded-3xl p-8 shadow-lg border border-red-200/50 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-red-200/50 rounded-xl">
                <Target className="h-6 w-6 text-red-900" />
              </div>
              <h3 className="text-2xl font-bold text-red-950">Our Mission</h3>
            </div>
            <p className="text-red-900/70 leading-relaxed">
              Empower learners worldwide with personalized, step-by-step mathematical guidance. 
              We strive to eliminate math anxiety and build confidence through patient, intelligent tutoring 
              that adapts to each student's unique learning pace.
            </p>
          </div>
        </div>

        {/* What We Offer */}
        <div className="bg-gradient-to-br from-green-100/30 to-emerald-100/30 rounded-3xl p-10 shadow-lg border border-green-200/50 backdrop-blur-sm mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-green-200/50 rounded-xl">
              <Sparkles className="h-6 w-6 text-green-900" />
            </div>
            <h3 className="text-2xl font-bold text-green-950">What We Offer</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                <p className="text-green-900/80">
                  <span className="font-semibold">Instant Solutions:</span> Get immediate answers to complex mathematical problems
                </p>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                <p className="text-green-900/80">
                  <span className="font-semibold">Step-by-Step Explanations:</span> Understand the 'how' and 'why' behind every solution
                </p>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                <p className="text-green-900/80">
                  <span className="font-semibold">LaTeX Rendering:</span> Beautiful mathematical notation for clear understanding
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                <p className="text-green-900/80">
                  <span className="font-semibold">24/7 Availability:</span> Learn at your own pace, anytime, anywhere
                </p>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                <p className="text-green-900/80">
                  <span className="font-semibold">Multiple Topics:</span> From basic arithmetic to advanced calculus
                </p>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                <p className="text-green-900/80">
                  <span className="font-semibold">Interactive Learning:</span> Ask follow-up questions and dive deeper
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Future Section */}
        <div className="bg-gradient-to-br from-orange-100/50 to-amber-100/50 rounded-3xl p-10 shadow-lg border border-orange-200/50 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-orange-200/50 rounded-xl">
              <Rocket className="h-6 w-6 text-orange-900" />
            </div>
            <h3 className="text-2xl font-bold text-orange-950">The Future of OpenMath</h3>
          </div>
          <p className="text-orange-900/70 leading-relaxed mb-6">
            We're continuously evolving to become the most comprehensive mathematical learning platform. 
            Our roadmap includes:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white/40 rounded-2xl p-5 border border-orange-200/30">
              <h4 className="font-semibold text-orange-950 mb-2">Visual Learning</h4>
              <p className="text-sm text-orange-900/70">Interactive graphs and diagrams for geometric and algebraic concepts</p>
            </div>
            <div className="bg-white/40 rounded-2xl p-5 border border-orange-200/30">
              <h4 className="font-semibold text-orange-950 mb-2">Practice Mode</h4>
              <p className="text-sm text-orange-900/70">Personalized problem sets to reinforce learning</p>
            </div>
            <div className="bg-white/40 rounded-2xl p-5 border border-orange-200/30">
              <h4 className="font-semibold text-orange-950 mb-2">Progress Tracking</h4>
              <p className="text-sm text-orange-900/70">Monitor your improvement across different topics</p>
            </div>
            <div className="bg-white/40 rounded-2xl p-5 border border-orange-200/30">
              <h4 className="font-semibold text-orange-950 mb-2">Collaborative Learning</h4>
              <p className="text-sm text-orange-900/70">Connect with peers and study together</p>
            </div>
            <div className="bg-white/40 rounded-2xl p-5 border border-orange-200/30">
              <h4 className="font-semibold text-orange-950 mb-2">Multi-language Support</h4>
              <p className="text-sm text-orange-900/70">Learn mathematics in your native language</p>
            </div>
            <div className="bg-white/40 rounded-2xl p-5 border border-orange-200/30">
              <h4 className="font-semibold text-orange-950 mb-2">Advanced AI</h4>
              <p className="text-sm text-orange-900/70">Even more intelligent and adaptive tutoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h3 className="text-3xl font-bold text-amber-950 mb-4">Ready to Master Mathematics?</h3>
        <p className="text-amber-800/70 mb-8">Start your learning journey today</p>
        <Button
          onClick={() => navigate("/")}
          size="lg"
          className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg"
        >
          Start Learning Now
        </Button>
      </section>
    </div>
  );
};

export default About;
