import { MapPin, Building2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-primary text-sm uppercase tracking-[0.3em]">Contact Us</span>
            <div className="w-12 h-[2px] bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Interested in working with us? Reach out for project enquiries and consultations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Company Info Card */}
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center">
                    <Building2 className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Company Information</h3>
                    <p className="text-sm text-muted-foreground">Registered with SSM Malaysia</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-primary uppercase tracking-wider mb-1">Company Name</p>
                    <p className="text-foreground font-medium">FORTIS BUILD ASIA SDN. BHD.</p>
                  </div>
                  <div>
                    <p className="text-xs text-primary uppercase tracking-wider mb-1">Registration No.</p>
                    <p className="text-muted-foreground">202001028370 (1384690-V)</p>
                  </div>
                  <div>
                    <p className="text-xs text-primary uppercase tracking-wider mb-1">Incorporated</p>
                    <p className="text-muted-foreground">17 September 2020</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Address Card */}
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Business Correspondence Address</h3>
                    <p className="text-sm text-muted-foreground">Shah Alam, Selangor</p>
                  </div>
                </div>
                
                <div className="space-y-1 text-muted-foreground">
                  <p>No. 7, Jalan Warden U1/76,</p>
                  <p>Taman Perindustrian Batu Tiga,</p>
                  <p>40150 Shah Alam,</p>
                  <p>Selangor, Malaysia.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Notice */}
          <div className="mt-8 p-6 bg-secondary border border-border text-center">
            <p className="text-muted-foreground">
              Official phone number, email, and project office information will be updated soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
