import { Building2, Home, Factory, Ruler, HardHat, Wrench } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Building2,
    title: "Commercial Construction",
    description:
      "From office towers to retail complexes, we deliver cutting-edge commercial spaces that drive business success.",
  },
  {
    icon: Home,
    title: "Residential Projects",
    description:
      "Premium homes and condominiums built with precision craftsmanship and attention to every detail.",
  },
  {
    icon: Factory,
    title: "Industrial Facilities",
    description:
      "Warehouses, factories, and industrial complexes designed for optimal efficiency and productivity.",
  },
  {
    icon: Ruler,
    title: "Design & Build",
    description:
      "Comprehensive design-build solutions that streamline your project from concept to completion.",
  },
  {
    icon: HardHat,
    title: "Project Management",
    description:
      "Expert oversight ensuring your project stays on schedule, within budget, and meets quality standards.",
  },
  {
    icon: Wrench,
    title: "Renovation & Retrofitting",
    description:
      "Transform existing structures with modern upgrades and sustainable retrofitting solutions.",
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
