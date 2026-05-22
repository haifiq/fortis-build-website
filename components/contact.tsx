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
            Interested in working with us? Contact our office for project enquiries and consultations.
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
                    <h3 className="text-xl font-semibold text-foreground">Business Address</h3>
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
              For project enquiries, please contact our office directly. Official phone number and email will be updated soon.
            </p>
          </div>

          {/* Map */}
          <div className="mt-8 relative aspect-video bg-secondary border border-border overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1!2d101.52!3d3.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4d7a35a3e5e7%3A0x9e4e3c1c0c0c0c0c!2sTaman%20Perindustrian%20Batu%20Tiga%2C%20Shah%20Alam%2C%20Selangor!5e0!3m2!1sen!2smy!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Fortis Build Asia Location - Shah Alam"
              className="grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
