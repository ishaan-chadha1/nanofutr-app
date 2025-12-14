import React, { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import { 

  Sun, Moon, Droplets, Wind, Leaf, ShieldCheck, 

  ShoppingBag, Coffee, Activity, ArrowRight, Menu, X, 

  ChevronRight, ChevronLeft, Star, CheckCircle2, 

  Palette, Users, Package, Award, TrendingDown, DollarSign, Sparkles,

  Thermometer, Waves

} from 'lucide-react';

const NanoFutr = () => {

  const [darkMode, setDarkMode] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  

  // Changed from storing the object to storing the index for carousel navigation

  // null = closed, 0,1,2 = open at that index

  const [activeSectorIndex, setActiveSectorIndex] = useState(null); 

  

  const [currentTechImage, setCurrentTechImage] = useState(0);

  // Tech Carousel Images

  const techImages = [

    "https://images.unsplash.com/photo-1565538420870-da58537604ee?auto=format&fit=crop&q=80&w=1000", // Hydrophobic/Water beads close up

    "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&q=80&w=1000", // Modern minimalist fashion/retail

    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000"  // Futuristic Lab/Healthcare

  ];

  // Hero Feature Words Carousel

  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  const featureWords = [

    "anti stain",

    "anti odor",

    "uv\u00A0protection",

    "eco friendly",

    "wicking",

    "coolant"

  ];

  // Carousel Logic for Tech Section

  useEffect(() => {

    const timer = setInterval(() => {

      setCurrentTechImage((prev) => (prev + 1) % techImages.length);

    }, 4000);

    return () => clearInterval(timer);

  }, []);

  // Hero Feature Words Carousel Logic

  useEffect(() => {

    const timer = setInterval(() => {

      setCurrentFeatureIndex((prev) => (prev + 1) % featureWords.length);

    }, 2000);

    return () => clearInterval(timer);

  }, [featureWords.length]);

  // Handle scroll for navbar transparency

  useEffect(() => {

    const handleScroll = () => {

      setIsScrolled(window.scrollY > 20);

    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  // Smooth Scroll Function

  const scrollToSection = (e, id) => {

    e.preventDefault();

    const element = document.getElementById(id);

    if (element) {

      const yOffset = -100; // Offset to account for fixed navbar height

      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });

    }

    setMobileMenuOpen(false);

  };

  // Modal Carousel Navigation

  const nextSector = (e) => {

    e?.stopPropagation();

    setActiveSectorIndex((prev) => (prev === null ? null : (prev + 1) % sectorsData.length));

  };

  const prevSector = (e) => {

    e?.stopPropagation();

    setActiveSectorIndex((prev) => (prev === null ? null : (prev - 1 + sectorsData.length) % sectorsData.length));

  };

  // Animation variants

  const fadeInUp = {

    hidden: { opacity: 0, y: 60 },

    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }

  };

  const staggerContainer = {

    hidden: { opacity: 0 },

    visible: {

      opacity: 1,

      transition: {

        staggerChildren: 0.2

      }

    }

  };

  const sectorsData = [

    { 

      name: "Work Wear", 

      img: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=1000", 

      short: "Professional uniforms for industrial and service environments.",

      description: "Durable, high-performance workwear designed for demanding industrial and service environments. Built to withstand the toughest conditions while maintaining professional appearance.",

      features: ["Stain and water-resistant technology", "Durable construction for long-lasting wear", "Comfortable fit for extended shifts"]

    },

    { 

      name: "Corporate Gear", 

      img: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&q=80&w=1000", 

      short: "Elegant corporate uniforms and business attire.",

      description: "Sophisticated corporate uniforms that elevate your brand image. Professional attire designed for office environments, client meetings, and corporate settings.",

      features: ["Premium fabric quality", "Wrinkle-resistant and easy care", "Customizable to match brand identity"]

    },

    { 

      name: "Active Wear", 

      img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1000", 

      short: "Performance-driven activewear for dynamic work environments.",

      description: "High-performance activewear engineered for movement and comfort. Perfect for fitness facilities, outdoor work, and any environment requiring flexibility and breathability.",

      features: ["Moisture-wicking technology", "Stretch fabrics for maximum mobility", "UV protection and quick-dry materials"]

    },

  ];

  return (

    <div className={`min-h-screen transition-colors duration-700 ease-in-out font-sans selection:bg-blue-500 selection:text-white ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-white text-blue-950'}`}>

      

      {/* --- NAVBAR --- */}

      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-xl border-b shadow-lg ' + (darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-blue-100') : 'bg-transparent border-transparent'}`}>

        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <div className="text-2xl font-black tracking-tighter flex items-center gap-2 cursor-pointer" onClick={(e) => window.scrollTo({ top: 0, behavior: 'smooth' })}>

            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${darkMode ? 'bg-blue-500 text-white' : 'bg-blue-600 text-white'}`}>

              <span className="font-bold text-lg">B</span>

            </div>

            <span>BRAND <span className={darkMode ? "text-blue-400" : "text-blue-600"}>FOOTPRINT</span></span>

          </div>

          {/* Desktop Nav */}

          <div className="hidden md:flex items-center gap-10">

            {['Technology', 'Why Us', 'Solutions', 'Process'].map((item) => {

              const id = item.toLowerCase().replace(' ', '-');

              return (

                <a 

                  key={item} 

                  href={`#${id}`}

                  onClick={(e) => scrollToSection(e, id)}

                  className={`text-xs font-bold uppercase tracking-wider hover:text-blue-600 transition-colors whitespace-nowrap ${darkMode ? 'text-slate-400' : 'text-blue-900/60'}`}

                >

                  {item}

                </a>

              );

            })}

          </div>

          <div className="flex items-center gap-4">

            <button 

              onClick={toggleTheme}

              className={`p-2 rounded-full transition-all hover:scale-110 active:scale-95 ${darkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'}`}

            >

              {darkMode ? <Sun size={20} /> : <Moon size={20} />}

            </button>

            <a 

              href="#contact" 

              onClick={(e) => scrollToSection(e, 'contact')}

              className={`hidden md:flex items-center gap-2 px-6 py-2 rounded-full font-bold text-sm text-white transition-all transform hover:-translate-y-1 hover:shadow-lg ${darkMode ? 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:shadow-blue-500/25' : 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:shadow-blue-600/25'}`}

            >

              Get Started <ArrowRight size={16} />

            </a>

            {/* Mobile Menu Button */}

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>

              {mobileMenuOpen ? <X /> : <Menu />}

            </button>

          </div>

        </div>

        

        {/* Mobile Menu */}

        {mobileMenuOpen && (

          <motion.div 

            initial={{ height: 0, opacity: 0 }}

            animate={{ height: 'auto', opacity: 1 }}

            className={`md:hidden px-6 py-4 border-t ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-blue-100'}`}

          >

            <div className="flex flex-col gap-4">

              {['Technology', 'Why Us', 'Solutions', 'Process'].map((item) => {

                const id = item.toLowerCase().replace(' ', '-');

                return (

                  <a 

                    key={item} 

                    href={`#${id}`} 

                    className="text-lg font-bold" 

                    onClick={(e) => scrollToSection(e, id)}

                  >

                    {item}

                  </a>

                );

              })}

              <a 

                href="#contact" 

                className="text-blue-500 font-bold" 

                onClick={(e) => scrollToSection(e, 'contact')}

              >

                Get Started

              </a>

            </div>

          </motion.div>

        )}

      </nav>

      {/* --- HERO SECTION --- */}

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

        {/* Animated Background Blobs */}

        <div className={`absolute inset-0 transition-opacity duration-1000 ${darkMode ? 'opacity-30' : 'opacity-60'}`}>

           <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>

           <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>

           <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000"></div>

        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">

          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>

            <motion.div variants={fadeInUp} className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-12 backdrop-blur-sm ${darkMode ? 'bg-slate-900/40 border border-slate-700/50 text-blue-400' : 'bg-white/60 border border-blue-200/50 text-blue-700'}`}>

              <Star size={11} className="fill-current" />

              Next Generation Workwear

            </motion.div>

            

            <motion.h1 variants={fadeInUp} className={`mb-8 leading-[1.05] ${darkMode ? 'text-white' : 'text-blue-950'}`}>

              <span className="block text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-2">

                BRAND FOOTPRINT

              </span>

              <span className="block text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight opacity-80">

                Performance Wear

              </span>

            </motion.h1>

            

            {/* Vertical Carousel for Feature Words */}

            <motion.div variants={fadeInUp} className="relative h-24 md:h-32 mb-12 flex items-center justify-center overflow-hidden">

              <div className="relative w-full flex items-center justify-center">

                <AnimatePresence mode="wait">

                  <motion.div

                    key={currentFeatureIndex}

                    initial={{ opacity: 0, y: 60, scale: 0.9 }}

                    animate={{ opacity: 1, y: 0, scale: 1 }}

                    exit={{ opacity: 0, y: -60, scale: 0.9 }}

                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}

                    className="absolute"

                  >

                    <span className={`text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter whitespace-nowrap ${darkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600'}`}>

                      {featureWords[currentFeatureIndex]}

                    </span>

                  </motion.div>

                </AnimatePresence>

              </div>

            </motion.div>

            

            <motion.p variants={fadeInUp} className={`text-base md:text-lg max-w-2xl mx-auto mb-16 font-normal leading-relaxed ${darkMode ? 'text-slate-300' : 'text-blue-900/60'}`}>

              High-performance uniforms designed to repel liquids, stay fresh for 12+ hours, and elevate your brand's perception at every touchpoint.

            </motion.p>

            

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">

              <a 

                href="#solutions" 

                onClick={(e) => scrollToSection(e, 'solutions')}

                className={`w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-base transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg flex items-center justify-center gap-2 ${darkMode ? 'bg-white text-blue-900 hover:bg-blue-50' : 'bg-blue-600 text-white hover:bg-blue-700'}`}

              >

                Our Solutions <ChevronRight size={16} />

              </a>

              <a 

                href="#technology" 

                onClick={(e) => scrollToSection(e, 'technology')}

                className={`w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-base border-2 hover:scale-[1.02] active:scale-[0.98] transition-all ${darkMode ? 'border-slate-600 hover:border-slate-500 hover:bg-slate-800/50 text-white' : 'border-blue-300 hover:border-blue-400 hover:bg-blue-50 text-blue-900'}`}

              >

                Discover Technology

              </a>

            </motion.div>

          </motion.div>

        </div>

        {/* Scroll Indicator */}

        <motion.div 

          animate={{ y: [0, 10, 0] }} 

          transition={{ repeat: Infinity, duration: 2 }}

          className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50"

        >

          <div className={`w-6 h-10 border-2 rounded-full flex justify-center pt-2 ${darkMode ? 'border-slate-500' : 'border-blue-300'}`}>

            <div className={`w-1 h-2 rounded-full ${darkMode ? 'bg-slate-500' : 'bg-blue-400'}`}></div>

          </div>

        </motion.div>

      </section>

      {/* --- UNMATCHED TECH (WITH CAROUSEL) --- */}

      <section id="technology" className={`py-32 px-6 overflow-hidden relative ${darkMode ? 'bg-slate-950' : 'bg-blue-50/30'}`}>

        {/* Tech Background Pattern */}

        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, ${darkMode ? '#3b82f6' : '#2563eb'} 1px, transparent 0)`, backgroundSize: '40px 40px' }}></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">

          <motion.div 

             initial={{ opacity: 0, x: -50 }}

             whileInView={{ opacity: 1, x: 0 }}

             viewport={{ once: true }}

          >

            <div className={`inline-block px-3 py-1 rounded mb-6 text-sm font-bold uppercase ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>

              Proprietary Tech

            </div>

            <h2 className={`text-5xl md:text-7xl font-black mb-8 leading-none ${darkMode ? 'text-white' : 'text-blue-950'}`}>

              UNMATCHED <br/><span className={darkMode ? "text-blue-400" : "text-blue-600"}>PERFORMANCE</span>

            </h2>

            <p className={`text-xl mb-12 ${darkMode ? 'text-slate-400' : 'text-blue-900/70'}`}>

              We don't just make clothes; we engineer performance. Our finishes are certified by accredited third-party labs to ensure durability and safety.

            </p>

            

            <div className="grid gap-6">

              {[

                { label: "Anti-Stain Technology", desc: "Repels liquids like coffee, tea, juices, and sauces.", icon: <Droplets /> },

                { label: "Anti-Odor Finish", desc: "Garments remain fresh for over 12-hour shifts.", icon: <Wind /> },

                { label: "Moisture-Wicking", desc: "Advanced wicking technology keeps you dry and comfortable.", icon: <Waves /> },

                { label: "Cooling Technology", desc: "Temperature-regulating fabrics for optimal comfort.", icon: <Thermometer /> },

                { label: "UV Protection", desc: "Built-in UV protection to shield against harmful sun rays.", icon: <Sun /> },

                { label: "Easy Care", desc: "Quick-drying, easy to clean and iron, reducing maintenance.", icon: <Leaf /> },

                { label: "Certified Performance", desc: "Finishes certified by accredited third-party labs.", icon: <Award /> }

              ].map((feat, i) => (

                <div key={i} className={`flex items-start gap-6 p-6 rounded-2xl transition-colors ${darkMode ? 'hover:bg-slate-900/80' : 'hover:bg-white hover:shadow-lg hover:shadow-blue-900/5'}`}>

                  <div className={`p-4 rounded-xl shrink-0 ${darkMode ? 'bg-slate-800 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.15)]' : 'bg-blue-100 text-blue-700'}`}>

                    {feat.icon}

                  </div>

                  <div>

                    <h4 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-blue-900'}`}>{feat.label}</h4>

                    <p className={`text-base ${darkMode ? 'text-slate-500' : 'text-blue-900/60'}`}>{feat.desc}</p>

                  </div>

                </div>

              ))}

            </div>

          </motion.div>

          <motion.div 

             initial={{ opacity: 0, scale: 0.9 }}

             whileInView={{ opacity: 1, scale: 1 }}

             viewport={{ once: true }}

             className="relative"

          >

             {/* Main Image Container with Carousel */}

             <div className={`relative h-[700px] rounded-[3rem] overflow-hidden shadow-2xl ${darkMode ? 'bg-slate-900 border border-slate-800' : 'bg-white border border-blue-100'}`}>

                <AnimatePresence mode='wait'>

                  <motion.img 

                    key={currentTechImage}

                    src={techImages[currentTechImage]} 

                    initial={{ opacity: 0, scale: 1.1 }}

                    animate={{ opacity: 0.6, scale: 1 }}

                    exit={{ opacity: 0 }}

                    transition={{ duration: 1 }}

                    alt="Fabric Detail" 

                    className="absolute inset-0 w-full h-full object-cover"

                  />

                </AnimatePresence>

                <div className={`absolute inset-0 bg-gradient-to-t ${darkMode ? 'from-slate-950 via-transparent to-transparent' : 'from-blue-50/50 via-transparent to-transparent'}`}></div>

                

                {/* Floating Badge */}

                <div className="absolute bottom-10 left-10 right-10">

                  <div className={`p-8 backdrop-blur-xl rounded-3xl border ${darkMode ? 'bg-slate-900/60 border-slate-700/50' : 'bg-white/80 border-white/50 shadow-lg'}`}>

                    <div className="flex items-end gap-4">

                       <span className={`text-6xl font-black ${darkMode ? 'text-blue-500' : 'text-blue-600'}`}>50+</span>

                       <span className={`text-sm font-bold uppercase tracking-widest pb-4 opacity-70 ${darkMode ? 'text-white' : 'text-blue-900'}`}>Years of <br/>Innovation</span>

                    </div>

                  </div>

                </div>

                {/* Carousel Indicators */}

                <div className="absolute bottom-14 right-14 flex gap-2 z-20">

                  {techImages.map((_, idx) => (

                    <div 

                      key={idx} 

                      className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentTechImage ? 'w-8 bg-blue-600' : 'w-2 bg-blue-300/50'}`} 

                    />

                  ))}

                </div>

             </div>

             

             {/* Decorative Elements */}

             <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

          </motion.div>

        </div>

      </section>

      {/* --- WHY IT MATTERS (Bento Grid) --- */}

      <section id="why-us" className={`py-32 px-6 ${darkMode ? 'bg-slate-900/30' : 'bg-white'}`}>

        <div className="max-w-7xl mx-auto">

          <motion.div 

            initial="hidden" 

            whileInView="visible" 

            viewport={{ once: true, margin: "-100px" }}

            variants={fadeInUp}

            className="mb-20 text-center"

          >

            <h2 className={`text-4xl md:text-6xl font-black mb-6 tracking-tight ${darkMode ? 'text-white' : 'text-blue-950'}`}>Why Workwear Matters</h2>

            <div className={`h-1.5 w-32 mx-auto rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>

          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[

              { title: "Customer Perception", desc: "A professional appearance builds instant trust and satisfaction.", icon: <ShieldCheck className="w-12 h-12 mb-6"/>, color: "text-blue-500" },

              { title: "Improved Service", desc: "Comfortable, clean uniforms lead to happier staff and better service.", icon: <Activity className="w-12 h-12 mb-6"/>, color: "text-indigo-500" },

              { title: "Brand Impact", desc: "Your uniform is a walking billboard. Make it count every day.", icon: <Leaf className="w-12 h-12 mb-6"/>, color: "text-sky-500" },

            ].map((item, index) => (

              <motion.div 

                key={index}

                initial={{ opacity: 0, y: 30 }}

                whileInView={{ opacity: 1, y: 0 }}

                viewport={{ once: true }}

                transition={{ delay: index * 0.1 }}

                whileHover={{ y: -10 }}

                className={`p-10 rounded-[2rem] border backdrop-blur-sm transition-all group ${

                  darkMode 

                    ? 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-800/80 hover:border-blue-500/30' 

                    : 'bg-blue-50/50 border-blue-100 hover:shadow-xl hover:border-blue-200 hover:bg-white'

                }`}

              >

                <div className={`${item.color} transform group-hover:scale-110 transition-transform duration-300`}>{item.icon}</div>

                <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-blue-900'}`}>{item.title}</h3>

                <p className={`text-lg leading-relaxed ${darkMode ? 'text-slate-400' : 'text-blue-900/70'}`}>{item.desc}</p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* --- DESIGN-TO-DELIVERY SOLUTION --- */}

      <section id="design-delivery" className={`py-32 px-6 ${darkMode ? 'bg-slate-950' : 'bg-blue-50/30'}`}>

        <div className="max-w-7xl mx-auto">

          <motion.div 

            initial="hidden" 

            whileInView="visible" 

            viewport={{ once: true, margin: "-100px" }}

            variants={fadeInUp}

            className="mb-20 text-center"

          >

            <h2 className={`text-4xl md:text-6xl font-black mb-6 tracking-tight ${darkMode ? 'text-white' : 'text-blue-950'}`}>Design-to-Delivery Solution</h2>

            <div className={`h-1.5 w-32 mx-auto rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>

          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[

              { 

                title: "Custom Design", 

                desc: "We create custom staff uniforms that align with your brand's visual identity.", 

                icon: <Palette className="w-10 h-10"/>, 

                color: "text-blue-500" 

              },

              { 

                title: "Role-Specific Uniforms", 

                desc: "We offer tailored looks for different staff roles.", 

                icon: <Users className="w-10 h-10"/>, 

                color: "text-indigo-500" 

              },

              { 

                title: "Extensive Product Range", 

                desc: "Shirts, trousers, t-shirts, jackets, scrubs, lab coats, accessories, etc.", 

                icon: <Package className="w-10 h-10"/>, 

                color: "text-sky-500" 

              },

              { 

                title: "Quality Manufacturing", 

                desc: "All garments are manufactured to exacting standards in world-class facilities.", 

                icon: <Award className="w-10 h-10"/>, 

                color: "text-purple-500" 

              },

            ].map((item, index) => (

              <motion.div 

                key={index}

                initial={{ opacity: 0, y: 30 }}

                whileInView={{ opacity: 1, y: 0 }}

                viewport={{ once: true }}

                transition={{ delay: index * 0.1 }}

                whileHover={{ y: -10 }}

                className={`p-8 rounded-2xl border backdrop-blur-sm transition-all group ${

                  darkMode 

                    ? 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-800/80 hover:border-blue-500/30' 

                    : 'bg-white border-blue-100 hover:shadow-xl hover:border-blue-200'

                }`}

              >

                <div className={`${item.color} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>{item.icon}</div>

                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-blue-900'}`}>{item.title}</h3>

                <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-400' : 'text-blue-900/70'}`}>{item.desc}</p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* --- A SMARTER INVESTMENT --- */}

      <section id="investment" className={`py-32 px-6 ${darkMode ? 'bg-slate-900/30' : 'bg-white'}`}>

        <div className="max-w-7xl mx-auto">

          <motion.div 

            initial="hidden" 

            whileInView="visible" 

            viewport={{ once: true, margin: "-100px" }}

            variants={fadeInUp}

            className="mb-20 text-center"

          >

            <h2 className={`text-4xl md:text-6xl font-black mb-6 tracking-tight ${darkMode ? 'text-white' : 'text-blue-950'}`}>A Smarter Investment</h2>

            <div className={`h-1.5 w-32 mx-auto rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>

          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[

              { 

                title: "Eco-Friendly & Brand-Positive", 

                desc: "Our sustainable approach enhances your public relations.", 

                icon: <Leaf className="w-12 h-12 mb-6"/>, 

                color: "text-green-500" 

              },

              { 

                title: "Lower Operating Expenses", 

                desc: "Easy-to-maintain uniforms reduce operational costs.", 

                icon: <TrendingDown className="w-12 h-12 mb-6"/>, 

                color: "text-blue-500" 

              },

              { 

                title: "Reduced Capital Expenditures", 

                desc: "Durable uniforms mean fewer replacements over time, lowering long-term investment.", 

                icon: <DollarSign className="w-12 h-12 mb-6"/>, 

                color: "text-indigo-500" 

              },

            ].map((item, index) => (

              <motion.div 

                key={index}

                initial={{ opacity: 0, y: 30 }}

                whileInView={{ opacity: 1, y: 0 }}

                viewport={{ once: true }}

                transition={{ delay: index * 0.1 }}

                whileHover={{ y: -10 }}

                className={`p-10 rounded-[2rem] border backdrop-blur-sm transition-all group ${

                  darkMode 

                    ? 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-800/80 hover:border-blue-500/30' 

                    : 'bg-blue-50/50 border-blue-100 hover:shadow-xl hover:border-blue-200 hover:bg-white'

                }`}

              >

                <div className={`${item.color} transform group-hover:scale-110 transition-transform duration-300`}>{item.icon}</div>

                <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-blue-900'}`}>{item.title}</h3>

                <p className={`text-lg leading-relaxed ${darkMode ? 'text-slate-400' : 'text-blue-900/70'}`}>{item.desc}</p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* --- SOLUTIONS (WITH MODALS) --- */}

      <section id="solutions" className={`py-32 px-6 ${darkMode ? 'bg-slate-950' : 'bg-white'}`}>

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">

            <div>

              <h2 className={`text-4xl md:text-6xl font-black mb-4 ${darkMode ? 'text-white' : 'text-blue-950'}`}>Our Solutions</h2>

              <p className={`text-xl max-w-xl ${darkMode ? 'text-slate-500' : 'text-blue-900/60'}`}>Tailored solutions for industries where appearance and performance are critical.</p>

            </div>

            <button 

              onClick={() => setActiveSectorIndex(0)} 

              className={`hidden md:block px-6 py-3 rounded-full border font-bold transition-all ${darkMode ? 'border-slate-700 text-white hover:bg-blue-500 hover:border-blue-500' : 'border-blue-200 text-blue-900 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-lg'}`}

            >

              View Full Catalog

            </button>

          </div>

          

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {sectorsData.map((sector, idx) => (

              <motion.div 

                key={idx}

                whileHover={{ y: -10 }}

                onClick={() => setActiveSectorIndex(idx)}

                className="group relative h-[500px] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"

              >

                <div className={`absolute inset-0 bg-gradient-to-t ${darkMode ? 'from-slate-900/90 via-slate-900/20' : 'from-blue-950/90 via-blue-900/20'} to-transparent z-10`}></div>

                <img 

                  src={sector.img} 

                  alt={sector.name} 

                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 

                />

                <div className="absolute bottom-0 left-0 p-10 z-20 w-full transform transition-transform duration-500 group-hover:-translate-y-4">

                  <h3 className="text-4xl font-black text-white mb-3">{sector.name}</h3>

                  <p className="text-blue-100 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">

                    {sector.short}

                  </p>

                  <div className={`mt-6 w-12 h-12 rounded-full flex items-center justify-center ${darkMode ? 'bg-blue-500 text-white' : 'bg-white text-blue-900'}`}>

                    <ArrowRight size={20} />

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* --- OUR EXPERTISE --- */}

      <section id="expertise" className={`py-32 px-6 ${darkMode ? 'bg-slate-950' : 'bg-blue-50/30'}`}>

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            <motion.div 

              initial={{ opacity: 0, x: -50 }}

              whileInView={{ opacity: 1, x: 0 }}

              viewport={{ once: true }}

            >

              <div className={`inline-block px-3 py-1 rounded mb-6 text-sm font-bold uppercase ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>

                Our Expertise

              </div>

              <h2 className={`text-4xl md:text-6xl font-black mb-8 leading-none ${darkMode ? 'text-white' : 'text-blue-950'}`}>

                Built on <span className={darkMode ? "text-blue-400" : "text-blue-600"}>Experience</span>

              </h2>

              <div className="space-y-6">

                <div className="flex items-start gap-4">

                  <CheckCircle2 className={`w-6 h-6 flex-shrink-0 mt-1 ${darkMode ? 'text-blue-500' : 'text-blue-600'}`} />

                  <p className={`text-lg ${darkMode ? 'text-slate-300' : 'text-blue-900/70'}`}>

                    <span className="font-bold">50+ years</span> of combined experience in apparel design and manufacturing at leading companies.

                  </p>

                </div>

                <div className="flex items-start gap-4">

                  <CheckCircle2 className={`w-6 h-6 flex-shrink-0 mt-1 ${darkMode ? 'text-blue-500' : 'text-blue-600'}`} />

                  <p className={`text-lg ${darkMode ? 'text-slate-300' : 'text-blue-900/70'}`}>

                    Deep expertise in uniform performance and textile innovation.

                  </p>

                </div>

                <div className="flex items-start gap-4">

                  <CheckCircle2 className={`w-6 h-6 flex-shrink-0 mt-1 ${darkMode ? 'text-blue-500' : 'text-blue-600'}`} />

                  <p className={`text-lg ${darkMode ? 'text-slate-300' : 'text-blue-900/70'}`}>

                    Driven by a vision to create the next generation of workwear.

                  </p>

                </div>

              </div>

            </motion.div>

            <motion.div 

              initial={{ opacity: 0, scale: 0.9 }}

              whileInView={{ opacity: 1, scale: 1 }}

              viewport={{ once: true }}

              className="relative"

            >

              <div className={`relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl ${darkMode ? 'bg-slate-900 border border-slate-800' : 'bg-white border border-blue-100'}`}>

                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 flex items-center justify-center">

                  <div className="text-center p-12">

                    <div className={`text-8xl font-black mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>50+</div>

                    <div className={`text-2xl font-bold uppercase tracking-widest ${darkMode ? 'text-white' : 'text-blue-900'}`}>Years of Innovation</div>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* --- NAVIGABLE MODAL CAROUSEL --- */}

      <AnimatePresence>

        {activeSectorIndex !== null && (

          <motion.div 

            initial={{ opacity: 0 }} 

            animate={{ opacity: 1 }} 

            exit={{ opacity: 0 }}

            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"

            onClick={() => setActiveSectorIndex(null)}

          >

            <div className="relative w-full max-w-5xl">

              

              {/* Previous Button */}

              <button 

                onClick={prevSector}

                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 p-3 rounded-full transition-all ${darkMode ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-white text-blue-900 hover:bg-blue-50 shadow-lg'}`}

              >

                <ChevronLeft size={24} />

              </button>

              {/* Next Button */}

              <button 

                onClick={nextSector}

                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 p-3 rounded-full transition-all ${darkMode ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-white text-blue-900 hover:bg-blue-50 shadow-lg'}`}

              >

                <ChevronRight size={24} />

              </button>

              <motion.div 

                key={activeSectorIndex}

                initial={{ scale: 0.95, opacity: 0, x: 20 }} 

                animate={{ scale: 1, opacity: 1, x: 0 }} 

                exit={{ scale: 0.95, opacity: 0, x: -20 }}

                transition={{ duration: 0.3 }}

                onClick={(e) => e.stopPropagation()}

                className={`relative w-full rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-[80vh] md:h-[600px] ${darkMode ? 'bg-slate-900' : 'bg-white'}`}

              >

                <button 

                  onClick={() => setActiveSectorIndex(null)}

                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-md transition-colors"

                >

                  <X size={20} />

                </button>

                {/* Image Side */}

                <div className="w-full md:w-1/2 h-1/3 md:h-full relative">

                  <img src={sectorsData[activeSectorIndex].img} alt={sectorsData[activeSectorIndex].name} className="absolute inset-0 w-full h-full object-cover" />

                  <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>

                  {/* Badge */}

                  <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur rounded-full text-xs font-bold uppercase tracking-widest text-blue-900 shadow-lg">

                    Sector {activeSectorIndex + 1} / {sectorsData.length}

                  </div>

                </div>

                {/* Content Side */}

                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">

                  <h3 className={`text-4xl font-black mb-4 ${darkMode ? 'text-white' : 'text-blue-950'}`}>{sectorsData[activeSectorIndex].name}</h3>

                  <p className={`text-lg mb-8 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-blue-900/70'}`}>

                    {sectorsData[activeSectorIndex].description}

                  </p>

                  <div className="space-y-4">

                    {sectorsData[activeSectorIndex].features.map((feature, i) => (

                      <div key={i} className="flex items-center gap-3">

                        <CheckCircle2 className={`w-6 h-6 flex-shrink-0 ${darkMode ? 'text-blue-500' : 'text-blue-600'}`} />

                        <span className={`font-semibold ${darkMode ? 'text-slate-200' : 'text-blue-900'}`}>{feature}</span>

                      </div>

                    ))}

                  </div>

                </div>

              </motion.div>

              {/* Pagination Dots */}

              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">

                {sectorsData.map((_, idx) => (

                  <button

                    key={idx}

                    onClick={(e) => { e.stopPropagation(); setActiveSectorIndex(idx); }}

                    className={`h-2 rounded-full transition-all ${idx === activeSectorIndex ? 'w-8 bg-blue-500' : 'w-2 bg-slate-500/50'}`}

                  />

                ))}

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

      {/* --- 3 STEP PROCESS --- */}

      <section id="process" className={`py-32 px-6 border-y ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-blue-50/30 border-blue-100'}`}>

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

             <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-blue-950'}`}>Our 3-Step Process</h2>

             <p className={`mt-4 ${darkMode ? 'text-slate-500' : 'text-blue-900/60'}`}>A simplified process to get your team fitted.</p>

          </div>

          

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

            {/* Connecting Line (Desktop) */}

            <div className={`hidden md:block absolute top-16 left-[16%] right-[16%] h-0.5 z-0 ${darkMode ? 'bg-slate-800' : 'bg-blue-100'}`}></div>

            

            {[

              { step: "01", title: "Consultation", desc: "Free 30-60 min uniform audit." },

              { step: "02", title: "Customization", desc: "Designs aligned with brand identity." },

              { step: "03", title: "Implementation", desc: "Timely, high-quality delivery." }

            ].map((item, i) => (

              <div key={i} className="relative z-10 text-center group">

                <div className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center text-4xl font-black mb-8 border-[6px] transition-transform duration-300 group-hover:scale-110 shadow-xl ${darkMode ? 'bg-slate-950 border-slate-800 text-blue-500 group-hover:border-blue-500' : 'bg-white border-blue-100 text-blue-600 group-hover:border-blue-200'}`}>

                  {item.step}

                </div>

                <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-blue-950'}`}>{item.title}</h3>

                <p className={`max-w-xs mx-auto ${darkMode ? 'text-slate-500' : 'text-blue-900/60'}`}>{item.desc}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* --- CONTACT / FOOTER --- */}

      <section id="contact" className={`py-32 px-6 ${darkMode ? 'bg-gradient-to-t from-slate-950 to-slate-900' : 'bg-blue-950 text-white'}`}>

        <div className="max-w-5xl mx-auto text-center">

          <motion.div

            initial={{ opacity: 0, scale: 0.95 }}

            whileInView={{ opacity: 1, scale: 1 }}

            viewport={{ once: true }}

            className={`p-8 md:p-16 rounded-[3rem] relative overflow-hidden ${darkMode ? 'bg-slate-800/30 border border-slate-700 shadow-2xl' : 'bg-white/10 border border-white/10'}`}

          >

            {/* Glossy Overlay */}

            <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 left-full animate-shine" />

            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Ready to <span className={darkMode ? 'text-blue-400' : 'text-blue-400'}>Transform?</span></h2>

            <p className="text-xl opacity-80 mb-12 max-w-2xl mx-auto">

              Let's create the next generation of workwear for your team. Fill out the form or reach us directly.

            </p>

            

            <form className="max-w-xl mx-auto space-y-4 text-left">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                 <div className="space-y-1">

                   <label className="text-xs font-bold uppercase tracking-widest opacity-70 ml-2">Name</label>

                   <input type="text" placeholder="John Doe" className={`w-full p-4 rounded-xl border focus:outline-none focus:ring-2 transition-all ${darkMode ? 'bg-slate-900/50 border-slate-600 focus:border-blue-500 focus:ring-blue-500/20' : 'bg-white/10 border-white/20 focus:border-blue-400 focus:ring-blue-400/20 placeholder-gray-400'}`} />

                 </div>

                 <div className="space-y-1">

                   <label className="text-xs font-bold uppercase tracking-widest opacity-70 ml-2">Email</label>

                   <input type="email" placeholder="contact@brandfootprint.com" className={`w-full p-4 rounded-xl border focus:outline-none focus:ring-2 transition-all ${darkMode ? 'bg-slate-900/50 border-slate-600 focus:border-blue-500 focus:ring-blue-500/20' : 'bg-white/10 border-white/20 focus:border-blue-400 focus:ring-blue-400/20 placeholder-gray-400'}`} />

                 </div>

              </div>

              

              <div className="space-y-1">

                <label className="text-xs font-bold uppercase tracking-widest opacity-70 ml-2">Message</label>

                <textarea rows="4" placeholder="Tell us about your team..." className={`w-full p-4 rounded-xl border focus:outline-none focus:ring-2 transition-all ${darkMode ? 'bg-slate-900/50 border-slate-600 focus:border-blue-500 focus:ring-blue-500/20' : 'bg-white/10 border-white/20 focus:border-blue-400 focus:ring-blue-400/20 placeholder-gray-400'}`}></textarea>

              </div>

              <button className={`w-full py-5 rounded-xl font-bold text-lg transition-all hover:scale-[1.02] active:scale-[0.98] ${darkMode ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-[0_0_30px_rgba(59,130,246,0.4)]' : 'bg-white text-blue-950 hover:bg-gray-100'}`}>

                Start Conversation

              </button>

            </form>

            <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm opacity-60">

              <div className="text-left space-y-2">

                <p className="flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse block"></span> +91 9886104356</p>

                <p>contact@brandfootprint.com</p>

                <p>www.brandfootprint.com</p>

              </div>

              <div className="text-left md:text-right">

                <p>© 2025 Brand Footprint.</p>

                <p>Designed with liquid intelligence.</p>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* CSS for custom gradient blob animation */}

      <style>{`

        @keyframes blob {

          0% { transform: translate(0px, 0px) scale(1); }

          33% { transform: translate(30px, -50px) scale(1.1); }

          66% { transform: translate(-20px, 20px) scale(0.9); }

          100% { transform: translate(0px, 0px) scale(1); }

        }

        .animate-blob {

          animation: blob 10s infinite;

        }

        .animation-delay-2000 {

          animation-delay: 2s;

        }

        .animation-delay-4000 {

          animation-delay: 4s;

        }

        @keyframes shine {

          100% {

            left: 125%;

          }

        }

        .animate-shine {

          animation: shine 3s infinite;

        }

      `}</style>

    </div>

  );

};

export default NanoFutr;

