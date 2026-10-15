import type { ReactNode } from 'react'
export default function FeatureCard({ icon, title, description, number }: { icon: ReactNode; title: string; description: string; number: string }) {
  return <article className="feature-card">
    <div className="feature-top"><span className="feature-icon">{icon}</span><span className="feature-number">{number}</span></div>
    <h3>{title}</h3><p>{description}</p><span className="feature-link">Explore concept <span aria-hidden="true">↗</span></span>
  </article>
}