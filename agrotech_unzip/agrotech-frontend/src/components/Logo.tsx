import { Sprout } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Logo({ light = false }: { light?: boolean }) {
  return <Link to="/" className={`brand ${light ? 'brand-light' : ''}`} aria-label="AGROTECH home">
    <span className="brand-mark"><Sprout size={25} strokeWidth={2.2} /></span>
    <span className="brand-word">AGRO<span>TECH</span><small>SMART FARMING</small></span>
  </Link>
}