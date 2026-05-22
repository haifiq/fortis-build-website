import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

const services = [
  "Building & Civil Works",
  "Mechanical & Electrical",
  "Infrastructure Works",
  "Design & Build",
  "Project Management",
  "Renovation",
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">F</span>
              </div>
              <div>
                <span className="text-foreground font-semibold text-lg tracking-tight block">FORTIS BUILD</span>
                <span className="text-primary text-xs -mt-1 tracking-widest block">ASIA SDN. BHD.</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              A Malaysian design-and-build and construction company specializing in building, civil, 
              mechanical, electrical, renovation, and infrastructure works since 2020.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-muted flex items-center justify-center hover:bg-primary transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-muted-foreground text-sm hover:text-primary transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-semibold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li>
                <span className="text-primary text-xs uppercase tracking-wider block mb-1">Address</span>
                <span className="text-muted-foreground text-sm">
                  No. 7, Jalan Warden U1/76,<br />
                  Taman Perindustrian Batu Tiga,<br />
                  40150 Shah Alam, Selangor, Malaysia
                </span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm italic">
                  Official phone number and email will be updated soon.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Fortis Build Asia Sdn. Bhd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
