import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Star, Clock, Users } from "lucide-react";

interface GameCardProps {
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  players: string;
  tags: string[];
  image?: string;
}

const GameCard = ({ title, description, difficulty, duration, players, tags }: GameCardProps) => {
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-primary/20 text-primary border-primary/30";
      case "Intermediate": return "bg-secondary/20 text-secondary border-secondary/30";
      case "Advanced": return "bg-accent/20 text-accent border-accent/30";
      default: return "bg-primary/20 text-primary border-primary/30";
    }
  };

  return (
    <Card className="card-gaming group cursor-pointer">
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-glow group-hover:text-glow-secondary transition-all duration-300">
              {title}
            </h3>
            <p className="text-muted-foreground mt-1">{description}</p>
          </div>
          <Badge className={`${getDifficultyColor(difficulty)} font-medium`}>
            {difficulty}
          </Badge>
        </div>

        {/* Game Stats */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{players}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-accent" />
            <span>4.8</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs border-border/50 hover:border-primary/50 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Play Button */}
        <Button 
          className="w-full btn-gaming text-primary-foreground group-hover:scale-105 transition-transform duration-300"
          size="lg"
        >
          <Play className="h-4 w-4 mr-2" />
          Play Now
        </Button>
      </div>
    </Card>
  );
};

export default GameCard;