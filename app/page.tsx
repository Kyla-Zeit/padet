import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, Shield, Sprout, Globe, ArrowRight, Mail, Phone, MapPin, Menu } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-2xl border-b border-border/20 z-50">
        <div className="max-w-8xl mx-auto px-8 lg:px-12">
          <div className="flex justify-between items-center h-32">
            <div className="text-3xl font-serif font-extralight tracking-wider text-primary">PADet</div>
            <div className="hidden md:flex items-center space-x-16 text-sm font-extralight">
              <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-500">
                About
              </Link>
              <Link
                href="#programs"
                className="text-muted-foreground hover:text-primary transition-colors duration-500"
              >
                Programs
              </Link>
              <Link href="#impact" className="text-muted-foreground hover:text-primary transition-colors duration-500">
                Impact
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-500">
                Contact
              </Link>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/ethiopian-children-and-families-in-community-devel.jpg"
            alt="Ethiopian families in community development"
            className="hero-image h-full w-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 max-w-8xl mx-auto px-8 lg:px-12 text-center text-white">
          <div className="space-y-16">
            <div className="accent-line w-32 mx-auto bg-white/40"></div>
            <h1 className="hero-text text-balance">
              EMPOWERING
              <br />
              <span className="italic font-extralight opacity-90">Communities</span>
            </h1>
            <p className="text-2xl font-extralight max-w-3xl mx-auto leading-relaxed opacity-80">
              25 years of sustainable development across Ethiopia
            </p>
          </div>
        </div>
      </section>

      <section className="py-48">
        <div className="max-w-8xl mx-auto px-8 lg:px-12">
          <div className="museum-grid gap-24">
            <div className="col-span-12 lg:col-span-3 text-center space-y-8">
              <div className="display-text text-primary">4.4M+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-[0.3em] font-extralight">
                Lives Transformed
              </div>
              <div className="accent-line w-24 mx-auto"></div>
            </div>
            <div className="col-span-12 lg:col-span-3 text-center space-y-8">
              <div className="display-text text-primary">2.5M+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-[0.3em] font-extralight">
                Women Empowered
              </div>
              <div className="accent-line w-24 mx-auto"></div>
            </div>
            <div className="col-span-12 lg:col-span-3 text-center space-y-8">
              <div className="display-text text-primary">1.6M+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-[0.3em] font-extralight">
                Children Protected
              </div>
              <div className="accent-line w-24 mx-auto"></div>
            </div>
            <div className="col-span-12 lg:col-span-3 text-center space-y-8">
              <div className="display-text text-primary">25</div>
              <div className="text-xs text-muted-foreground uppercase tracking-[0.3em] font-extralight">
                Years of Impact
              </div>
              <div className="accent-line w-24 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-48 bg-secondary/10">
        <div className="max-w-8xl mx-auto px-8 lg:px-12">
          <div className="museum-grid items-center gap-24">
            <div className="col-span-12 lg:col-span-1">
              <div className="section-number text-primary">01</div>
            </div>
            <div className="col-span-12 lg:col-span-5 space-y-12">
              <div className="accent-line w-32"></div>
              <h2 className="display-text text-balance text-primary">
                Building Sustainable
                <br />
                <span className="italic font-extralight opacity-90">Futures</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-extralight max-w-lg">
                Founded in 1998, the Professional Alliance for Development Ethiopia has been at the forefront of
                community-driven development, supporting children, young people, and women through participatory and
                sustainable programs.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <img
                src="/ethiopian-women-in-community-meeting-discussing-de.jpg"
                alt="Ethiopian women in community meeting"
                className="hero-image rounded-none shadow-none hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-48">
        <div className="max-w-8xl mx-auto px-8 lg:px-12">
          <div className="museum-grid mb-32">
            <div className="col-span-12 lg:col-span-1">
              <div className="section-number text-primary">02</div>
            </div>
            <div className="col-span-12 lg:col-span-7 space-y-12">
              <div className="accent-line w-32"></div>
              <h2 className="display-text text-balance text-primary">
                Our Program
                <br />
                <span className="italic font-extralight opacity-90">Areas</span>
              </h2>
            </div>
          </div>

          <div className="museum-grid gap-12">
            <Card className="col-span-12 lg:col-span-6 bg-transparent border-border/20 hover-lift rounded-none overflow-hidden">
              <CardContent className="p-16 space-y-8">
                <Heart className="h-6 w-6 text-primary opacity-60" />
                <h3 className="text-3xl font-serif font-extralight text-primary">Sexual & Reproductive Health</h3>
                <p className="text-muted-foreground leading-relaxed font-extralight text-lg">
                  Comprehensive programs addressing HIV/AIDS prevention, family planning, and reproductive health
                  education across Ethiopian communities.
                </p>
              </CardContent>
            </Card>

            <Card className="col-span-12 lg:col-span-6 bg-transparent border-border/20 hover-lift rounded-none overflow-hidden">
              <CardContent className="p-16 space-y-8">
                <Shield className="h-6 w-6 text-primary opacity-60" />
                <h3 className="text-3xl font-serif font-extralight text-primary">Child Safeguarding</h3>
                <p className="text-muted-foreground leading-relaxed font-extralight text-lg">
                  Protecting children from harm and creating safe environments for healthy development and growth in
                  vulnerable communities.
                </p>
              </CardContent>
            </Card>

            <Card className="col-span-12 lg:col-span-4 bg-transparent border-border/20 hover-lift rounded-none overflow-hidden">
              <CardContent className="p-12 space-y-8">
                <Sprout className="h-6 w-6 text-primary opacity-60" />
                <h3 className="text-2xl font-serif font-extralight text-primary">Food Security</h3>
                <p className="text-muted-foreground leading-relaxed font-extralight">
                  Sustainable food systems and youth livelihood programs.
                </p>
              </CardContent>
            </Card>

            <Card className="col-span-12 lg:col-span-4 bg-transparent border-border/20 hover-lift rounded-none overflow-hidden">
              <CardContent className="p-12 space-y-8">
                <Users className="h-6 w-6 text-primary opacity-60" />
                <h3 className="text-2xl font-serif font-extralight text-primary">Gender Equality</h3>
                <p className="text-muted-foreground leading-relaxed font-extralight">
                  Empowering women through education and economic opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="col-span-12 lg:col-span-4 bg-transparent border-border/20 hover-lift rounded-none overflow-hidden">
              <CardContent className="p-12 space-y-8">
                <Globe className="h-6 w-6 text-primary opacity-60" />
                <h3 className="text-2xl font-serif font-extralight text-primary">Emergency Response</h3>
                <p className="text-muted-foreground leading-relaxed font-extralight">
                  Rapid response for natural disasters and humanitarian crises.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-48 bg-secondary/10">
        <div className="max-w-8xl mx-auto px-8 lg:px-12">
          <div className="museum-grid items-center">
            <div className="col-span-12 lg:col-span-1">
              <div className="section-number text-primary">03</div>
            </div>
            <div className="col-span-12 lg:col-span-7 space-y-12">
              <div className="accent-line w-32"></div>
              <h2 className="display-text text-balance text-primary">
                Join Us in Creating
                <br />
                <span className="italic font-extralight opacity-90">Lasting Change</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-extralight max-w-2xl">
                Whether you're looking to volunteer, partner with us, or support our mission, there are many meaningful
                ways to get involved in our work.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 space-y-6">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none py-8 text-lg font-extralight border-0">
                Volunteer With Us
                <ArrowRight className="ml-3 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="w-full border-border/30 hover:bg-secondary/30 rounded-none py-8 text-lg font-extralight bg-transparent"
              >
                Partner With PADet
                <ArrowRight className="ml-3 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-32 border-t border-border/20">
        <div className="max-w-8xl mx-auto px-8 lg:px-12">
          <div className="museum-grid">
            <div className="col-span-12 lg:col-span-6 space-y-12">
              <div className="text-4xl font-serif font-extralight text-primary">PADet</div>
              <p className="text-muted-foreground text-xl max-w-md leading-relaxed font-extralight">
                Professional Alliance for Development Ethiopia — Creating sustainable change since 1998 through
                community-driven development programs.
              </p>
              <div className="accent-line w-48"></div>
            </div>
            <div className="col-span-12 lg:col-span-2 space-y-8">
              <h3 className="font-serif text-xl text-primary font-extralight">Programs</h3>
              <div className="space-y-4 text-muted-foreground font-extralight">
                <div className="hover:text-primary transition-colors cursor-pointer">Sexual & Reproductive Health</div>
                <div className="hover:text-primary transition-colors cursor-pointer">Child Safeguarding</div>
                <div className="hover:text-primary transition-colors cursor-pointer">Food Security</div>
                <div className="hover:text-primary transition-colors cursor-pointer">Gender Equality</div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-2 space-y-8">
              <h3 className="font-serif text-xl text-primary font-extralight">Get Involved</h3>
              <div className="space-y-4 text-muted-foreground font-extralight">
                <div className="hover:text-primary transition-colors cursor-pointer">Volunteer</div>
                <div className="hover:text-primary transition-colors cursor-pointer">Partnership</div>
                <div className="hover:text-primary transition-colors cursor-pointer">Donate</div>
                <div className="hover:text-primary transition-colors cursor-pointer">Careers</div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-2 space-y-8">
              <h3 className="font-serif text-xl text-primary font-extralight">Contact</h3>
              <div className="space-y-4 text-muted-foreground font-extralight">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 opacity-60" />
                  <span>Addis Ababa, Ethiopia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 opacity-60" />
                  <span>info@padet.org</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 opacity-60" />
                  <span>+251 11 XXX XXXX</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border/20 mt-24 pt-12">
            <p className="text-sm text-muted-foreground text-center font-extralight">
              © 2025 Professional Alliance for Development Ethiopia (PADet). All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
