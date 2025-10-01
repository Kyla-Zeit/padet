// app/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Heart,
  Shield,
  Sprout,
  Globe,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Menu,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// Static imports so GH Pages basePath works
import heroImg from "@/public/ethiopian-children-and-families-in-community-devel.jpg";
import aboutImg from "@/public/ethiopian-women-in-community-meeting-discussing-de.jpg";

// Nav config to mirror padet.org (plus Announcements dropdown)
const NAV = [
  { label: "About", href: "#about" },
  { label: "Publications", href: "https://padet.org/publications/", external: true },
  { label: "News", href: "https://padet.org/news/", external: true },
  { label: "Contact", href: "#contact" },
];
const ANNOUNCEMENTS = [
  { label: "Bid", href: "https://padet.org/bids/", external: true },
  { label: "Vacancy", href: "https://padet.org/vacancy/", external: true },
];

// Animation presets
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardRise: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-2xl border-b border-border/20 z-50">
        <div className="max-w-8xl mx-auto px-8 lg:px-12">
          <div className="flex justify-between items-center h-32">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-serif font-extralight tracking-wider text-primary"
            >
              PADet
            </motion.div>

            <div className="hidden md:flex items-center gap-10 text-sm font-extralight">
              {NAV.map((item) => (
                <motion.div key={item.label} variants={fadeUp} initial="hidden" animate="show">
                  <Link
                    href={item.href}
                    {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-muted-foreground hover:text-primary transition-colors duration-500"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* Announcements dropdown */}
              <div className="relative group">
                <button className="text-muted-foreground hover:text-primary transition-colors duration-500">
                  Announcements
                </button>
                <div className="absolute right-0 mt-3 hidden group-hover:block bg-background border border-border/30 shadow-lg min-w-40">
                  {ANNOUNCEMENTS.map((a) => (
                    <Link
                      key={a.label}
                      href={a.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 whitespace-nowrap hover:bg-secondary/40"
                    >
                      {a.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* mobile button (no menu wired yet) */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            animate={{ scale: 1.06 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          >
            <Image
              src={heroImg}
              alt="Ethiopian families in community development"
              fill
              priority
              placeholder="blur"
              className="hero-image object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 max-w-8xl mx-auto px-8 lg:px-12 text-center text-white">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="space-y-16"
          >
            <motion.div variants={fadeUp} className="accent-line w-32 mx-auto bg-white/40" />
            <motion.h1 variants={fadeUp} className="hero-text text-balance">
              EMPOWERING
              <br />
              <span className="italic font-extralight opacity-90">Communities</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-2xl font-extralight max-w-3xl mx-auto leading-relaxed opacity-90">
              25 years of sustainable development across Ethiopia
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-48">
        <div className="max-w-8xl mx-auto px-8 lg:px-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="museum-grid gap-24"
          >
            {[
              ["4.4M+", "Lives Transformed"],
              ["2.5M+", "Women Empowered"],
              ["1.6M+", "Children Protected"],
              ["25", "Years of Impact"],
            ].map(([n, label]) => (
              <motion.div key={label} variants={fadeUp} className="col-span-12 lg:col-span-3 text-center space-y-8">
                <div className="display-text text-primary">{n}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-[0.3em] font-extralight">
                  {label}
                </div>
                <div className="accent-line w-24 mx-auto" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-48 bg-secondary/10">
        <div className="max-w-8xl mx-auto px-8 lg:px-12">
          <div className="museum-grid items-center gap-24">
            <div className="col-span-12 lg:col-span-1">
              <div className="section-number text-primary">01</div>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="col-span-12 lg:col-span-5 space-y-12"
            >
              <motion.div variants={fadeUp} className="accent-line w-32" />
              <motion.h2 variants={fadeUp} className="display-text text-balance text-primary">
                Building Sustainable
                <br />
                <span className="italic font-extralight opacity-90">Futures</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed font-extralight max-w-lg">
                Founded in 1998, the Professional Alliance for Development Ethiopia has been at the forefront of
                community-driven development, supporting children, young people, and women through participatory and
                sustainable programs.
              </motion.p>
            </motion.div>
            <motion.div
              className="col-span-12 lg:col-span-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src={aboutImg}
                alt="Ethiopian women in community meeting"
                width={1600}
                height={1067}
                placeholder="blur"
                className="hero-image rounded-none shadow-none hover-lift w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROGRAM CARDS */}
      <section className="py-48">
        <div className="max-w-8xl mx-auto px-8 lg:px-12">
          <div className="museum-grid mb-32">
            <div className="col-span-12 lg:col-span-1">
              <div className="section-number text-primary">02</div>
            </div>
            <div className="col-span-12 lg:col-span-7 space-y-12">
              <div className="accent-line w-32" />
              <h2 className="display-text text-balance text-primary">
                Our Program
                <br />
                <span className="italic font-extralight opacity-90">Areas</span>
              </h2>
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="museum-grid gap-12"
          >
            {[
              {
                icon: <Heart className="h-6 w-6 text-primary opacity-60" />,
                title: "Sexual & Reproductive Health",
                body:
                  "Comprehensive programs addressing HIV/AIDS prevention, family planning, and reproductive health education across Ethiopian communities.",
                span: "col-span-12 lg:col-span-6",
              },
              {
                icon: <Shield className="h-6 w-6 text-primary opacity-60" />,
                title: "Child Safeguarding",
                body:
                  "Protecting children from harm and creating safe environments for healthy development and growth in vulnerable communities.",
                span: "col-span-12 lg:col-span-6",
              },
              {
                icon: <Sprout className="h-6 w-6 text-primary opacity-60" />,
                title: "Food Security",
                body: "Sustainable food systems and youth livelihood programs.",
                span: "col-span-12 lg:col-span-4",
              },
              {
                icon: <Users className="h-6 w-6 text-primary opacity-60" />,
                title: "Gender Equality",
                body: "Empowering women through education and economic opportunities.",
                span: "col-span-12 lg:col-span-4",
              },
              {
                icon: <Globe className="h-6 w-6 text-primary opacity-60" />,
                title: "Emergency Response",
                body: "Rapid response for natural disasters and humanitarian crises.",
                span: "col-span-12 lg:col-span-4",
              },
            ].map((c) => (
              <motion.div key={c.title} variants={cardRise} className={`${c.span}`}>
                <Card className="bg-transparent border-border/20 hover-lift rounded-none overflow-hidden">
                  <CardContent className="p-16 space-y-8">
                    {c.icon}
                    <h3 className="text-3xl font-serif font-extralight text-primary">{c.title}</h3>
                    <p className="text-muted-foreground leading-relaxed font-extralight text-lg">{c.body}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer id="contact" className="py-32 border-t border-border/20">
        <div className="max-w-8xl mx-auto px-8 lg:px-12">
          <div className="museum-grid">
            <div className="col-span-12 lg:col-span-6 space-y-12">
              <div className="text-4xl font-serif font-extralight text-primary">PADet</div>
              <p className="text-muted-foreground text-xl max-w-md leading-relaxed font-extralight">
                Professional Alliance for Development Ethiopia — Creating sustainable change since 1998 through
                community-driven development programs.
              </p>
              <div className="accent-line w-48" />
            </div>
            <div className="col-span-12 lg:col-span-2 space-y-8">
              <h3 className="font-serif text-xl text-primary font-extralight">Programs</h3>
              <div className="space-y-4 text-muted-foreground font-extralight">
                <div className="hover:text-primary transition-colors cursor-pointer">Sexual &amp; Reproductive Health</div>
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
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 opacity-60" />
                  <span>Addis Ababa, Ethiopia</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 opacity-60" />
                  <span>info@padet.org</span>
                </div>
                <div className="flex items-center gap-3">
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
  );
}
