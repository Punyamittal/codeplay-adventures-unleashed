import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Target, Users, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Fun-First Learning",
      description: "We believe learning should be enjoyable. Every game is designed to make coding concepts stick through play."
    },
    {
      icon: Target,
      title: "Real-World Skills",
      description: "Our challenges teach practical programming skills used by professional developers every day."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Learn alongside thousands of other aspiring programmers in our supportive community."
    },
    {
      icon: Zap,
      title: "Instant Feedback",
      description: "Get immediate results and hints to help you understand concepts and fix mistakes quickly."
    }
  ];

  const timeline = [
    {
      year: "2023",
      title: "The Idea",
      description: "Two educators frustrated with traditional coding bootcamps decided there had to be a better way."
    },
    {
      year: "2024",
      title: "First Games",
      description: "Launched with 5 core games focusing on HTML, CSS, and basic programming logic."
    },
    {
      year: "2024",
      title: "Community Growth",
      description: "Reached 10,000+ active learners and expanded to include Python and JavaScript games."
    },
    {
      year: "Today",
      title: "CodePlay Universe",
      description: "50+ games, advanced progress tracking, and partnerships with schools worldwide."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 particles-bg">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-slide-up">
            <Badge variant="outline" className="mb-6 text-primary border-primary/30 px-4 py-2">
              Our Mission
            </Badge>
            <h1 className="text-5xl md:text-6xl font-gaming font-black text-glow mb-6">
              Making <span className="text-primary">Coding</span> 
              <br />
              Accessible to <span className="text-secondary">Everyone</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're on a mission to transform how people learn programming. By combining 
              the engagement of gaming with proven educational techniques, we make coding 
              concepts stick in ways traditional methods simply can't match.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-gaming font-bold text-center text-glow mb-12">
              Our <span className="text-primary">Story</span>
            </h2>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center font-bold text-primary-foreground">
                      {index + 1}
                    </div>
                  </div>
                  <Card className="card-gaming flex-grow p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        {item.year}
                      </Badge>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-gaming font-bold text-glow mb-4">
              What We <span className="text-primary">Believe</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The core values that drive everything we do at CodePlay
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-gaming text-center p-8 group">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-glow-pulse">
                  <value.icon className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-glow-secondary">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-gaming font-bold text-glow mb-8">
            Built by <span className="text-primary">Educators</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-muted-foreground mb-8">
              CodePlay was founded by experienced educators who understand the challenges 
              of learning programming. We've taught thousands of students and know what works.
            </p>
            <Card className="card-gaming p-8">
              <div className="text-6xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold mb-4">Join Our Teaching Revolution</h3>
              <p className="text-muted-foreground">
                Are you an educator interested in gamified learning? We're always looking 
                for passionate teachers to help shape the future of coding education.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;