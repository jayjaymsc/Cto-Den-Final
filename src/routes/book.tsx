import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { translations } from '../translations'

export const Route = createFileRoute('/book')({
  head: () => ({
    meta: [
      { title: 'Book Appointment | Mr. Den Barbershop' },
    ]
  }),
  component: BookingPage,
})

function BookingPage() {
  const [lang, setLang] = useState<'en' | 'vi'>('en')
  const t = translations[lang]
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const services = [
    { id: '1', name: t.services.list[0].title, price: '100.000đ', duration: '45 min' },
    { id: '2', name: lang === 'en' ? 'Face Shave & Ear Clean' : 'Cạo Mặt & Lấy Ráy Tai', price: '80.000đ', duration: '30 min' },
    { id: '3', name: t.services.list[1].title, price: '250.000đ', duration: '75 min' },
    { id: '4', name: t.services.list[2].title, price: '300.000đ+', duration: '120 min' },
  ]

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-stone-950/80 backdrop-blur-md border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="text-2xl font-serif tracking-widest text-gold">MR. DEN</Link>
          
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
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
            <h1 className="text-5xl font-serif mb-4 italic">{t.booking.title} <span className="not-italic text-gold">{t.booking.titleAccent}</span></h1>
            <p className="text-stone-400 font-light tracking-wide">{t.booking.desc}</p>
            </div>

            {/* Progress bar */}
            <div className="flex justify-between mb-12 relative">
                <div className="absolute top-1/2 left-0 w-full h-px bg-stone-800 -translate-y-1/2 z-0"></div>
                {[1, 2, 3].map((s) => (
                    <div 
                        key={s} 
                        className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-500 ${
                            step >= s ? 'bg-gold border-gold text-stone-950 shadow-lg shadow-gold/20' : 'bg-stone-900 border-stone-800 text-stone-500'
                        }`}
                    >
                        {s}
                    </div>
                ))}
            </div>

            <div className="bg-stone-900/50 border border-stone-800 p-8 md:p-12 backdrop-blur-sm">
                {step === 1 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <h2 className="text-2xl font-serif mb-8 text-gold">{t.booking.step1}</h2>
                        <div className="space-y-4">
                            {services.map((service) => (
                                <button
                                    key={service.id}
                                    onClick={() => {
                                        setSelectedService(service.id)
                                        setStep(2)
                                    }}
                                    className={`w-full flex justify-between items-center p-6 border transition-all duration-300 group ${
                                        selectedService === service.id ? 'border-gold bg-stone-800/50' : 'border-stone-800 hover:border-stone-600 bg-stone-900'
                                    }`}
                                >
                                    <div className="text-left">
                                        <div className="text-lg font-serif group-hover:text-gold transition-colors">{service.name}</div>
                                        <div className="text-xs text-stone-500 uppercase tracking-widest mt-1">{service.duration}</div>
                                    </div>
                                    <div className="text-xl font-serif text-gold">{service.price}</div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <button onClick={() => setStep(1)} className="text-xs uppercase tracking-widest text-stone-500 hover:text-gold mb-8 flex items-center gap-2">
                            {t.booking.backServices}
                        </button>
                        <h2 className="text-2xl font-serif mb-8 text-gold">{t.booking.step2}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Placeholder for calendar */}
                            <div className="p-6 border border-stone-800 bg-stone-900/50 text-center flex items-center justify-center">
                                <p className="text-stone-500 text-sm italic">{lang === 'en' ? 'Calendar integration' : 'Tích hợp lịch'}</p>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                                {['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'].map(time => (
                                    <button 
                                        key={time}
                                        onClick={() => setStep(3)}
                                        className="p-3 text-xs border border-stone-800 hover:border-gold hover:text-gold transition-all"
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <button onClick={() => setStep(2)} className="text-xs uppercase tracking-widest text-stone-500 hover:text-gold mb-8 flex items-center gap-2">
                            {t.booking.backSchedule}
                        </button>
                        <h2 className="text-2xl font-serif mb-8 text-gold">{t.booking.step3}</h2>
                        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert(lang === 'en' ? 'Booking successful!' : 'Đặt lịch thành công!') }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500">{t.booking.fullName}</label>
                                    <input className="w-full bg-stone-900 border border-stone-800 p-4 focus:border-gold outline-none transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500">{t.booking.email}</label>
                                    <input className="w-full bg-stone-900 border border-stone-800 p-4 focus:border-gold outline-none transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500">{t.booking.notes}</label>
                                <textarea className="w-full bg-stone-900 border border-stone-800 p-4 focus:border-gold outline-none transition-colors h-32" placeholder={t.booking.notesPlaceholder}></textarea>
                            </div>
                            <button className="w-full bg-gold text-stone-950 p-5 text-sm uppercase tracking-[0.3em] font-bold hover:bg-primary transition-all shadow-xl shadow-gold/10">
                                {t.booking.confirm}
                            </button>
                        </form>
                    </div>
                )}
            </div>
            
            <p className="text-center mt-12 text-stone-600 text-[10px] uppercase tracking-[0.2em]">
                {t.booking.secure}
            </p>
        </div>
      </div>
    </div>
  )
}
