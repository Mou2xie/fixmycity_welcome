import {
  BrainCircuit,
  CloudOff,
  ShieldCheck,
  Camera,
  Cpu,
  Send,
  Bug,
  ArrowRight,
  CheckCircle2,
  Database,
  Radio,
  Lock,
  Smartphone,
  Mail,
  Phone,
  Link,
  Globe,
  GitBranch,
} from 'lucide-react'
import heroSvg from './assets/fixmycity-hero.svg'
import logoSvg from './assets/logo.svg'
import antonImg from './assets/anton.png'
import luImg from './assets/lu.png'
import samImg from './assets/sam.png'
import shamshadImg from './assets/shamshad.png'
import xieImg from './assets/xie.png'
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
            <a href="#tech-stack">Tech</a>
            <a href="#team">Team</a>
          </nav>
          <a href="https://fixmycityadmindashboard.vercel.app/dashboard" className="btn btn-primary btn-sm">
            Try It Now
          </a>
        </div>
      </header>

      <section id="hero" className="hero-section">
        <div className="hero-inner">
          <div className="hero-content">
            <h1>Report civic issues in seconds, not hours</h1>
            <p className="hero-sub">
              FixMyCity uses AI to automatically classify and route citizen
              reports to the right government department — in real time.
            </p>
            <div className="hero-cta">
              <a href="https://fixmycityadmindashboard.vercel.app/dashboard" className="btn btn-primary btn-lg">
                Try It Now
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <img src={heroSvg} alt="FixMyCity app illustration" />
          </div>
        </div>
      </section>

      <section id="stats" className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-number">88.9%</span>
            <span className="stat-label">
              <Bug size={16} strokeWidth={1.5} className="stat-icon" aria-hidden="true" />
              of citizens surveyed would use an app for fast reporting
            </span>
          </div>
          <div className="stat-card">
            <span className="stat-number">AI‑powered</span>
            <span className="stat-label">
              <Cpu size={16} strokeWidth={1.5} className="stat-icon" aria-hidden="true" />
              Auto-classifies issues using image recognition and NLP
            </span>
          </div>
          <div className="stat-card">
            <span className="stat-number">Real‑time</span>
            <span className="stat-label">
              <Radio size={16} strokeWidth={1.5} className="stat-icon" aria-hidden="true" />
              Powered by Supabase with live subscriptions and RLS security
            </span>
          </div>
        </div>
      </section>

      <section id="features" className="features-section">
        <h2 className="section-title">Smart features for modern cities</h2>
        <p className="section-subtitle">
          Everything citizens and governments need to resolve issues faster.
        </p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon feature-icon-ai">
              <BrainCircuit size={24} strokeWidth={1.5} aria-hidden="true" />
            </div>
            <h3>AI Categorization</h3>
            <p>
              Automatically classifies incoming issues using image recognition
              and NLP, routing each report to the right department instantly.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon feature-icon-offline">
              <CloudOff size={24} strokeWidth={1.5} aria-hidden="true" />
            </div>
            <h3>Offline Mode</h3>
            <p>
              Queue reports without internet connectivity and sync
              automatically when back online — no report left behind.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon feature-icon-secure">
              <ShieldCheck size={24} strokeWidth={1.5} aria-hidden="true" />
            </div>
            <h3>Enterprise Security</h3>
            <p>
              Row-Level Security (RLS) ensures data protection and privacy.
              Real-time subscriptions keep every stakeholder in sync.
            </p>
          </div>
        </div>
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

      <section id="tech-stack" className="tech-section">
        <h2 className="section-title">Built on enterprise infrastructure</h2>
        <p className="section-subtitle">
          Scalable backend powered by <strong>Supabase (PostgreSQL)</strong> with
          real-time subscriptions, Row-Level Security, <strong>Flutter</strong> cross-platform UI,
          and <strong>AI integration</strong> for smart issue categorization.
        </p>
        <div className="tech-badges">
          <span className="tech-badge"><BrainCircuit size={16} strokeWidth={1.5} aria-hidden="true" /> AI Integration</span>
          <span className="tech-badge"><Smartphone size={16} strokeWidth={1.5} aria-hidden="true" /> Flutter</span>
          <span className="tech-badge"><Database size={16} strokeWidth={1.5} aria-hidden="true" /> Supabase</span>
          <span className="tech-badge"><Database size={16} strokeWidth={1.5} aria-hidden="true" /> PostgreSQL</span>
          <span className="tech-badge"><Radio size={16} strokeWidth={1.5} aria-hidden="true" /> Real-time</span>
          <span className="tech-badge"><Lock size={16} strokeWidth={1.5} aria-hidden="true" /> RLS</span>
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
          </div>
          <div className="team-card">
            <img src={samImg} alt="Samuel Onyenwe" className="team-avatar" />
            <h3>Samuel Onyenwe</h3>
            <p className="team-role">Full-Stack Developer</p>
            <div className="team-contact">
              <a href="mailto:Samuelonyenwe6@gmail.com" className="team-contact-link"><Mail size={14} strokeWidth={1.5} aria-hidden="true" /> Email</a>
              <a href="tel:+13828894488" className="team-contact-link"><Phone size={14} strokeWidth={1.5} aria-hidden="true" /> +1 382 889 4488</a>
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
