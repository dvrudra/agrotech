import { Languages, ChevronDown } from 'lucide-react'
import { languages, type Lang } from '../i18n'

export default function LanguageSwitcher({ value, onChange, compact = false }: {
  value: Lang; onChange: (value: Lang) => void; compact?: boolean
}) {
  return <label className={`language-switch ${compact ? 'compact' : ''}`}>
    <Languages size={17} aria-hidden="true" />
    <span className="sr-only">Language</span>
    <select aria-label="Choose language" value={value} onChange={e => onChange(e.target.value as Lang)}>
      {languages.map(l => <option key={l.code} value={l.code}>{l.native}</option>)}
    </select>
    <ChevronDown size={14} className="language-chevron" aria-hidden="true" />
  </label>
}