import {
  BrainCircuit,
  Camera,
  Cpu,
  Send,
  ArrowRight,
  CheckCircle2,
  Radio,
  Lock,
  Smartphone,
  Apple,
  Zap,
  Heart,
  Mail,
  Phone,
  Link,
  Globe,
  GitBranch,
} from 'lucide-react'
import heroJpg from './assets/hero.jpeg'
import novalogoSvg from './assets/novalogo.svg'
import logoSvg from './assets/logo.svg'
import antonImg from './assets/anton.png'
import luImg from './assets/lu.png'
import samImg from './assets/sam.png'
import shamshadImg from './assets/shamshad.png'
import xieImg from './assets/xie.png'
import screen1Png from './assets/1.png'
import screen2Png from './assets/2.png'
import screen3Png from './assets/3.png'
import './App.css'

function App() {
  return (
    <>
      <header className="header">
        <div className="header-inner">
          <a href="#" className="logo">
            <img src={logoSvg} alt="" className="logo-icon" />
            FixMyCity
          </a>
          <nav className="nav">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#mobile-app">Mobile App</a>
            <a href="#tech-stack">Tech</a>
            <a href="#team">Team</a>
          </nav>
          <a href="https://fixmycityadmindashboard.vercel.app/dashboard" className="btn btn-primary btn-sm">
            Try It Now
          </a>
        </div>
      </header>

      <section id="hero" className="hero-section" style={{ backgroundImage: `url(${heroJpg})` }}>
        <div className="hero-inner">
          <div className="hero-content">
            <h1>Report civic issues in seconds, not hours</h1>
            <p className="hero-sub">
              FixMyCity is an intelligent platform that connects residents
              with city managers, transforming how urban issues are reported
              and resolved through seamless integration of the citizen app
              and government dashboard.
            </p>
            <div className="hero-cta">
              <a href="https://fixmycityadmindashboard.vercel.app/dashboard" className="btn btn-primary btn-lg">
                Try It Now
              </a>
            </div>
          </div>
          
        </div>
      </section>

      <section id="platform" className="platform-section">
        <h2 className="section-title">Dual-platform for city governance</h2>
        <p className="section-subtitle">
          Seamlessly connecting residents and city managers through a
          two-sided intelligent platform.
        </p>
        <div className="platform-grid">
          <div className="platform-card platform-card-citizen">
            <div className="platform-icon">
              <Smartphone size={24} strokeWidth={1.5} aria-hidden="true" />
            </div>
            <h3>Citizen App</h3>
            <p>
              74% of residents find traditional reporting processes too
              cumbersome. FixMyCity delivers an ultra-simple experience
              — complete a report in under 60 seconds.
            </p>
            <p>
              Using automatic GPS location and photo upload for visual
              evidence, citizens can track their issue from submission to
              resolution in real time, right from their phone.
            </p>
          </div>
          <div className="platform-card platform-card-admin">
            <div className="platform-icon">
              <Cpu size={24} strokeWidth={1.5} aria-hidden="true" />
            </div>
            <h3>Admin Dashboard</h3>
            <p>
              A centralized digital dashboard that replaces scattered
              emails and phone calls, giving city managers a single
              source of truth for all incoming reports.
            </p>
            <p>
              With map visualization, AI-powered classification, and data
              analytics, managers can quickly filter and process tasks, and
              push progress updates to residents with a single click.
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="features-section">
        <h2 className="section-title">Workflow &amp; Core Value</h2>
        <p className="section-subtitle">
          How FixMyCity transforms civic reporting from start to finish.
        </p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon feature-icon-sync">
              <Radio size={24} strokeWidth={1.5} aria-hidden="true" />
            </div>
            <h3>Seamless Integration</h3>
            <p>
              A real-time monitoring system ensures citizen reports are
              instantly synchronized to the government dashboard the moment
              they are submitted.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon feature-icon-efficiency">
              <Zap size={24} strokeWidth={1.5} aria-hidden="true" />
            </div>
            <h3>Enhanced Efficiency</h3>
            <p>
              AI automatically classifies incoming reports and analyzes
              priority levels, enabling faster triage and smarter resource
              allocation across city departments.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon feature-icon-wellbeing">
              <Heart size={24} strokeWidth={1.5} aria-hidden="true" />
            </div>
            <h3>Stronger Communities</h3>
            <p>
              89% of residents say post-report feedback is critical.
              Transparent processes and timely updates build trust,
              belonging, and a true sense of participation in city
              development.
            </p>
          </div>
        </div>
        <p className="features-quote">&ldquo;Better cities start with more efficient reporting.&rdquo;</p>
      </section>

      <section id="how-it-works" className="steps-section">
        <h2 className="section-title">How it works</h2>
        <p className="section-subtitle">
          From snap to resolution in four simple steps.
        </p>
        <div className="steps-grid">
          <div className="step">
            <div className="step-circle"><Camera size={24} strokeWidth={1.5} aria-hidden="true" /></div>
            <h3>Snap a Photo</h3>
            <p>Take a picture of the issue with your phone</p>
          </div>
          <div className="step-connector" aria-hidden="true" />
          <div className="step">
            <div className="step-circle"><Cpu size={24} strokeWidth={1.5} aria-hidden="true" /></div>
            <h3>AI Classifies</h3>
            <p>Image recognition + NLP categorizes it automatically</p>
          </div>
          <div className="step-connector" aria-hidden="true" />
          <div className="step">
            <div className="step-circle"><Send size={24} strokeWidth={1.5} aria-hidden="true" /></div>
            <h3>Report Submitted</h3>
            <p>Routed to the right department in real time</p>
          </div>
          <div className="step-connector" aria-hidden="true" />
          <div className="step">
            <div className="step-circle"><CheckCircle2 size={24} strokeWidth={1.5} aria-hidden="true" /></div>
            <h3>Government Responds</h3>
            <p>Track resolution with live updates</p>
          </div>
        </div>
      </section>

      <section id="mobile-app" className="mobile-section">
        <h2 className="section-title">Our mobile app</h2>
        <p className="section-subtitle">
          Report issues anytime, anywhere with our mobile app for iOS and Android.
        </p>
        <div className="mobile-screens">
          <div className="mobile-device">
            <img src={screen1Png} alt="FixMyCity app home screen" />
          </div>
          <div className="mobile-device">
            <img src={screen2Png} alt="FixMyCity app report screen" />
          </div>
          <div className="mobile-device">
            <img src={screen3Png} alt="FixMyCity app tracking screen" />
          </div>
        </div>
        <div className="mobile-platforms">
          <div className="platform-badge">
            <Apple size={22} strokeWidth={1.5} aria-hidden="true" />
            <div className="platform-text">
              <span className="platform-name">iOS App</span>
              <span className="platform-label">App Store</span>
            </div>
          </div>
          <div className="platform-badge">
            <Smartphone size={22} strokeWidth={1.5} aria-hidden="true" />
            <div className="platform-text">
              <span className="platform-name">Android App</span>
              <span className="platform-label">Google Play</span>
            </div>
          </div>
        </div>
      </section>

      <section id="tech-stack" className="tech-section">
        <h2 className="section-title">Built on enterprise infrastructure</h2>
        <p className="section-subtitle">
          A modern technology foundation designed for reliability,
          speed, and security — so cities can focus on what matters.
        </p>
        <div className="tech-badges">
          <span className="tech-badge"><BrainCircuit size={16} strokeWidth={1.5} aria-hidden="true" /> AI-Powered</span>
          <span className="tech-badge"><Smartphone size={16} strokeWidth={1.5} aria-hidden="true" /> iOS &amp; Android</span>
          <span className="tech-badge"><Lock size={16} strokeWidth={1.5} aria-hidden="true" /> Secure &amp; Reliable</span>
        </div>
        <div className="tech-partner">
          <span className="tech-partner-by">Powered by</span>
          <a href="https://www.novaagent.me/" target="_blank" rel="noopener noreferrer" className="tech-partner-brand">
            <img src={novalogoSvg} alt="" className="tech-partner-logo" />
            <span className="tech-partner-name">NovaAgent</span>
          </a>
          <span className="tech-partner-label">zero-code AI agent platform</span>
        </div>
      </section>

      <section id="team" className="team-section">
        <h2 className="section-title">Meet the team</h2>
        <p className="section-subtitle">
          The people building the future of civic engagement.
        </p>
        <div className="team-grid">
          <div className="team-card">
            <img src={shamshadImg} alt="Shamshad" className="team-avatar" />
            <h3>Shamshad</h3>
            <p className="team-role">User Analysis</p>
            <div className="team-contact">
              <a href="mailto:shamshamshadcan@gmail.com" className="team-contact-link"><Mail size={14} strokeWidth={1.5} aria-hidden="true" /> Email</a>
              <a href="tel:+16477190003" className="team-contact-link"><Phone size={14} strokeWidth={1.5} aria-hidden="true" /> +1 647 719 0003</a>
              <a href="https://www.linkedin.com/in/shamshad-shamshad-037811169/" target="_blank" rel="noopener noreferrer" className="team-contact-link"><Link size={14} strokeWidth={1.5} aria-hidden="true" /> LinkedIn</a>
            </div>
          </div>
          <div className="team-card">
            <img src={antonImg} alt="Anton Dela Cruz" className="team-avatar" />
            <h3>Anton Dela Cruz</h3>
            <p className="team-role">Product Designer</p>
            <div className="team-contact">
              <a href="mailto:ant.delacruz52@gmail.com" className="team-contact-link"><Mail size={14} strokeWidth={1.5} aria-hidden="true" /> Email</a>
              <a href="tel:+15197783846" className="team-contact-link"><Phone size={14} strokeWidth={1.5} aria-hidden="true" /> +1 519 778 3846</a>
              <a href="https://www.linkedin.com/in/anton-dela-cruz-567328224" target="_blank" rel="noopener noreferrer" className="team-contact-link"><Link size={14} strokeWidth={1.5} aria-hidden="true" /> LinkedIn</a>
            </div>
          </div>
          <div className="team-card">
            <img src={samImg} alt="Samuel Onyenwe" className="team-avatar" />
            <h3>Samuel Onyenwe</h3>
            <p className="team-role">Full-Stack Developer</p>
            <div className="team-contact">
              <a href="mailto:Samuelonyenwe6@gmail.com" className="team-contact-link"><Mail size={14} strokeWidth={1.5} aria-hidden="true" /> Email</a>
              <a href="tel:+13828894488" className="team-contact-link"><Phone size={14} strokeWidth={1.5} aria-hidden="true" /> +1 382 889 4488</a>
              <a href="https://www.linkedin.com/in/samuel-onyenwe/" target="_blank" rel="noopener noreferrer" className="team-contact-link"><Link size={14} strokeWidth={1.5} aria-hidden="true" /> LinkedIn</a>
            </div>
          </div>
          <div className="team-card">
            <img src={xieImg} alt="Yong-jie Xie" className="team-avatar" />
            <h3>Yong-jie Xie</h3>
            <p className="team-role">Full-Stack Engineer</p>
            <div className="team-contact">
              <a href="mailto:jedxie2022@gmail.com" className="team-contact-link"><Mail size={14} strokeWidth={1.5} aria-hidden="true" /> Email</a>
              <a href="tel:+13828893727" className="team-contact-link"><Phone size={14} strokeWidth={1.5} aria-hidden="true" /> +1 382 889 3727</a>
              <a href="https://www.linkedin.com/in/yong-jie-xie-95919632b" target="_blank" rel="noopener noreferrer" className="team-contact-link"><Link size={14} strokeWidth={1.5} aria-hidden="true" /> LinkedIn</a>
              <a href="https://yongxie.dev/" target="_blank" rel="noopener noreferrer" className="team-contact-link"><Globe size={14} strokeWidth={1.5} aria-hidden="true" /> yongxie.dev</a>
              <a href="https://github.com/Mou2xie" target="_blank" rel="noopener noreferrer" className="team-contact-link"><GitBranch size={14} strokeWidth={1.5} aria-hidden="true" /> GitHub</a>
            </div>
          </div>
          <div className="team-card">
            <img src={luImg} alt="Hong-Lin Lu" className="team-avatar" />
            <h3>Hong-Lin Lu</h3>
            <p className="team-role">Quality Assurance</p>
            <div className="team-contact">
              <a href="mailto:rhk256973@gmail.com" className="team-contact-link"><Mail size={14} strokeWidth={1.5} aria-hidden="true" /> Email</a>
              <a href="tel:+12269294303" className="team-contact-link"><Phone size={14} strokeWidth={1.5} aria-hidden="true" /> +1 226 929 4303</a>
              <a href="https://www.linkedin.com/in/hong-lin-lu-739579352/" target="_blank" rel="noopener noreferrer" className="team-contact-link"><Link size={14} strokeWidth={1.5} aria-hidden="true" /> LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="cta-section">
        <div className="cta-card">
          <h2 className="cta-title">Ready to transform civic reporting?</h2>
          <p className="cta-sub">
            Join cities already using FixMyCity to build trust with their
            citizens.
          </p>
          <a href="https://fixmycityadmindashboard.vercel.app/dashboard" className="btn btn-primary btn-lg">
            Try It Now <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <a href="#" className="logo">
            <img src={logoSvg} alt="" className="logo-icon" />
            FixMyCity
          </a>
          <p className="footer-text">
            &copy; {new Date().getFullYear()} FixMyCity. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
