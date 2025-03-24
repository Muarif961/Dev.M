import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Smartphone, Globe } from "lucide-react"
import Project from "@/Data/Projects"

// Project data - replace with your actual projects


export default function Projects() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredProjects = activeTab === "all" ? Project : Project.filter((project) => project.type === activeTab)

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="space-y-2 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-left">My Projects</h2>
        <p className="text-left text-muted-foreground max-w-[700px]">
          A collection of my recent work in mobile and web development
        </p>
      </div>

      <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveTab}>
        <div className="flex justify-left">
          <TabsList className="grid grid-cols-3 w-full max-w-md">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="web">
              <Globe className="mr-2 h-4 w-4" />
              Web
            </TabsTrigger>
            <TabsTrigger value="mobile">
              <Smartphone className="mr-2 h-4 w-4" />
              Mobile
            </TabsTrigger>
          </TabsList>
        </div>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden rounded-xl border bg-background shadow-md transition-all hover:shadow-lg"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-3 right-3">
                <Badge variant={project.type === "web" ? "default" : "secondary"}>
                  {project.type === "web" ? (
                    <Globe className="mr-1 h-3 w-3" />
                  ) : (
                    <Smartphone className="mr-1 h-3 w-3" />
                  )}
                  {project.type}
                </Badge>
              </div>
            </div>
            <div className="p-5 space-y-3">
              <h3 className="font-bold text-xl">{project.title}</h3>
              <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className={`flex gap-3 pt-3 ${project.isAvailable?'block':'hidden'}`}>
                <Button asChild size="sm" variant="default">
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                {/* <Button asChild size="sm" variant="outline">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button> */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

