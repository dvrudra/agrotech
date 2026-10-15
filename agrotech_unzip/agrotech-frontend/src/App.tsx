import { useEffect, useState, type FormEvent, type ReactNode } from 'react'
import { Routes, Route, Navigate, Link, useNavigate, useLocation } from 'react-router-dom'
import { ArrowDownRight, ArrowRight, ArrowUpRight, CloudSun, Sprout, IndianRupee, Landmark, ScanSearch, FlaskConical, CalendarDays, Store, MessageCircle, Languages, ShieldCheck, CircleCheck, Leaf, Tractor, Wheat, Sun, MapPin, Check, HeartHandshake } from 'lucide-react'
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LanguageSwitcher from './components/LanguageSwitcher'
import { Field } from './components/Field'
import FeatureCard from './components/FeatureCard'
import { languages, t, type Lang } from './i18n'

const initialLang = (): Lang => {
  const saved = localStorage.getItem('agrotech-language')
  return languages.some(l => l.code === saved) ? saved as Lang : 'en'
}
function App() {
  const [lang, setLangState] = useState<Lang>(initialLang)
  const [languageChosen, setLanguageChosen] = useState(() => localStorage.getItem('agrotech-language') !== null)
  const setLang = (next: Lang) => { setLangState(next); localStorage.setItem('agrotech-language', next); setLanguageChosen(true) }
  const location = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [location.pathname])
  return <Routes>
    <Route path="/language" element={<LanguageSelection lang={lang} setLang={setLang} onContinue={() => { setLanguageChosen(true); localStorage.setItem('agrotech-language', lang); window.location.href = '/' }} />} />
    <Route path="/" element={languageChosen
      ? <><Navbar lang={lang} setLang={setLang}/><Home lang={lang} setLang={setLang}/><Footer lang={lang} setLang={setLang}/></>
      : <LanguageSelection lang={lang} setLang={setLang} onContinue={() => { setLanguageChosen(true); localStorage.setItem('agrotech-language', lang) }} />} />
    <Route path="/login" element={<AuthLayout lang={lang} setLang={setLang}><Login lang={lang}/></AuthLayout>} />
    <Route path="/signup" element={<AuthLayout lang={lang} setLang={setLang}><SignUp lang={lang}/></AuthLayout>} />
    <Route path="/forgot-password" element={<AuthLayout lang={lang} setLang={setLang}><ForgotPassword lang={lang}/></AuthLayout>} />
    <Route path="/about" element={<><Navbar lang={lang} setLang={setLang}/><AboutPage lang={lang}/><Footer lang={lang} setLang={setLang}/></>} />
    <Route path="*" element={<NotFound lang={lang}/>} />
  </Routes>
}

function LanguageSelection({ lang, setLang, onContinue }: { lang: Lang; setLang: (l: Lang) => void; onContinue: () => void }) {
  return <main className="language-page">
    <div className="language-visual"><div className="language-visual-top"><Logo light/><span className="visual-tag"><Sprout size={15}/> FARMER-FIRST TECHNOLOGY</span></div>
      <div className="language-visual-copy"><span className="eyebrow light-eyebrow">GROW WITH CONFIDENCE</span><h1>Good things grow when knowledge is shared.</h1><p>Useful farming information, made easier to reach — for every farmer, in every language.</p>
      <div className="field-art"><div className="sun-disc"/><div className="hill hill-one"/><div className="hill hill-two"/><div className="crop-row">{Array.from({length:9},(_,i)=><span key={i}><Sprout size={28}/></span>)}</div></div>
      <div className="visual-caption"><span><span className="caption-dot"/> Built around Indian farmers</span><span>01 / 08 languages</span></div></div>
    </div>
    <section className="language-panel"><div className="language-panel-head"><Logo/><span className="step-pill">WELCOME <span>01</span></span></div>
      <div className="language-content"><span className="eyebrow">YOUR LANGUAGE, YOUR CHOICE</span><h2>{t(lang,'welcome')}</h2><p className="native-welcome">AGROTECH में आपका स्वागत है</p><p className="language-subtitle">{t(lang,'chooseHelp')}</p>
      <h3>{t(lang,'chooseLanguage')}</h3><div className="language-grid">
        {languages.map(l=><button key={l.code} className={`language-option ${lang===l.code?'selected':''}`} onClick={()=>setLang(l.code)} aria-pressed={lang===l.code}>
          <span className="language-native">{l.native}</span><span className="language-english">{l.label}</span><span className="language-check">{lang===l.code&&<Check size={14}/>}</span>
        </button>)}
      </div><button className="button button-wide" onClick={onContinue}>{t(lang,'continue')} <ArrowRight size={18}/></button>
      <p className="language-change"><ShieldCheck size={15}/>{t(lang,'changeAnytime')}</p></div>
      <div className="language-panel-bottom"><span>© 2026 AGROTECH</span><span>SMART FARMING · BETTER FUTURE</span></div>
    </section>
  </main>
}

const features = [
  {key:'multilingual' as const, icon:<Languages/>, n:'01'},
  {key:'market' as const, icon:<IndianRupee/>, n:'02'},
  {key:'weather' as const, icon:<CloudSun/>, n:'03'},
  {key:'schemes' as const, icon:<Landmark/>, n:'04'},
  {key:'disease' as const, icon:<ScanSearch/>, n:'05'},
  {key:'pesticide' as const, icon:<FlaskConical/>, n:'06'},
  {key:'experts' as const, icon:<HeartHandshake/>, n:'07'},
  {key:'calendar' as const, icon:<CalendarDays/>, n:'08'},
  {key:'vendors' as const, icon:<Store/>, n:'09'},
  {key:'whatsapp' as const, icon:<MessageCircle/>, n:'10'},
]
function Home({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return <main>
    <section className="hero-section"><div className="hero-container">
      <div className="hero-copy"><span className="eyebrow"><span className="eyebrow-dot"/> {t(lang,'heroEyebrow')}</span>
        <h1>{t(lang,'heroTitle')}</h1><p className="hero-description">{t(lang,'heroText')}</p>
        <div className="hero-actions"><Link to="/signup" className="button">{t(lang,'getStarted')} <ArrowUpRight size={18}/></Link><a href="#services" className="text-link">{t(lang,'exploreServices')} <ArrowDownRight size={17}/></a></div>
        <div className="hero-proof"><div className="proof-icon"><Sprout size={19}/></div><div><strong>{t(lang,'farmerFirst')}</strong><span>{t(lang,'trustedLine')}</span></div></div>
      </div>
      <div className="hero-art-wrap"><div className="hero-image"><img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85" alt="Green agricultural fields in the countryside"/><div className="image-shade"/></div>
        <div className="floating-card price-float"><span className="float-icon"><IndianRupee size={17}/></span><div><small>MARKET INFORMATION</small><strong>Know before you sell</strong><span>Price updates · Concept feature</span></div><ArrowUpRight size={16}/></div>
        <div className="floating-card weather-float"><span className="weather-symbol"><Sun size={23}/></span><div><strong>Plan with confidence</strong><small>Weather-aware farming</small></div></div>
        <div className="image-stamp"><Sprout size={20}/><span>GROW<br/>TOGETHER</span></div>
      </div>
    </div><div className="hero-bottomline"><span><span className="caption-dot"/> {t(lang,'aboutPill')}</span><a href="#services">DISCOVER THE PLATFORM <ArrowDownRight size={14}/></a></div></section>
    <section className="trust-strip"><div><span className="trust-icon"><Languages/></span><span><strong>8 languages</strong><small>Designed for local access</small></span></div><div><span className="trust-icon"><Wheat/></span><span><strong>10 service concepts</strong><small>Connected farmer support</small></span></div><div><span className="trust-icon"><Leaf/></span><span><strong>SDG 15 aligned</strong><small>Life on Land</small></span></div></section>
    <section className="section features-section" id="services"><div className="section-heading"><div><span className="eyebrow">THE AGROTECH APPROACH</span><h2>{t(lang,'featuresTitle')}</h2></div><p>{t(lang,'featuresText')}</p></div>
      <div className="feature-grid">{features.map(f=><FeatureCard key={f.key} number={f.n} icon={f.icon} title={t(lang,f.key)} description={t(lang,`${f.key}Desc` as never)}/>)}</div>
      <p className="prototype-note"><ShieldCheck size={16}/> These are frontend concepts. Live prices, alerts, disease analysis and messaging are not connected yet.</p>
    </section>
    <section className="about-band" id="about"><div className="about-image"><img src="https://images.unsplash.com/photo-1499529112087-3cb3b73fl?auto=format&fit=crop&w=1000&q=80" onError={e=>{(e.currentTarget as HTMLImageElement).src='https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80'}} alt="Sunlight across farmland"/><div className="about-image-label"><Sprout size={19}/><span>AGROTECH<br/><small>GROWING WITH YOU</small></span></div></div>
      <div className="about-copy"><span className="eyebrow">WHY AGROTECH</span><h2>{t(lang,'aboutTitle')}</h2><p>{t(lang,'aboutText')}</p><div className="about-points"><div><CircleCheck/><span>Simple, accessible information</span></div><div><CircleCheck/><span>Services designed around farmers</span></div><div><CircleCheck/><span>One place to explore multiple needs</span></div></div><Link className="text-link" to="/about">More about our vision <ArrowUpRight size={16}/></Link></div>
    </section>
    <section className="steps-section"><div className="section-heading"><div><span className="eyebrow">A CLEARER WAY FORWARD</span><h2>{t(lang,'stepsTitle')}</h2></div><p>From a question to a useful next step, the experience is designed to stay approachable.</p></div><div className="steps-grid">
      {[{n:'01',icon:<MessageCircle/>,title:t(lang,'step1'),desc:t(lang,'step1d')},{n:'02',icon:<Languages/>,title:t(lang,'step2'),desc:t(lang,'step2d')},{n:'03',icon:<Sprout/>,title:t(lang,'step3'),desc:t(lang,'step3d')}].map(s=><article className="step-card" key={s.n}><span className="step-num">{s.n}</span><span className="step-icon">{s.icon}</span><h3>{s.title}</h3><p>{s.desc}</p></article>)}</div></section>
    <section className="sdg-band"><div className="sdg-number">15</div><div className="sdg-copy"><span className="eyebrow light-eyebrow">SUSTAINABLE DEVELOPMENT GOALS</span><h2>{t(lang,'sdgTitle')}</h2><p>{t(lang,'sdgText')}</p></div><div className="sdg-symbol"><Leaf size={46}/><span>LIFE<br/>ON LAND</span></div></section>
    <section className="cta-section"><div className="cta-decoration"><Sprout size={68}/></div><div><span className="eyebrow">START WITH AGROTECH</span><h2>{t(lang,'ctaTitle')}</h2><p>{t(lang,'ctaText')}</p></div><Link to="/signup" className="button">{t(lang,'getStarted')} <ArrowUpRight size={18}/></Link></section>
  </main>
}

function AboutPage({ lang }: { lang: Lang }) {
  return <main className="simple-page"><div className="simple-hero"><span className="eyebrow">ABOUT AGROTECH</span><h1>{t(lang,'aboutTitle')}</h1><p>{t(lang,'aboutText')}</p><span className="about-pill"><Leaf size={16}/>{t(lang,'aboutPill')}</span></div>
    <div className="simple-content"><h2>Our project focus</h2><p>As outlined in the project presentation, AGROTECH aims to bring multiple farmer-centric services into one multilingual platform. The concept includes market and weather information, government schemes, crop-disease guidance, pesticide information, experts, vendors, a Kisan Calendar and WhatsApp Bot support.</p><div className="about-stat-grid"><div><strong>08</strong><span>Languages planned</span></div><div><strong>10</strong><span>Service concepts</span></div><div><strong>SDG 15</strong><span>Life on Land</span></div></div><h2>Honest prototype status</h2><p>This website is a frontend demonstration. It does not yet connect to live APIs, a database, real authentication, market feeds, weather alerts or crop image analysis.</p><Link className="button" to="/signup">Explore the prototype <ArrowRight size={18}/></Link></div></main>
}

function AuthLayout({ lang, setLang, children }: { lang: Lang; setLang: (l: Lang) => void; children: ReactNode }) {
  return <main className="auth-page"><div className="auth-top"><Logo/><div className="auth-top-right"><span>YOUR FARM, YOUR FUTURE</span><LanguageSwitcher value={lang} onChange={setLang} compact/></div></div>
    <div className="auth-layout"><aside className="auth-aside"><div className="auth-aside-photo"><img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1100&q=85" alt="Green fields in the countryside"/></div><div className="auth-aside-overlay"><span className="eyebrow light-eyebrow">AGROTECH · FARMER FIRST</span><h1>Knowledge grows.<br/>So does opportunity.</h1><p>Bringing useful agricultural information closer to the people who grow our future.</p><div className="aside-badges"><span><Leaf size={15}/> Farmer-first</span><span><Languages size={15}/> Multilingual</span></div></div><div className="auth-aside-bottom"><span>SMART FARMING, BETTER FUTURE</span><span>01 — 08 LANGUAGES</span></div></aside>
      <section className="auth-main">{children}<p className="auth-disclaimer"><ShieldCheck size={15}/>{t(lang,'demoNotice')}</p></section></div>
    <div className="auth-footer"><span>© 2026 AGROTECH</span><Link to="/">Back to website <ArrowUpRight size={13}/></Link></div></main>
}
function Login({ lang }: { lang: Lang }) {
  const [identifier,setIdentifier]=useState(''),[password,setPassword]=useState(''),[remember,setRemember]=useState(false),[errors,setErrors]=useState<Record<string,string>>({}),[notice,setNotice]=useState('')
  const submit=(e:FormEvent)=>{e.preventDefault();const x:Record<string,string>={};if(!identifier.trim())x.identifier=t(lang,'required');else if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier)||/^[0-9+\-\s()]{10,}$/.test(identifier)))x.identifier=t(lang,'invalidContact');if(!password)x.password=t(lang,'required');setErrors(x);setNotice(Object.keys(x).length?'':t(lang,'demoLogin'))}
  return <div className="auth-card"><span className="eyebrow">YOUR AGROTECH SPACE</span><h2>{t(lang,'loginTitle')}</h2><p className="auth-intro">{t(lang,'loginText')}</p>
    <form onSubmit={submit} noValidate><Field label={t(lang,'identifier')} name="identifier" value={identifier} onChange={setIdentifier} error={errors.identifier} placeholder="98765 43210 / name@email.com" autoComplete="username"/><Field label={t(lang,'password')} name="login-password" type="password" value={password} onChange={setPassword} error={errors.password} placeholder="••••••••" autoComplete="current-password"/>
      <div className="form-between"><label className="check-label"><input type="checkbox" checked={remember} onChange={e=>setRemember(e.target.checked)}/><span>{t(lang,'remember')}</span></label><Link to="/forgot-password">{t(lang,'forgot')}</Link></div>
      <button className="button button-wide" type="submit">{t(lang,'login')} <ArrowRight size={18}/></button>
    </form>{notice&&<p className="form-notice"><ShieldCheck size={17}/>{notice}</p>}<p className="auth-switch">{t(lang,'noAccount')} <Link to="/signup">{t(lang,'createAccount')}</Link></p>
  </div>
}
function SignUp({ lang }: { lang: Lang }) {
  const [form,setForm]=useState({name:'',mobile:'',email:'',password:'',confirm:'',language:lang,state:'',district:'',crop:'',consent:false})
  const [errors,setErrors]=useState<Record<string,string>>({}),[notice,setNotice]=useState('')
  const set=(key:string,value:string|boolean)=>setForm(p=>({...p,[key]:value}))
  const submit=(e:FormEvent)=>{e.preventDefault();const x:Record<string,string>={};if(!form.name.trim())x.name=t(lang,'required');if(!/^\d{10}$/.test(form.mobile.replace(/\D/g,'')))x.mobile=t(lang,'invalidContact');if(form.email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))x.email=t(lang,'invalidContact');if(form.password.length<8)x.password=t(lang,'passwordShort');if(form.confirm!==form.password)x.confirm=t(lang,'passwordMismatch');if(!form.state.trim())x.state=t(lang,'required');if(!form.district.trim())x.district=t(lang,'required');if(!form.consent)x.consent=t(lang,'consentRequired');setErrors(x);setNotice(Object.keys(x).length?'':t(lang,'demoSignup'))}
  return <div className="auth-card signup-card"><span className="eyebrow">LET'S GROW TOGETHER</span><h2>{t(lang,'signupTitle')}</h2><p className="auth-intro">{t(lang,'signupText')}</p>
    <form onSubmit={submit} noValidate><div className="form-grid"><Field label={t(lang,'fullName')} name="name" value={form.name} onChange={v=>set('name',v)} error={errors.name} placeholder="Your full name" autoComplete="name"/><Field label={t(lang,'mobile')} name="mobile" value={form.mobile} onChange={v=>set('mobile',v)} error={errors.mobile} placeholder="10-digit mobile number" autoComplete="tel"/><Field label={t(lang,'email')} name="email" type="email" value={form.email} onChange={v=>set('email',v)} error={errors.email} placeholder="you@example.com" optional autoComplete="email"/><div className="field-wrap"><label htmlFor="preferred-language">{t(lang,'preferredLanguage')}</label><select className="select-input" id="preferred-language" value={form.language} onChange={e=>set('language',e.target.value)}>{languages.map(l=><option key={l.code} value={l.code}>{l.native} — {l.label}</option>)}</select></div><Field label={t(lang,'password')} name="signup-password" type="password" value={form.password} onChange={v=>set('password',v)} error={errors.password} placeholder={t(lang,'passwordHint')} autoComplete="new-password"/><Field label={t(lang,'confirmPassword')} name="confirm" type="password" value={form.confirm} onChange={v=>set('confirm',v)} error={errors.confirm} placeholder={t(lang,'confirmPassword')} autoComplete="new-password"/><Field label={t(lang,'state')} name="state" value={form.state} onChange={v=>set('state',v)} error={errors.state} placeholder={t(lang,'statePlaceholder')}/><Field label={t(lang,'district')} name="district" value={form.district} onChange={v=>set('district',v)} error={errors.district} placeholder={t(lang,'districtPlaceholder')}/><Field label={t(lang,'crop')} name="crop" value={form.crop} onChange={v=>set('crop',v)} placeholder={t(lang,'cropPlaceholder')} optional/></div>
      <label className={`consent-row ${errors.consent?'consent-error':''}`}><input type="checkbox" checked={form.consent} onChange={e=>set('consent',e.target.checked)}/><span>{t(lang,'consent')}</span></label>{errors.consent&&<p className="field-error">{errors.consent}</p>}
      <button className="button button-wide" type="submit">{t(lang,'createAccount')} <ArrowRight size={18}/></button>
    </form>{notice&&<p className="form-notice"><ShieldCheck size={17}/>{notice}</p>}<p className="auth-switch">{t(lang,'yesAccount')} <Link to="/login">{t(lang,'login')}</Link></p>
  </div>
}
function ForgotPassword({ lang }: { lang: Lang }) {
  const [identifier,setIdentifier]=useState(''),[error,setError]=useState(''),[notice,setNotice]=useState('')
  const submit=(e:FormEvent)=>{e.preventDefault();if(!identifier.trim())setError(t(lang,'required'));else if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier)||/^[0-9+\-\s()]{10,}$/.test(identifier)))setError(t(lang,'invalidContact'));else{setError('');setNotice(t(lang,'demoReset'))}}
  return <div className="auth-card forgot-card"><span className="forgot-icon"><ShieldCheck size={24}/></span><span className="eyebrow">ACCOUNT SUPPORT</span><h2>{t(lang,'forgotTitle')}</h2><p className="auth-intro">{t(lang,'forgotText')}</p><form onSubmit={submit} noValidate><Field label={t(lang,'identifier')} name="reset-identifier" value={identifier} onChange={setIdentifier} error={error} placeholder="Mobile number or email"/><button className="button button-wide" type="submit">{t(lang,'continue')} <ArrowRight size={18}/></button></form>{notice&&<p className="form-notice"><ShieldCheck size={17}/>{notice}</p>}<Link className="back-link" to="/login">← {t(lang,'backLogin')}</Link></div>
}
function NotFound({ lang }: { lang: Lang }) { return <main className="not-found"><Logo/><span className="not-found-code">404</span><h1>{t(lang,'notFound')}</h1><p>The page may have moved or the link may be incorrect.</p><Link to="/" className="button">{t(lang,'goHome')} <ArrowRight size={18}/></Link></main> }
export default App