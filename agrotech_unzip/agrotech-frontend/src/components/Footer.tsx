import { Link } from 'react-router-dom'
import { ArrowUpRight, Leaf } from 'lucide-react'
import Logo from './Logo'
import LanguageSwitcher from './LanguageSwitcher'
import { t, type Lang } from '../i18n'

export default function Footer({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return <footer className="footer">
    <div className="footer-main">
      <div className="footer-brand"><Logo light/><p>{t(lang, 'footerText')}</p><span className="footer-tag"><Leaf size={14}/> Farmer-first by design</span></div>
      <div><h4>{t(lang, 'quickLinks')}</h4><Link to="/">{t(lang, 'home')}</Link><a href="/#services">{t(lang, 'services')}</a><a href="/#about">{t(lang, 'about')}</a></div>
      <div><h4>Get started</h4><Link to="/login">{t(lang, 'login')}</Link><Link to="/signup">{t(lang, 'createAccount')} <ArrowUpRight size={13}/></Link><Link to="/forgot-password">{t(lang, 'forgot')}</Link></div>
      <div><h4>{t(lang, 'language')}</h4><LanguageSwitcher value={lang} onChange={setLang}/><p className="footer-note">Built to make farming information easier to access.</p></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} AGROTECH</span><span>{t(lang, 'prototype')} · No live services connected</span></div>
  </footer>
}