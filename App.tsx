
import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Star, 
  Menu, 
  X, 
  Award, 
  Zap, 
  Gem,
  CheckCircle2,
  MapPin,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { MEMBERSHIP_TIERS, SERVICE_MENU } from './constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-zinc-950/80 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="w-11 h-11 glass rounded-full flex items-center justify-center group-hover:bg-red-600 transition-all duration-500">
            <ShieldCheck className="text-white w-5 h-5 group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-light tracking-[0.3em] text-white leading-none">HELVETIA</span>
            <span className="text-[9px] tracking-[0.4em] text-red-500 uppercase font-semibold mt-1">Swiss Precision</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-12">
          {['Problem', 'Memberships', 'Services'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-semibold text-zinc-400 hover:text-white transition-colors uppercase tracking-[0.3em]">
              {item}
            </a>
          ))}
          <a href="#contact" className="glass hover:bg-white hover:text-black px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all">
            Inquire
          </a>
        </div>

        <button className="lg:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-zinc-950 absolute top-full left-0 w-full p-10 space-y-8 border-t border-white/5 animate-in fade-in slide-in-from-top-4 duration-500 h-screen">
          <a href="#problem" className="block text-2xl font-light tracking-widest text-white" onClick={() => setIsOpen(false)}>The Conflict</a>
          <a href="#memberships" className="block text-2xl font-light tracking-widest text-white" onClick={() => setIsOpen(false)}>The Tiers</a>
          <a href="#services" className="block text-2xl font-light tracking-widest text-white" onClick={() => setIsOpen(false)}>Specialties</a>
          <div className="pt-8">
            <a href="#contact" className="inline-block bg-red-600 text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest" onClick={() => setIsOpen(false)}>Concierge Access</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=95&w=2560" 
        alt="Cinematic Luxury Porsche 911" 
        className="w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
      <div className="absolute inset-0 bg-zinc-950/20"></div>
    </div>
    
    <div className="container mx-auto px-8 relative z-10 text-center">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center space-x-3 text-red-500 mb-8 tracking-[0.5em] text-[10px] font-bold uppercase">
          <span className="w-12 h-px bg-red-500/30"></span>
          <span>Boca Raton • Florida</span>
          <span className="w-12 h-px bg-red-500/30"></span>
        </div>
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-white mb-10 leading-[0.9] tracking-tighter">
          Effortless <span className="italic font-normal serif block md:inline">Precision.</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 mb-14 leading-relaxed font-light max-w-2xl mx-auto tracking-wide">
          A bespoke mobile concierge service for the world's most discerning owners. Because your vehicle should reflect your standards, not your schedule.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <a href="#contact" className="group bg-white text-black px-12 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.3em] transition-all hover:scale-105 flex items-center">
            Begin Consultation
            <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#memberships" className="text-white text-[11px] font-bold uppercase tracking-[0.3em] flex items-center group">
            <span className="border-b border-white/20 pb-1 group-hover:border-white transition-all">View Membership Programs</span>
          </a>
        </div>
      </div>
    </div>

    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4">
      <span className="text-[9px] uppercase tracking-[0.4em] text-zinc-500 font-bold">Scroll to Explore</span>
      <div className="w-px h-16 bg-gradient-to-b from-red-600 to-transparent"></div>
    </div>
  </section>
);

const ProblemSection = () => (
  <section id="problem" className="py-32 bg-[#050505]">
    <div className="container mx-auto px-8">
      <div className="grid lg:grid-cols-12 gap-20 items-center">
        <div className="lg:col-span-5 space-y-12">
          <div>
            <h3 className="text-red-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-4">The Standard</h3>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">The High Cost of <span className="italic font-normal serif text-zinc-500">Ordinary.</span></h2>
          </div>
          
          <p className="text-zinc-400 text-lg leading-relaxed font-light italic serif">
            "Your high-performance machine requires more than a wash; it requires preservation. Why trust a multi-million dollar asset to a twenty-dollar process?"
          </p>
          
          <div className="space-y-10">
            {[
              { icon: <X size={20} />, title: "The Compromise", desc: "Automated systems leave invisible micro-scratches that dull your finish over time." },
              { icon: <Clock size={20} />, title: "The Time Debt", desc: "Reclaim the 100+ hours spent annually on vehicle maintenance logistics." },
              { icon: <Award size={20} />, title: "The Inconsistency", desc: "Elite vehicles deserve a single point of dedicated, expert contact." }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-6">
                <div className="w-10 h-10 glass rounded-full flex items-center justify-center shrink-0 text-red-500">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase text-[10px] tracking-[0.2em] mb-2">{item.title}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 relative">
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-3xl grayscale hover:grayscale-0 transition-all duration-1000 border border-white/5">
            <img 
              src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1200" 
              alt="Luxury Car Detail Close-up" 
              className="w-full h-full object-cover aspect-[4/5]"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 glass p-10 rounded-[2rem] max-w-sm hidden xl:block border border-white/10">
            <div className="flex items-center space-x-4 mb-6">
              <Star className="text-red-500 fill-current w-4 h-4" />
              <Star className="text-red-500 fill-current w-4 h-4" />
              <Star className="text-red-500 fill-current w-4 h-4" />
              <Star className="text-red-500 fill-current w-4 h-4" />
              <Star className="text-red-500 fill-current w-4 h-4" />
            </div>
            <p className="text-white font-light text-xl leading-snug italic serif mb-6">
              "They don't just clean the car; they curate it."
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full border border-white/10 p-0.5">
                <img src="https://picsum.photos/id/177/100/100" alt="Client" className="w-full h-full rounded-full grayscale" />
              </div>
              <div>
                <p className="text-white font-bold text-[10px] uppercase tracking-widest">Maximilian V.</p>
                <p className="text-zinc-500 text-[9px] uppercase font-medium">Boca Raton Residences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const MembershipCard = ({ tier }: { tier: any }) => (
  <div className={`group p-10 rounded-[2.5rem] hover-lift glass flex flex-col h-full border border-white/5 transition-all duration-700 ${tier.isFeatured ? 'bg-white/5 ring-1 ring-white/10' : ''}`}>
    <div className="mb-10 flex justify-between items-start">
      <div>
        <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
        <p className="text-red-500 text-[10px] font-bold uppercase tracking-[0.3em]">Tier {tier.isFeatured ? 'Gold' : 'Silver'}</p>
      </div>
      <div className={`p-4 rounded-2xl ${tier.isFeatured ? 'bg-red-600' : 'bg-white/5'}`}>
        <Gem className="text-white w-6 h-6" />
      </div>
    </div>
    
    <div className="mb-12">
      <span className="text-5xl font-bold text-white tracking-tighter">{tier.price}</span>
      <span className="text-zinc-500 text-sm ml-2 font-light">/ mo</span>
    </div>
    
    <ul className="space-y-5 mb-14 flex-grow">
      {tier.benefits.map((benefit: string) => (
        <li key={benefit} className="flex items-start space-x-4 group/item">
          <CheckCircle2 className="w-4 h-4 text-zinc-600 group-hover/item:text-red-500 transition-colors mt-1 shrink-0" />
          <span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors leading-relaxed font-light">{benefit}</span>
        </li>
      ))}
    </ul>

    <button className={`w-full py-5 rounded-2xl text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 ${tier.isFeatured ? 'bg-white text-black hover:bg-zinc-200' : 'border border-white/10 text-white hover:bg-white/5'}`}>
      Request Private Invitation
    </button>
  </div>
);

const MembershipsSection = () => (
  <section id="memberships" className="py-32 bg-[#050505]">
    <div className="container mx-auto px-8">
      <div className="text-center max-w-3xl mx-auto mb-24">
        <h3 className="text-red-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-4">Investment</h3>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Exclusive Retention.</h2>
        <p className="text-zinc-400 text-lg font-light leading-relaxed">Membership is limited to ensure each vehicle receives the uncompromising attention it demands.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {MEMBERSHIP_TIERS.map((tier) => (
          <MembershipCard key={tier.name} tier={tier} />
        ))}
      </div>
    </div>
  </section>
);

const ServiceMenuSection = () => (
  <section id="services" className="py-32 bg-zinc-950 border-y border-white/5">
    <div className="container mx-auto px-8">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-10">
        <div className="max-w-xl">
          <h3 className="text-red-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-4">Specialties</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">Mastery in <span className="italic font-normal serif text-zinc-500">Every Detail.</span></h2>
        </div>
        <div className="flex items-center space-x-10 text-zinc-500 border-l border-white/10 pl-10 hidden md:flex">
          <div className="text-center">
            <p className="text-white text-2xl font-bold">12+</p>
            <p className="text-[9px] uppercase tracking-widest">Years Expertise</p>
          </div>
          <div className="text-center">
            <p className="text-white text-2xl font-bold">100%</p>
            <p className="text-[9px] uppercase tracking-widest">Hand Craft</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-16">
        {SERVICE_MENU.map((category) => (
          <div key={category.title} className="space-y-12">
            <h3 className="text-white text-xs font-bold uppercase tracking-[0.4em] flex items-center">
              <span className="w-6 h-px bg-red-600 mr-4"></span>
              {category.title}
            </h3>
            <div className="space-y-10">
              {category.items.map((item) => (
                <div key={item.name} className="group cursor-pointer">
                  <div className="flex justify-between items-baseline mb-3 border-b border-white/5 pb-2 group-hover:border-red-600/30 transition-colors">
                    <h4 className="text-base font-light text-zinc-300 group-hover:text-white transition-colors">{item.name}</h4>
                    <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">{item.price.split(' ')[0]}</span>
                  </div>
                  <p className="text-zinc-600 text-[11px] leading-relaxed font-light">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="py-40 bg-[#050505] relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    <div className="container mx-auto px-8 relative z-10">
      <div className="max-w-6xl mx-auto glass rounded-[4rem] overflow-hidden flex flex-col lg:flex-row shadow-4xl border-white/10">
        <div className="lg:w-2/5 p-16 bg-zinc-900 border-r border-white/5">
          <h2 className="text-5xl font-bold text-white mb-8 leading-[0.9] tracking-tighter">Enter the <br/><span className="italic serif font-normal text-zinc-500">Circle.</span></h2>
          <p className="text-zinc-400 text-lg mb-12 font-light leading-relaxed">
            Please provide your details below. A dedicated concierge will reach out to schedule a private inspection of your vehicle within two hours.
          </p>
          <div className="space-y-8">
            <div className="flex items-center space-x-5 text-zinc-300">
              <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-red-500" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em]">Serving Greater Boca Raton</p>
            </div>
            <div className="flex items-center space-x-5 text-zinc-300">
              <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center shrink-0">
                <Gem size={20} className="text-red-500" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em]">Insured up to $5M</p>
            </div>
          </div>
        </div>
        
        <div className="lg:w-3/5 p-16 bg-transparent">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <label className="text-[9px] uppercase tracking-[0.4em] text-zinc-500 font-bold ml-1">Identity</label>
              <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder-zinc-700 focus:border-red-600 outline-none transition-all text-sm font-light" />
            </div>
            <div className="space-y-4">
              <label className="text-[9px] uppercase tracking-[0.4em] text-zinc-500 font-bold ml-1">Asset</label>
              <input type="text" placeholder="Vehicle Model" className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder-zinc-700 focus:border-red-600 outline-none transition-all text-sm font-light" />
            </div>
            <div className="space-y-4 md:col-span-2">
              <label className="text-[9px] uppercase tracking-[0.4em] text-zinc-500 font-bold ml-1">Communication</label>
              <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder-zinc-700 focus:border-red-600 outline-none transition-all text-sm font-light" />
            </div>
            <div className="space-y-4 md:col-span-2">
              <label className="text-[9px] uppercase tracking-[0.4em] text-zinc-500 font-bold ml-1">Interest</label>
              <div className="relative">
                 <select className="w-full bg-transparent border-b border-white/10 py-4 text-zinc-300 focus:border-red-600 outline-none transition-all appearance-none text-sm font-light">
                  <option className="bg-zinc-950">Select Tier</option>
                  <option className="bg-zinc-950">Platinum Prestige (Recommended)</option>
                  <option className="bg-zinc-950">Executive Elite</option>
                  <option className="bg-zinc-950">Diamond Concierge</option>
                  <option className="bg-zinc-950">Bespoke Enhancement</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none" size={16} />
              </div>
            </div>
            <div className="md:col-span-2 pt-6">
              <button type="button" className="w-full bg-white text-black font-bold py-6 rounded-2xl uppercase tracking-[0.4em] text-[11px] transition-all hover:bg-zinc-200 active:scale-[0.98] shadow-2xl">
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#050505] py-24 border-t border-white/5">
    <div className="container mx-auto px-8">
      <div className="grid lg:grid-cols-12 gap-20 mb-24">
        <div className="lg:col-span-5">
          <div className="flex items-center space-x-4 mb-10">
            <div className="w-12 h-12 glass rounded-full flex items-center justify-center">
              <ShieldCheck className="text-white w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-light tracking-[0.3em] text-white">HELVETIA</span>
              <span className="text-[8px] tracking-[0.4em] text-red-500 uppercase font-bold">Auto Care</span>
            </div>
          </div>
          <p className="text-zinc-500 max-w-sm mb-10 leading-relaxed font-light text-sm italic serif">
            "Preserving the soul of automotive excellence through Swiss precision and uncompromising attention."
          </p>
          <div className="flex space-x-6">
            {['Instagram', 'LinkedIn', 'Facebook'].map(social => (
              <a key={social} href="#" className="text-[9px] uppercase tracking-[0.3em] text-zinc-600 hover:text-red-500 transition-colors font-bold">{social}</a>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-7 grid md:grid-cols-3 gap-12">
          <div>
            <h5 className="text-white font-bold uppercase tracking-[0.3em] text-[10px] mb-8">Navigation</h5>
            <ul className="space-y-5 text-[11px] text-zinc-500 uppercase tracking-widest font-semibold">
              <li><a href="#" className="hover:text-red-500 transition-colors">Tiers</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">The Process</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Safety</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h5 className="text-white font-bold uppercase tracking-[0.3em] text-[10px] mb-8">Contact</h5>
            <div className="space-y-6 text-sm text-zinc-500 font-light">
              <p className="flex items-center space-x-4">
                <MapPin size={16} className="text-red-500 shrink-0" />
                <span>Boca Raton, FL • Global Mobility</span>
              </p>
              <p className="flex items-center space-x-4">
                <Clock size={16} className="text-red-500 shrink-0" />
                <span>Concierge available 24/7 for Diamond Members</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-12 border-t border-white/5 text-[10px] tracking-[0.4em] text-zinc-700 uppercase font-bold text-center">
        © 2026 Helvetia Auto Care • Privacy • Terms of Service • Made for Excellence
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-red-600 selection:text-white">
      <Navbar />
      <Hero />
      <ProblemSection />
      <MembershipsSection />
      <ServiceMenuSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
