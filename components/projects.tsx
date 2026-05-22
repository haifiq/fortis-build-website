"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Menara Fortis Tower",
    category: "Commercial",
    location: "Kuala Lumpur",
    image: "/images/project-1.jpg",
    description: "A 45-story premium office tower featuring state-of-the-art facilities and sustainable design.",
    year: "2023",
  },
  {
    id: 2,
    title: "The Residences @ Selangor",
    category: "Residential",
    location: "Shah Alam",
    image: "/images/project-2.jpg",
    description: "Luxury condominium development with 500 units offering panoramic city views.",
    year: "2024",
  },
  {
    id: 3,
    title: "Fortis Industrial Park",
    category: "Industrial",
    location: "Klang Valley",
    image: "/images/project-3.jpg",
    description: "Modern industrial complex spanning 50 acres with advanced logistics facilities.",
    year: "2023",
  },
]

const categories = ["All", "Commercial", "Residential", "Industrial"]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-primary text-sm uppercase tracking-[0.3em]">Featured Projects</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Our Landmark Projects
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-primary"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-xs uppercase tracking-wider">
                  {project.category}
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 right-4 bg-background/90 text-foreground px-3 py-1 text-xs">
                  {project.year}
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{project.location}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <span className="inline-flex items-center text-primary text-sm font-medium group-hover:underline">
                  View Project <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Projects
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
