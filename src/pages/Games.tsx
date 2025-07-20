import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import GameCard from "@/components/GameCard";
import { Search, Filter, Star, Clock, Trophy } from "lucide-react";

const Games = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  const categories = ["All", "HTML/CSS", "JavaScript", "Python", "Logic", "Algorithms", "Debugging"];
  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

  const allGames = [
    {
      title: "Bug Buster",
      description: "Hunt down and fix bugs in broken code snippets under time pressure",
      difficulty: "Beginner" as const,
      duration: "5-10 min",
      players: "1 Player",
      tags: ["Debugging", "HTML", "Logic"]
    },
    {
      title: "Code Kart",
      description: "Race against others by writing correct code to boost your speed",
      difficulty: "Intermediate" as const,
      duration: "10-15 min",
      players: "1-4 Players",
      tags: ["Speed", "JavaScript", "Syntax"]
    },
    {
      title: "Logic Maze",
      description: "Navigate a robot through puzzles using loops and conditionals",
      difficulty: "Advanced" as const,
      duration: "15-20 min",
      players: "1 Player",
      tags: ["Algorithms", "Python", "Logic"]
    },
    {
      title: "CSS Battle Arena",
      description: "Recreate designs using only CSS in this creative challenge",
      difficulty: "Intermediate" as const,
      duration: "8-12 min",
      players: "1 Player",
      tags: ["CSS", "Design", "Creativity"]
    },
    {
      title: "Function Factory",
      description: "Build and connect functions to solve complex programming puzzles",
      difficulty: "Advanced" as const,
      duration: "20-25 min",
      players: "1 Player",
      tags: ["Functions", "JavaScript", "Architecture"]
    },
    {
      title: "HTML Hero",
      description: "Master HTML structure by building webpages from scratch",
      difficulty: "Beginner" as const,
      duration: "10-15 min",
      players: "1 Player",
      tags: ["HTML", "Structure", "Basics"]
    },
    {
      title: "Variable Quest",
      description: "Learn data types and variable manipulation through RPG-style quests",
      difficulty: "Beginner" as const,
      duration: "12-18 min",
      players: "1 Player",
      tags: ["Variables", "Python", "Data Types"]
    },
    {
      title: "Loop Master",
      description: "Solve increasingly complex challenges using different loop types",
      difficulty: "Intermediate" as const,
      duration: "15-20 min",
      players: "1 Player",
      tags: ["Loops", "Algorithms", "Optimization"]
    },
    {
      title: "API Adventure",
      description: "Connect to real APIs and handle data in this modern web challenge",
      difficulty: "Advanced" as const,
      duration: "25-30 min",
      players: "1 Player",
      tags: ["APIs", "JavaScript", "Async"]
    }
  ];

  const filteredGames = allGames.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         game.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         game.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || 
                           game.tags.some(tag => tag.toLowerCase().includes(selectedCategory.toLowerCase()));
    
    const matchesDifficulty = selectedDifficulty === "All" || game.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 particles-bg">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-slide-up">
            <Badge variant="outline" className="mb-6 text-primary border-primary/30 px-4 py-2">
              Interactive Learning
            </Badge>
            <h1 className="text-5xl md:text-6xl font-gaming font-black text-glow mb-6">
              Coding <span className="text-primary">Mini-Games</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Choose from our collection of interactive coding games designed to make 
              learning programming concepts fun and engaging.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-accent" />
                <span className="text-lg"><strong className="text-accent">50+</strong> Games</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-lg"><strong className="text-primary">5-30</strong> Minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-secondary" />
                <span className="text-lg"><strong className="text-secondary">4.8</strong> Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search */}
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search games by name, description, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg bg-background/80 border-border/50 focus:border-primary/50"
              />
            </div>

            {/* Filter Buttons */}
            <div className="space-y-6">
              {/* Categories */}
              <div>
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Categories
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      onClick={() => setSelectedCategory(category)}
                      className={
                        selectedCategory === category 
                          ? "btn-gaming text-primary-foreground" 
                          : "border-border/50 hover:border-primary/50"
                      }
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Difficulty */}
              <div>
                <h3 className="text-lg font-bold mb-3">Difficulty Level</h3>
                <div className="flex flex-wrap gap-2">
                  {difficulties.map((difficulty) => (
                    <Button
                      key={difficulty}
                      variant={selectedDifficulty === difficulty ? "default" : "outline"}
                      onClick={() => setSelectedDifficulty(difficulty)}
                      className={
                        selectedDifficulty === difficulty 
                          ? "btn-secondary-gaming text-secondary-foreground" 
                          : "border-border/50 hover:border-secondary/50"
                      }
                    >
                      {difficulty}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">
                {filteredGames.length} Game{filteredGames.length !== 1 ? 's' : ''} Found
              </h2>
              <div className="text-muted-foreground">
                Showing {filteredGames.length} of {allGames.length} games
              </div>
            </div>

            {/* Games Grid */}
            {filteredGames.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredGames.map((game, index) => (
                  <GameCard key={index} {...game} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🎮</div>
                <h3 className="text-2xl font-bold mb-4">No Games Found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search terms or filters to find more games.
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                    setSelectedDifficulty("All");
                  }}
                  variant="outline"
                  className="border-primary/50 hover:border-primary"
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Games;