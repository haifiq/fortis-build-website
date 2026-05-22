import Image from "next/image"
import { CheckCircle } from "lucide-react"

const features = [
  "Building and civil construction works",
  "Mechanical and electrical (M&E) services",
  "Turnkey and design-and-build solutions",
  "Infrastructure development projects",
  "Renovation and retrofitting services",
  "Professional project management",
]

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/about-team.jpg"
                alt="Our construction team"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-primary -z-10 hidden lg:block" />
            {/* Experience badge */}
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground p-6 lg:p-8">
              <div className="text-3xl lg:text-4xl font-bold">Since 2020</div>
              <div className="text-sm uppercase tracking-wider mt-1">Est. Malaysia</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-primary text-sm uppercase tracking-[0.3em]">About Us</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Building the Future of Malaysia
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Fortis Build Asia Sdn. Bhd. (Registration No: 202001028370) is a Malaysian design-and-build and 
              construction company incorporated on 17 September 2020. Headquartered in Shah Alam, Selangor, 
              we specialize in building, civil, mechanical, electrical, renovation, and infrastructure works.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              We undertake projects as a contractor, subcontractor, supplier, and project manager, delivering 
              comprehensive turnkey and design-and-build solutions. Our commitment to excellence and innovative 
              construction techniques have established us as a trusted partner across Malaysia.
            </p>

            {/* Features list */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
