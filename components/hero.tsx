import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-construction.jpg"
          alt="Modern construction project"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Tagline */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-primary text-sm uppercase tracking-[0.3em]">Building Excellence</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
            <span className="block">Engineering</span>
            <span className="block text-primary">Tomorrow&apos;s</span>
            <span className="block">Landmarks</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Fortis Build Asia Sdn. Bhd. is a Malaysian design-and-build contractor delivering 
            comprehensive construction solutions in building, civil, M&E, and infrastructure works.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
              <Link href="#projects">
                View Our Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-foreground/20 text-foreground hover:bg-foreground/5">
              <Link href="#contact">
                Contact Us
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">2020</div>
              <div className="text-sm text-muted-foreground mt-1">Year Incorporated</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">RM100K</div>
              <div className="text-sm text-muted-foreground mt-1">Issued Share Capital</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">Malaysia</div>
              <div className="text-sm text-muted-foreground mt-1">Design & Build Contractor</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  )
}
