import { ArrowRight, Building2, Wrench, Zap, HardHat, Compass, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const capabilities = [
  {
    icon: Compass,
    title: "Design & Build Projects",
    description:
      "Concept planning, design coordination, technical documentation, and construction delivery for commercial, industrial, and infrastructure projects.",
  },
  {
    icon: Building2,
    title: "Building & Civil Works",
    description:
      "General building works, civil construction, site preparation, structural support works, and construction-related services.",
  },
  {
    icon: Zap,
    title: "Mechanical & Electrical Works",
    description:
      "M&E installation, maintenance, system coordination, and support works for buildings and facilities.",
  },
  {
    icon: Wrench,
    title: "Renovation & Retrofitting",
    description:
      "Renovation, upgrading, and improvement works for offices, commercial spaces, industrial premises, and existing buildings.",
  },
  {
    icon: HardHat,
    title: "Infrastructure Support Works",
    description:
      "Drainage, utilities, external works, road-related works, and site development support.",
  },
  {
    icon: Users,
    title: "Project Management & Contracting",
    description:
      "Project coordination and management as contractor, subcontractor, supplier, or project manager.",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-primary text-sm uppercase tracking-[0.3em]">What We Do</span>
            <div className="w-12 h-[2px] bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Capabilities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Fortis Build Asia provides comprehensive design-and-build and construction services 
            across multiple disciplines, delivering quality solutions for projects of all scales.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            return (
              <Card
                key={index}
                className="bg-background border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {capability.description}
                  </p>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                  >
                    Request a Quote <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to discuss your project requirements?
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href="#contact">
              Get in Touch
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
