import { Building2, Zap, Factory, Ruler, HardHat, Wrench } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Building2,
    title: "Building & Civil Works",
    description:
      "Comprehensive building and civil construction services for commercial, residential, and public sector projects across Malaysia.",
  },
  {
    icon: Zap,
    title: "Mechanical & Electrical",
    description:
      "Complete M&E solutions including installation, maintenance, and systems integration for buildings and facilities.",
  },
  {
    icon: Factory,
    title: "Infrastructure Works",
    description:
      "Infrastructure development including roads, drainage, utilities, and site development for industrial and commercial zones.",
  },
  {
    icon: Ruler,
    title: "Design & Build",
    description:
      "End-to-end design-and-build solutions that streamline your project from concept through completion under one contract.",
  },
  {
    icon: HardHat,
    title: "Project Management",
    description:
      "Professional project management services as contractor, subcontractor, or supplier ensuring quality and timely delivery.",
  },
  {
    icon: Wrench,
    title: "Renovation & Retrofitting",
    description:
      "Transform and upgrade existing structures with modern renovation and retrofitting solutions for all building types.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-primary text-sm uppercase tracking-[0.3em]">Our Services</span>
            <div className="w-12 h-[2px] bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Construction Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a full spectrum of construction services tailored to meet the unique needs of each project, 
            ensuring excellence at every stage.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                {/* Decorative line */}
                <div className="mt-6 pt-6 border-t border-border">
                  <span className="text-primary text-sm uppercase tracking-wider font-medium group-hover:underline cursor-pointer">
                    Learn More →
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
