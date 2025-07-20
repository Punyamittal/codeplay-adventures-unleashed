import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import GameCard from "@/components/GameCard";
import { Play, Rocket, Trophy, Zap, Code, Gamepad2 } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const featuredGames = [
    {
      title: "Bug Buster",
      description: "Debug broken code under time pressure",
      difficulty: "Beginner" as const,
      duration: "5-10 min",
      players: "1 Player",
      tags: ["Debugging", "Logic", "HTML"]
    },
    {
      title: "Code Kart",
      description: "Race by writing correct code snippets",
      difficulty: "Intermediate" as const,
      duration: "10-15 min",
      players: "1-4 Players",
      tags: ["Speed", "Syntax", "Python"]
    },
    {
      title: "Logic Maze",
      description: "Navigate with loops and functions",
      difficulty: "Advanced" as const,
      duration: "15-20 min",
      players: "1 Player",
      tags: ["Algorithms", "Logic", "JavaScript"]
    }
  ];

  const codeSnippets = [
    "function playGame() { return 'fun'; }",
    "if (learning === true) { levelUp(); }",
    "const skill = practice + gaming;",
    "while (coding) { enjoyLife(); }",
    "class Player extends Learner {}"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center particles-bg overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 15, 23, 0.8), rgba(15, 15, 23, 0.6)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Floating Code Snippets */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {codeSnippets.map((code, index) => (
            <div
              key={index}
              className={`absolute text-primary/30 font-code text-sm animate-float`}
              style={{
                left: `${20 + (index * 15)}%`,
                top: `${10 + (index * 20)}%`,
                animationDelay: `${index * 1.2}s`
              }}
            >
              {code}
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 text-center z-10">
          <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-gaming font-black text-glow">
                Learn <span className="text-primary">Coding</span>
                <br />
                Through <span className="text-secondary">Games</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Master programming concepts by playing interactive mini-games. 
                Level up your skills while having fun!
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="btn-gaming text-primary-foreground px-8 py-6 text-lg font-medium"
              >
                <Rocket className="h-5 w-5 mr-2" />
                Start Learning
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-secondary/50 hover:border-secondary px-8 py-6 text-lg"
              >
                <Play className="h-5 w-5 mr-2" />
                Play Demo
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Games</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">100K+</div>
                <div className="text-sm text-muted-foreground">Players</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-gaming font-bold text-glow mb-4">
              How <span className="text-primary">CodePlay</span> Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to transform your coding journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-gaming text-center p-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Gamepad2 className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Choose Your Game</h3>
              <p className="text-muted-foreground">
                Select from 50+ interactive coding games designed for different skill levels
              </p>
            </Card>

            <Card className="card-gaming text-center p-8">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Learn by Playing</h3>
              <p className="text-muted-foreground">
                Write real code to solve challenges and progress through levels
              </p>
            </Card>

            <Card className="card-gaming text-center p-8">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Earn Rewards</h3>
              <p className="text-muted-foreground">
                Unlock badges, climb leaderboards, and track your coding progress
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-gaming font-bold text-glow mb-4">
              Featured <span className="text-primary">Games</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Jump into our most popular coding adventures
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredGames.map((game, index) => (
              <GameCard key={index} {...game} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-primary/50 hover:border-primary">
              <Zap className="h-5 w-5 mr-2" />
              View All Games
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;