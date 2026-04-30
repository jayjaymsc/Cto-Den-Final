import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { translations } from '../translations'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Mr. Den Barbershop | Premium Grooming Phu Quoc' },
      { name: 'description', content: 'Experience the ultimate premium grooming services at Mr. Den Barbershop in Phu Quoc. Modern styles, classic techniques.' }
    ]
  }),
  component: Home,
})

function Home() {
  const [lang, setLang] = useState<'en' | 'vi'>('en')
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)
  const t = translations[lang]
  const phoneHref = `tel:${t.location.phone.replace(/\s/g, '')}`

  const openImage = (src: string, alt: string) => {
    setSelectedImage({ src, alt })
  }

  const images = {
    about: '/images/image (1).png',
    price: '/images/price.png',
  }

  const heroImages = [
    { src: '/images/main.jpg', alt: 'Mr. Den storefront' },
  ]

  const galleryImages = [
    '/images/744026b4-146d-4969-9545-5532eed34562.jpg',
    '/images/514535933_647796581645482_4151797699682575246_n.jpg',
    '/images/image (2).png',
    '/images/image.png'
  ]

  const serviceImages = [
    '/images/36df4a3d3ff348f686845c49cec40256.jpg',
    '/images/massage.jpg',
    '/images/master.jpg'
  ]

  return (
    <div className="min-h-screen overflow-hidden bg-[#0b0907] text-stone-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#0b0907]/85 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-serif tracking-widest text-gold">MR. DEN</div>
          
          <div className="hidden lg:flex gap-6 xl:gap-8 text-sm uppercase tracking-widest font-medium">
            <a href="#services" className="hover:text-gold transition-colors">{t.nav.services}</a>
            <a href="#about" className="hover:text-gold transition-colors">{t.nav.about}</a>
            <a href="#gallery" className="hover:text-gold transition-colors">{t.nav.gallery}</a>
            <a href="#reviews" className="hover:text-gold transition-colors">Reviews</a>
            <a href="#location" className="hover:text-gold transition-colors">{t.location.tagline}</a>
          </div>

          <div className="flex items-center gap-6">
            {/* Language Toggle */}
            <div className="flex border border-stone-800 rounded overflow-hidden">
                <button 
                    onClick={() => setLang('en')}
                    className={`px-3 py-1 text-[10px] font-bold transition-colors ${lang === 'en' ? 'bg-gold text-stone-950' : 'bg-transparent text-stone-500 hover:text-gold'}`}
                >
                    EN
                </button>
                <button 
                    onClick={() => setLang('vi')}
                    className={`px-3 py-1 text-[10px] font-bold transition-colors ${lang === 'vi' ? 'bg-gold text-stone-950' : 'bg-transparent text-stone-500 hover:text-gold'}`}
                >
                    VI
                </button>
            </div>
            
            <Link 
                to="/book" 
                className="hidden sm:block bg-gold text-stone-950 px-6 py-2.5 text-sm uppercase tracking-widest font-bold hover:bg-primary transition-all duration-300 active:scale-[0.98]"
            >
                {t.nav.book}
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] overflow-hidden px-6 pt-28 pb-16">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[#0b0907]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(212,175,55,0.12),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_40%)]"></div>
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:72px_72px]"></div>
        </div>
        
        <div className="relative z-10 mx-auto grid min-h-[calc(100dvh-7rem)] max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="max-w-3xl">
            <span className="text-gold uppercase tracking-[0.3em] text-xs md:text-sm mb-5 block font-semibold animate-in fade-in slide-in-from-top-4 duration-1000">{t.hero.tagline}</span>
            <h1 className="text-balance text-5xl md:text-7xl xl:text-8xl font-serif mb-8 leading-[0.94] italic animate-in fade-in slide-in-from-bottom-6 duration-1000">
              {t.hero.title} <br />
              <span className="not-italic text-gold">{t.hero.titleAccent}</span>
            </h1>
            <p className="text-pretty text-lg md:text-xl text-stone-300 mb-10 max-w-2xl font-light leading-relaxed animate-in fade-in duration-1000 delay-300">
              {t.hero.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in duration-1000 delay-500">
              <Link 
                to="/book" 
                className="bg-gold text-stone-950 px-9 py-4 text-sm uppercase tracking-[0.18em] font-bold hover:bg-primary transition-all duration-300 shadow-xl shadow-gold/10 active:scale-[0.98]"
              >
                {t.hero.ctaBook}
              </Link>
              <a 
                href="#services" 
                className="border border-white/15 bg-white/[0.03] px-9 py-4 text-sm uppercase tracking-[0.18em] font-bold hover:border-gold/60 hover:bg-gold/10 transition-all duration-300 active:scale-[0.98]"
              >
                {t.hero.ctaServices}
              </a>
            </div>
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-5 border-t border-white/10 pt-8">
              <div>
                <div className="font-serif text-3xl text-gold">15+</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-stone-500">{t.about.exp}</div>
              </div>
              <div>
                <div className="font-serif text-3xl text-gold">10k+</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-stone-500">{t.about.clients}</div>
              </div>
              <div>
                <div className="font-serif text-3xl text-gold">217A</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-stone-500">Phu Quoc</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:flex lg:items-center">
            <button
              type="button"
              onClick={() => openImage(heroImages[0].src, heroImages[0].alt)}
              className="relative h-[520px] w-full max-w-3xl overflow-hidden border border-white/10 bg-stone-900 text-left shadow-2xl shadow-black/40 cursor-zoom-in"
              aria-label="Open Mr. Den storefront image"
            >
              <img src={heroImages[0].src} alt={heroImages[0].alt} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30 text-gold">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-28 md:py-32 px-6 bg-[#120f0c]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-gold uppercase tracking-[0.3em] text-sm mb-4 font-medium">{t.services.tagline}</h2>
              <h3 className="text-balance text-5xl md:text-6xl font-serif leading-tight">{t.services.title}</h3>
            </div>
            <p className="text-pretty text-stone-400 max-w-md font-light leading-relaxed">
              {t.services.desc}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
            {t.services.list.map((service, i) => (
              <div key={i} className={`group relative overflow-hidden border border-white/10 bg-[#1a1511] transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-2xl hover:shadow-black/30 ${i < 2 ? 'lg:col-span-3' : 'md:col-span-2 lg:col-span-6 lg:grid lg:grid-cols-[0.9fr_1.1fr]'}`}>
                <div className={`${i === 2 ? 'h-80 lg:h-full' : 'h-72'} overflow-hidden`}>
                  <button
                    type="button"
                    onClick={() => openImage(serviceImages[i], service.title)}
                    className="block w-full h-full cursor-zoom-in text-left"
                    aria-label={`Open ${service.title} image`}
                  >
                    <img
                      src={serviceImages[i]}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </button>
                </div>
                <div className="flex min-h-72 flex-col p-8 md:p-10">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-5">
                    <h4 className="text-3xl font-serif leading-tight">{service.title}</h4>
                    <span className="shrink-0 text-gold font-bold tabular-nums">{service.price}</span>
                  </div>
                  <p className="text-pretty text-stone-400 text-sm font-light leading-relaxed mb-8">{service.desc}</p>
                  <Link to="/book" className="mt-auto text-xs uppercase tracking-widest font-bold text-gold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                    {t.services.bookNow} <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Menu Section */}
      <section className="py-24 px-6 border-y border-white/10 bg-[#0b0907]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
          <div>
            <h2 className="text-gold uppercase tracking-[0.3em] text-sm mb-4 font-medium">{t.services.tagline}</h2>
            <h3 className="text-balance text-5xl font-serif mb-6 leading-tight">{lang === 'en' ? 'Gentleman List' : 'Bang Gia Dich Vu'}</h3>
            <p className="text-pretty text-stone-400 font-light leading-relaxed">
              {lang === 'en'
                ? 'Full menu pricing for haircuts, grooming, color, massage, and care services.'
                : 'Bang gia day du cho cac dich vu cat toc, cham soc, nhuom, massage va lam dep.'}
            </p>
          </div>
          <div className="bg-[#f8f1e5] border border-gold/30 p-3 shadow-2xl shadow-black/30">
            <button
              type="button"
              onClick={() => openImage(images.price, 'Mr. Den service price menu')}
              className="block w-full cursor-zoom-in"
              aria-label="Open Mr. Den service price menu"
            >
              <img
                src={images.price}
                alt="Mr. Den service price menu"
                className="w-full h-auto object-contain"
              />
            </button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="about" className="py-28 md:py-32 px-6 grid gap-16 md:grid-cols-[0.9fr_1.1fr] items-center max-w-7xl mx-auto">
        <div className="relative">
          <div className="absolute -inset-4 border border-gold/20 translate-x-4 translate-y-4"></div>
          <button
            type="button"
            onClick={() => openImage(images.about, 'Precision Barbering')}
            className="relative z-10 block w-full overflow-hidden cursor-zoom-in text-left shadow-2xl shadow-black/40"
            aria-label="Open precision barbering image"
          >
            <img
              src={images.about}
              alt="Precision Barbering"
              className="w-full h-auto transition-transform duration-700 hover:scale-[1.02]"
            />
          </button>
        </div>
        <div>
          <h2 className="text-gold uppercase tracking-[0.3em] text-sm mb-4 font-medium">{t.about.tagline}</h2>
          <h3 className="text-balance text-5xl md:text-6xl font-serif mb-8 leading-tight">{t.about.title}</h3>
          <p className="text-pretty text-stone-400 mb-8 font-light leading-relaxed max-w-2xl">
            {t.about.desc}
          </p>
          <div className="grid grid-cols-2 gap-4 max-w-xl">
            <div className="border border-white/10 bg-white/[0.03] p-6">
              <div className="text-4xl font-serif text-gold mb-2 tabular-nums">15+</div>
              <div className="text-xs uppercase tracking-widest font-bold">{t.about.exp}</div>
            </div>
            <div className="border border-white/10 bg-white/[0.03] p-6">
              <div className="text-4xl font-serif text-gold mb-2 tabular-nums">10k+</div>
              <div className="text-xs uppercase tracking-widest font-bold">{t.about.clients}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="scroll-mt-24 py-28 md:py-32 px-6 bg-[#120f0c] border-y border-white/10">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-gold uppercase tracking-[0.3em] text-sm mb-4 font-medium">{t.testimonials.tagline}</h2>
                <h3 className="text-balance text-5xl font-serif mb-4 italic">{t.testimonials.title} <span className="not-italic text-gold">{t.testimonials.titleAccent}</span></h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
                {t.testimonials.list.map((item, i) => (
                    <div key={i} className="relative p-8 md:p-10 bg-[#1a1511] border border-white/10 flex flex-col justify-between">
                        <div className="text-gold mb-8">
                            <svg className="w-10 h-10 opacity-20" fill="currentColor" viewBox="0 0 32 32"><path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"></path></svg>
                        </div>
                        <p className="text-pretty text-stone-300 font-light italic leading-relaxed mb-8">"{item.text}"</p>
                        <div>
                            <div className="h-px w-12 bg-gold/50 mb-4"></div>
                            <p className="text-xs uppercase tracking-widest font-bold text-gold">{item.author}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-28 md:py-32 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-gold uppercase tracking-[0.3em] text-sm mb-4 font-medium">{t.nav.gallery}</h2>
                <h3 className="text-balance text-5xl md:text-6xl font-serif mb-6 italic">{t.gallery.tagline}</h3>
                <p className="text-pretty text-stone-400 max-w-2xl mx-auto font-light">{t.gallery.desc}</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
                {galleryImages.map((img, i) => (
                    <div key={i} className="relative group overflow-hidden border border-white/10 bg-[#1a1511]">
                        <button
                            type="button"
                            onClick={() => openImage(img, `Gallery ${i + 1}`)}
                            className="block w-full cursor-zoom-in text-left"
                            aria-label={`Open gallery image ${i + 1}`}
                        >
                            <img
                                src={img}
                                alt={`Gallery ${i + 1}`}
                                className="h-[380px] w-full object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                            />
                        </button>
                        <div className="pointer-events-none absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                             <div className="w-12 h-12 border border-gold rounded-full flex items-center justify-center text-gold">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                             </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Location & Map Section */}
      <section id="location" className="py-28 md:py-32 px-6 bg-[#120f0c]">
        <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-gold uppercase tracking-[0.3em] text-sm mb-4 font-medium">{t.location.tagline}</h2>
                    <h3 className="text-balance text-5xl md:text-6xl font-serif mb-8 leading-tight">{t.location.title}</h3>
                    <div className="space-y-8">
                        <div className="flex gap-6 border border-white/10 bg-white/[0.03] p-5">
                            <div className="w-12 h-12 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            </div>
                            <div>
                                <h4 className="text-xs uppercase tracking-widest font-bold mb-2 text-stone-500">{t.footer.visit}</h4>
                                <p className="text-lg font-light leading-relaxed">{t.location.address}</p>
                            </div>
                        </div>
                        <div className="flex gap-6 border border-white/10 bg-white/[0.03] p-5">
                            <div className="w-12 h-12 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 011.94.86l-.85 3a1 1 0 01-.62.74l-1.93.97a7 7 0 003.03 3.03l.97-1.93a1 1 0 01.74-.62l3-.85a1 1 0 011.08.58V19a2 2 0 01-2 2h-3.28a1 1 0 01-1.94-.86l.85-3a1 1 0 01.62-.74l1.93-.97a7 7 0 00-3.03-3.03l-.97 1.93a1 1 0 01-.74.62l-3 .85a1 1 0 01-1.08-.58V5z"></path></svg>
                            </div>
                            <div>
                                <h4 className="text-xs uppercase tracking-widest font-bold mb-2 text-stone-500">Phone</h4>
                                <a href={phoneHref} className="text-lg font-light leading-relaxed hover:text-gold transition-colors">
                                  {t.location.phone}
                                </a>
                            </div>
                        </div>
                        <div className="flex gap-6 border border-white/10 bg-white/[0.03] p-5">
                             <div className="w-12 h-12 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <div>
                                <h4 className="text-xs uppercase tracking-widest font-bold mb-2 text-stone-500">{t.footer.hours}</h4>
                                <div className="text-lg font-light leading-relaxed">
                                    <p>{t.footer.daily}: 8:30am - 8:30pm</p>
                                    <p>{t.footer.sunday}: 9:00am - 6:00pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="h-[500px] bg-stone-900 border border-white/10 overflow-hidden relative transition-all duration-1000 group shadow-2xl shadow-black/30">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.0253457176465!2d103.96674367586244!3d10.2167961899003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a78bf5dfd728bd%3A0x988fbc374f8b86e5!2zTXIgxJBlbiBiYXJiZXJzaG9w!5e0!3m2!1sen!2s!4v1714449800000!5m2!1sen!2s" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="opacity-95 transition-opacity duration-1000"
                    ></iframe>
                </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b0907] border-t border-white/10 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="text-3xl font-serif tracking-widest text-gold mb-8">MR. DEN</div>
            <p className="text-stone-500 max-w-sm mb-8 leading-relaxed font-light">
              {t.footer.desc}
            </p>
            <div className="flex gap-6">
              <a href="https://www.facebook.com/profile.php?id=100092454380080&mibextid=LQQJ4d" className="text-stone-500 hover:text-gold transition-colors text-sm uppercase tracking-widest font-bold">Facebook</a>
            </div>
          </div>
          <div>
            <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-8">{t.footer.visit}</h4>
            <address className="not-italic text-stone-400 font-light leading-relaxed">
              217A đường 30/4, Dương Đông<br />
              Phú Quốc, Kiên Giang, Vietnam<br />
              <br />
              <a href={phoneHref} className="hover:text-gold transition-colors">{t.location.phone}</a><br />
              {t.location.email}
            </address>
          </div>
          <div>
            <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-8">{t.footer.hours}</h4>
            <ul className="text-stone-400 font-light space-y-2">
              <li className="flex justify-between"><span>{t.footer.daily}</span> <span>8:30am - 8:30pm</span></li>
              <li className="flex justify-between"><span>{t.footer.sunday}</span> <span>9:00am - 6:00pm</span></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-stone-600 text-[10px] uppercase tracking-widest font-bold">
          <p>{t.footer.rights}</p>
          <p>Designed for appointments, walk-ins, and sharp first impressions.</p>
        </div>
      </footer>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-stone-950/95 p-4 md:p-8 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 md:right-8 md:top-8 w-12 h-12 border border-gold/40 text-gold flex items-center justify-center hover:bg-gold hover:text-stone-950 transition-colors"
            aria-label="Close full size image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-full object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
