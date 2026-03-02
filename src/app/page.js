import { Navbar } from "@/components/Navbar";
import { PageWrapper } from "@/components/PageWrapper";
import { Hero } from "@/components/Hero";
import dynamic from 'next/dynamic';

// Lazy-load everything below the fold to drastically reduce initial JS payload
const About = dynamic(() => import("@/components/About").then((mod) => mod.About));
const ClientMarquee = dynamic(() => import("@/components/ClientMarquee").then((mod) => mod.ClientMarquee));
const Portfolio = dynamic(() => import("@/components/Portfolio").then((mod) => mod.Portfolio));
const Services = dynamic(() => import("@/components/Services").then((mod) => mod.Services));
const Blog = dynamic(() => import("@/components/Blog").then((mod) => mod.Blog));
const FAQ = dynamic(() => import("@/components/FAQ").then((mod) => mod.FAQ));
const Pricing = dynamic(() => import("@/components/Pricing").then((mod) => mod.Pricing));
const Contact = dynamic(() => import("@/components/Contact").then((mod) => mod.Contact));

export default function Home() {
  return (
    <PageWrapper className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <ClientMarquee />
        <Portfolio />
        <Services />
        <Blog />
        <FAQ />
        <Pricing />
        <Contact />
      </main>
    </PageWrapper>
  );
}
