import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Logo from './Logo'
import LanguageSwitcher from './LanguageSwitcher'
import { t, type Lang } from '../i18n'

export default function Navbar({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return <header className="site-header">
    <div className="nav-shell">
      <Logo />
      <button className="mobile-menu icon-button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
        {open ? <X size={22}/> : <Menu size={22}/>}
      </button>
      <nav className={`nav-links ${open ? 'nav-open' : ''}`}>
        <NavLink onClick={close} to="/">{t(lang, 'home')}</NavLink>
        <a onClick={close} href="/#services">{t(lang, 'services')}</a>
        <a onClick={close} href="/#about">{t(lang, 'about')}</a>
        <LanguageSwitcher value={lang} onChange={setLang} compact />
        <Link className="nav-login" onClick={close} to="/login">{t(lang, 'login')}</Link>
        <Link className="button button-small" onClick={close} to="/signup">{t(lang, 'createAccount')} <ArrowUpRight size={16}/></Link>
      </nav>
    </div>
  </header>
}