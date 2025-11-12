import React, { useMemo } from 'react'
import Spline from '@splinetool/react-spline'
import { Star, Sparkles, Mail, Phone, ArrowRight, Image as ImageIcon, Layers, Palette, Rocket } from 'lucide-react'

const Section = ({ id, className = '', children }) => (
  <section id={id} className={`w-full ${className}`}>{children}</section>
)

const Container = ({ children, className = '' }) => (
  <div className={`mx-auto w-full max-w-7xl px-6 sm:px-8 ${className}`}>{children}</div>
)

const Navbar = () => {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <Container className="flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2 font-bold text-gray-900">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-blue-600" />
          <span>ThumbCraft Studio</span>
        </a>
        <div className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
          <a href="#services" className="hover:text-gray-900 transition-colors">Services</a>
          <a href="#work" className="hover:text-gray-900 transition-colors">Work</a>
          <a href="#testimonials" className="hover:text-gray-900 transition-colors">Reviews</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          <a href="#contact" className="ml-2 inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-4 py-2 hover:bg-gray-800 transition-colors">
            Get a Quote
            <ArrowRight size={16} />
          </a>
        </div>
      </Container>
    </nav>
  )
}

const Hero = () => {
  return (
    <Section id="home" className="pt-24 sm:pt-28 relative">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-fuchsia-100/40 via-transparent to-transparent" />
      <Container className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-gray-700 shadow-sm">
            <Sparkles className="text-fuchsia-500" size={14} />
            Premium Thumbnail Design
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Thumbnails that make people stop scrolling
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl">
            I design bold, high-converting YouTube thumbnails for creators and brands. Stand out, boost CTR, and grow your channel with strategic visuals.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-900 text-white px-5 py-3 font-semibold shadow hover:bg-gray-800 transition-colors">
              Book a Project
              <ArrowRight size={18} />
            </a>
            <a href="#work" className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-gray-900 px-5 py-3 font-semibold border border-black/10 hover:bg-gray-50 transition-colors">
              View Portfolio
            </a>
          </div>
          <div className="mt-6 flex items-center gap-5 text-sm text-gray-600">
            <span className="inline-flex items-center gap-1"><Star className="text-amber-500" size={16}/> 100+ projects</span>
            <span className="inline-flex items-center gap-1"><Rocket className="text-blue-600" size={16}/> CTR-focused</span>
          </div>
        </div>
        <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] w-full">
          <div className="absolute inset-0 rounded-2xl border border-black/10 bg-white/60 shadow-xl overflow-hidden">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </Container>
    </Section>
  )
}

const services = [
  {
    icon: ImageIcon,
    title: 'YouTube Thumbnails',
    desc: 'Eye-catching designs crafted to boost click-through rate for long-form videos.'
  },
  {
    icon: Layers,
    title: 'A/B Variations',
    desc: 'Multiple stylistic options optimized for testing and performance.'
  },
  {
    icon: Palette,
    title: 'Channel Branding',
    desc: 'Consistent visual language that fits your niche and audience.'
  },
  {
    icon: Rocket,
    title: 'Express Turnaround',
    desc: 'Fast delivery with clear communication and iteration built-in.'
  }
]

const Services = () => (
  <Section id="services" className="py-20">
    <Container>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What I Offer</h2>
        <p className="mt-3 text-gray-600">High-impact visuals tailored for creators who want results.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <div key={i} className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-fuchsia-500 to-blue-600 text-white flex items-center justify-center">
              <s.icon size={24} />
            </div>
            <h3 className="mt-4 font-semibold text-lg text-gray-900">{s.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  </Section>
)

const demoWorks = [
  { title: 'Tech Review', img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Product Breakdown', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Creator Tips', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Gaming Highlight', img: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Finance Explainer', img: 'https://images.unsplash.com/photo-1549421263-5ec394a5ad6b?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Vlog Story', img: 'https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?q=80&w=1200&auto=format&fit=crop' }
]

const Portfolio = () => (
  <Section id="work" className="py-20">
    <Container>
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Selected Work</h2>
        <p className="mt-3 text-gray-600">A peek at styles that consistently grab attention.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoWorks.map((w, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-2xl border border-black/10 bg-gray-50">
            <img src={w.img} alt={w.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <p className="font-semibold">{w.title}</p>
              <p className="text-xs text-white/80">CTR-focused visual hierarchy</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-5 py-3 font-semibold shadow hover:bg-gray-800 transition-colors">
          Start your project
          <ArrowRight size={18} />
        </a>
      </div>
    </Container>
  </Section>
)

const TestimonialCard = ({ name, role, quote }) => (
  <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
    <div className="flex items-center gap-1 text-amber-500 mb-3">
      {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#F59E0B" className="text-amber-500" />)}
    </div>
    <p className="text-gray-800">“{quote}”</p>
    <p className="mt-4 text-sm text-gray-600">— {name}, {role}</p>
  </div>
)

const Testimonials = () => (
  <Section id="testimonials" className="py-20">
    <Container>
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Client Feedback</h2>
        <p className="mt-3 text-gray-600">Creators seeing real results from better thumbnails.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <TestimonialCard name="Alex R." role="Gaming Creator" quote="CTR jumped from 3.1% to 6.8% in two weeks. Absolute game-changer." />
        <TestimonialCard name="Studio Nova" role="Production Agency" quote="Fast, consistent, and on-brand. Communication was flawless." />
        <TestimonialCard name="Maya T." role="Finance Channel" quote="Understands the niche and audience psychology. Highly recommended." />
      </div>
    </Container>
  </Section>
)

const Contact = () => {
  const subject = useMemo(() => encodeURIComponent('Thumbnail Project Inquiry'), [])
  const body = useMemo(() => encodeURIComponent('Hey! I need thumbnails for my channel.\n\nChannel/Niche: \nVideo Topics: \nDeadline: \nBudget: \nReferences: \n\nLet\'s build something that pops!'), [])
  const email = 'hello@yourstudio.com'

  return (
    <Section id="contact" className="py-20">
      <Container>
        <div className="rounded-3xl border border-black/10 bg-white p-8 sm:p-12 shadow">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Let’s boost your CTR</h2>
              <p className="mt-3 text-gray-600">Share your video idea, niche, and timeline. I’ll reply with options and pricing within 24 hours.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href={`mailto:${email}?subject=${subject}&body=${body}`} className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-5 py-3 font-semibold shadow hover:bg-gray-800 transition-colors">
                  <Mail size={18} /> Email Me
                </a>
                <a href="#work" className="inline-flex items-center gap-2 rounded-md bg-white text-gray-900 px-5 py-3 font-semibold border border-black/10 hover:bg-gray-50 transition-colors">
                  See More Work
                </a>
              </div>
              <div className="mt-5 text-sm text-gray-600">
                Prefer chat? DM on Discord: <span className="font-semibold text-gray-800">@thumbcraft</span>
              </div>
            </div>
            <div className="relative h-[320px] sm:h-[380px] w-full">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-500/15 via-blue-500/15 to-emerald-500/15 pointer-events-none" />
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="rounded-xl border border-black/10 bg-white p-4 flex flex-col justify-between">
                  <div className="text-sm text-gray-600">Average Turnaround</div>
                  <div className="text-3xl font-extrabold text-gray-900">24-48h</div>
                </div>
                <div className="rounded-xl border border-black/10 bg-white p-4 flex flex-col justify-between">
                  <div className="text-sm text-gray-600">Revisions Included</div>
                  <div className="text-3xl font-extrabold text-gray-900">2x</div>
                </div>
                <div className="rounded-xl border border-black/10 bg-white p-4 flex flex-col justify-between">
                  <div className="text-sm text-gray-600">Monthly Slots</div>
                  <div className="text-3xl font-extrabold text-gray-900">8</div>
                </div>
                <div className="rounded-xl border border-black/10 bg-white p-4 flex flex-col justify-between">
                  <div className="text-sm text-gray-600">Avg. CTR Lift</div>
                  <div className="text-3xl font-extrabold text-gray-900">2x</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

const Footer = () => (
  <footer className="py-10 text-center text-sm text-gray-600">
    <Container>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} ThumbCraft Studio — Thumbnail Design</p>
        <div className="flex items-center gap-4">
          <a href="#services" className="hover:text-gray-900">Services</a>
          <a href="#work" className="hover:text-gray-900">Work</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </div>
      </div>
    </Container>
  </footer>
)

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-slate-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
