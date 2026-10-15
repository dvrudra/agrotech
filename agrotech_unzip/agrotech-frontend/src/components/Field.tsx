import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

type Props = { label: string; name: string; type?: string; value: string; onChange: (v: string) => void;
  error?: string; placeholder?: string; optional?: boolean; autoComplete?: string }
export function Field({ label, name, type = 'text', value, onChange, error, placeholder, optional, autoComplete }: Props) {
  const [visible, setVisible] = useState(false)
  const isPassword = type === 'password'
  return <div className="field-wrap">
    <label htmlFor={name}>{label}{optional && <span className="optional-label"> · Optional</span>}</label>
    <div className={`input-shell ${error ? 'input-error' : ''}`}>
      <input id={name} name={name} type={isPassword ? (visible ? 'text' : 'password') : type}
        value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        autoComplete={autoComplete} aria-invalid={!!error} aria-describedby={error ? `${name}-error` : undefined}/>
      {isPassword && <button type="button" className="password-toggle" onClick={() => setVisible(!visible)}
        aria-label={visible ? 'Hide password' : 'Show password'}>{visible ? <EyeOff size={18}/> : <Eye size={18}/>}</button>}
    </div>
    {error && <p className="field-error" id={`${name}-error`}>{error}</p>}
  </div>
}