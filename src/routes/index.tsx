import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Menu, ShieldCheck } from "lucide-react";
import labImage from "@/assets/cyberbodha-learning-lab.jpg";
import cyberbodhaLogo from "@/assets/cyberbodha-logo.png";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CyberBodha | Learn. Practice. Simulate. Certify." },
      { name: "description", content: "Build real-world cybersecurity skills through expert-led learning, hands-on virtual labs, and practical cyber range scenarios." },
      { property: "og:title", content: "CyberBodha | Learn. Practice. Simulate. Certify." },
      { property: "og:description", content: "Build real-world cybersecurity skills through guided learning and hands-on practice." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AcademyHome,
});

const portalLinks = [
  { label: "Student portal", caption: "Continue learning", to: "/student" as const },
  { label: "Instructor portal", caption: "Support your learners", to: "/instructor" as const },
  { label: "Admin portal", caption: "Manage your organization", to: "/admin" as const },
];

function AcademyHome() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <main className="academy-page">
      <header className="academy-header">
        <Link to="/" className="academy-brand cursor-pointer" aria-label="CyberBodha home"><span className="brand-mark"><img src={cyberbodhaLogo} alt="CyberBodha Logo" width={26} height={26} /></span><span className="brand-wordmark">Cyber<span>Bodha</span></span></Link>
        <nav className="academy-nav" aria-label="Main navigation">
          <a href="#programs">Programs <ChevronDown size={13} /></a><a href="#catalog">Course catalog</a><a href="#cyber-range">Cyber range</a><a href="#training">Corporate training</a><a href="#universities">University programs</a><a href="#about">About</a><a href="#contact">Contact</a>
        </nav>
        <div className="academy-actions"><Link className="academy-login" to="/student">Log in</Link><Button asChild size="sm" className="hidden sm:inline-flex"><Link to="/student">Get started <ArrowRight size={14} /></Link></Button></div>
        <Button variant="ghost" size="icon" className="academy-mobile-menu" aria-label={mobileNavOpen ? "Close menu" : "Open menu"} aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>{mobileNavOpen ? <ChevronDown size={19} /> : <Menu size={19} />}</Button>
      </header>
      {mobileNavOpen ? <nav className="academy-mobile-panel" aria-label="Mobile main navigation">
        <a href="#programs" onClick={() => setMobileNavOpen(false)}>Programs</a><a href="#catalog" onClick={() => setMobileNavOpen(false)}>Course catalog</a><a href="#cyber-range" onClick={() => setMobileNavOpen(false)}>Cyber range</a><a href="#training" onClick={() => setMobileNavOpen(false)}>Corporate training</a><a href="#universities" onClick={() => setMobileNavOpen(false)}>University programs</a><a href="#about" onClick={() => setMobileNavOpen(false)}>About</a><a href="#contact" onClick={() => setMobileNavOpen(false)}>Contact</a><Link to="/student" onClick={() => setMobileNavOpen(false)}>Log in</Link>
      </nav> : null}

      <section className="academy-hero">
        <div className="academy-hero-grid">
          <div className="academy-hero-copy">
            <p className="hero-eyebrow"><span className="eyebrow-rule" /> CYBERSECURITY, BUILT FOR THE REAL WORLD</p>
            <h1>Learn to defend<br />what <span>matters.</span></h1>
            <p className="hero-description">Build the confidence to meet today’s security challenges—with expert guidance, hands-on practice, and skills that move you forward.</p>
            <div className="hero-actions"><Button asChild size="lg" className="hero-primary"><Link to="/student">Explore learning <ArrowRight size={16} /></Link></Button><a href="#programs" className="hero-secondary">Discover our programs <ArrowUpRight size={15} /></a></div>
            <div className="hero-proof"><div className="proof-avatars"><span>SR</span><span>MK</span><span>AP</span><span>+</span></div><p><strong>Learn by doing.</strong><br />Join a community building safer systems.</p></div>
          </div>
          <div className="academy-hero-visual">
            <img className="academy-hero-image" src={labImage} width={1536} height={912} alt="Cybersecurity learners practice threat analysis with an instructor in a modern cyber range." />
            <div className="visual-caption"><span className="visual-caption-icon"><ShieldCheck size={16} /></span><div><p>Practice that prepares you</p><span>Real scenarios. Guided learning.</span></div><span className="visual-live"><span /> LIVE LABS</span></div>
            <div className="hero-image-index">01 <span>/</span> 04</div>
          </div>
        </div>
        <div className="academy-hero-bottom"><span>Learn. Practice. Simulate. Certify.</span><span className="hero-bottom-right"><span className="bottom-indicator" /> START WITH A SKILL. GROW INTO A CAREER.</span></div>
      </section>

      <section className="academy-programs" id="programs">
        <div className="programs-heading"><div><p className="section-overline"><span className="eyebrow-rule" /> YOUR NEXT CHAPTER</p><h2>Learning that meets<br />you where you are.</h2></div><p className="programs-intro">Whether you’re starting fresh or strengthening your team, find a clear path from curiosity to capability.</p></div>
        <div className="program-grid" id="catalog">
          <article className="program-card program-card-dark"><div className="program-card-top"><span className="program-number">01 / INDIVIDUALS</span><span className="program-symbol"><ShieldCheck size={20} /></span></div><h3>Build your security career.</h3><p>Practical courses and guided labs help you grow skills you can put to work.</p><a href="#cyber-range">Explore learning paths <ArrowRight size={15} /></a><span className="program-card-mark" aria-hidden="true">01</span></article>
          <article className="program-card program-card-light" id="training"><div className="program-card-top"><span className="program-number">02 / TEAMS</span><span className="program-symbol"><ShieldCheck size={20} /></span></div><h3>Strengthen your team.</h3><p>Bring role-based training, progress insights, and hands-on practice together.</p><a href="#contact">Explore team training <ArrowRight size={15} /></a><span className="program-card-mark" aria-hidden="true">02</span></article>
          <article className="program-card program-card-accent" id="cyber-range"><div className="program-card-top"><span className="program-number">03 / UNIVERSITY</span><span className="program-symbol"><ShieldCheck size={20} /></span></div><h3>Make learning real.</h3><p>Connect classroom fundamentals to real-world scenarios in a guided cyber range.</p><a href="#universities">Explore university programs <ArrowRight size={15} /></a><span className="program-card-mark" aria-hidden="true">03</span></article>
        </div>
      </section>

      <section className="academy-portals" id="about">
        <div className="portals-intro"><p className="section-overline"><span className="eyebrow-rule" /> ONE PLATFORM. EVERY ROLE.</p><h2>Made for the people<br />who make progress.</h2><p>Each workspace brings the right learning, tools, and insight into focus.</p></div>
        <div className="portal-entry-list">{portalLinks.map((portal, index) => <Link className="portal-entry" to={portal.to} key={portal.label}><span className="entry-index">0{index + 1}</span><span className="entry-text"><strong>{portal.label}</strong><small>{portal.caption}</small></span><span className="entry-arrow"><ArrowUpRight size={17} /></span></Link>)}</div>
      </section>

      <section className="academy-trust" id="contact"><div className="trust-mark"><Check size={17} /></div><p><strong>Built around real-world capability.</strong> Learn at your pace, practice with purpose, and see your progress clearly.</p><a href="#training">Explore team training <ArrowRight size={14} /></a></section>
      <footer className="academy-footer"><Link to="/" className="academy-brand cursor-pointer" aria-label="CyberBodha home"><span className="brand-mark"><img src={cyberbodhaLogo} alt="CyberBodha Logo" width={20} height={20} /></span><span className="brand-wordmark">Cyber<span>Bodha</span></span></Link><span>Learn. Practice. Simulate. Certify.</span><span>© 2026 CyberBodha</span></footer>
    </main>
  );
}
