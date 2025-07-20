import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Gamepad2, 
  Trophy, 
  Zap, 
  Users, 
  Brain, 
  Target, 
  Clock, 
  Shield,
  BarChart3,
  Sparkles,
  Code,
  Play
} from "lucide-react";

const Features = () => {
  const mainFeatures = [
    {
      icon: Gamepad2,
      title: "Gamified Learning",
      description: "Turn boring coding lessons into exciting adventures with points, levels, and achievements.",
      color: "primary"
    },
    {
      icon: Zap,
      title: "Real-Time Feedback",
      description: "Get instant hints and corrections as you code, helping you learn from mistakes immediately.",
      color: "secondary"
    },
    {
      icon: Trophy,
      title: "Progress Tracking",
      description: "Visual dashboards show your coding journey with detailed analytics and milestone celebrations.",
      color: "accent"
    },
    {
      icon: Brain,
      title: "Adaptive Learning",
      description: "AI-powered system adjusts difficulty based on your progress and learning style.",
      color: "primary"
    }
  ];

  const coreFeatures = [
    {
      icon: Code,
      title: "Interactive Code Editor",
      description: "Built-in IDE with syntax highlighting, auto-complete, and error detection."
    },
    {
      icon: Users,
      title: "Multiplayer Challenges",
      description: "Compete with friends or collaborate on coding projects in real-time."
    },
    {
      icon: Target,
      title: "Skill Assessments",
      description: "Regular quizzes and challenges to test your understanding and track progress."
    },
    {
      icon: Clock,
      title: "Bite-sized Lessons",
      description: "Learn in 5-15 minute sessions that fit perfectly into your busy schedule."
    },
    {
      icon: Shield,
      title: "Safe Learning Environment",
      description: "Kid-friendly platform with moderated community and parental controls."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Detailed insights into your learning patterns and areas for improvement."
    },
    {
      icon: Sparkles,
      title: "Achievement System",
      description: "Unlock badges, earn XP, and climb leaderboards as you master new concepts."
    },
    {
      icon: Play,
      title: "50+ Mini-Games",
      description: "Diverse collection of games covering HTML, CSS, JavaScript, Python, and more."
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary": return "bg-gradient-primary";
      case "secondary": return "bg-gradient-secondary";
      case "accent": return "bg-gradient-card";
      default: return "bg-gradient-primary";
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 particles-bg">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-slide-up">
            <Badge variant="outline" className="mb-6 text-primary border-primary/30 px-4 py-2">
              Platform Features
            </Badge>
            <h1 className="text-5xl md:text-6xl font-gaming font-black text-glow mb-6">
              Everything You Need to
              <br />
              <span className="text-primary">Master Coding</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover the powerful features that make CodePlay the most engaging 
              way to learn programming concepts through interactive gaming.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-gaming font-bold text-glow mb-4">
              Core <span className="text-primary">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The key features that set CodePlay apart from traditional learning platforms
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <Card key={index} className="card-gaming p-8 group">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 ${getColorClasses(feature.color)} rounded-2xl flex items-center justify-center group-hover:animate-glow-pulse flex-shrink-0`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-glow">{feature.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-gaming font-bold text-glow mb-4">
              More <span className="text-secondary">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Additional tools and capabilities to enhance your learning experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="card-gaming p-6 text-center group">
                <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-glow-pulse">
                  <feature.icon className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-glow-secondary">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-gaming font-bold text-glow mb-6">
              Ready to Start Your
              <br />
              <span className="text-primary">Coding Adventure?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of learners who are already mastering programming 
              through our gamified platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-gaming text-primary-foreground px-8 py-6 text-lg font-medium"
              >
                <Play className="h-5 w-5 mr-2" />
                Start Learning Free
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-secondary/50 hover:border-secondary px-8 py-6 text-lg"
              >
                View Demo Games
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;