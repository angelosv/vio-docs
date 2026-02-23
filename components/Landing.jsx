'use client'

import Link from 'next/link'
import { SiSwift, SiKotlin } from 'react-icons/si'
import { FiGrid, FiPackage, FiSettings, FiVideo } from 'react-icons/fi'
import { VioLogo } from './VioLogo'

export function Landing() {
  return (
    <div className="vio-landing">
      <div className="vio-landing__grid" />
      <div className="vio-landing__bg-glow vio-landing__bg-glow--1" />
      <div className="vio-landing__bg-glow vio-landing__bg-glow--2" />
      <div className="vio-landing__bg-glow vio-landing__bg-glow--3" />

      <section className="vio-landing__hero">
        <span className="vio-landing__badge">Engage • Monetize • Broadcast</span>
        <h1 className="vio-landing__title">
          <span className="vio-landing__title-accent vio-landing__title-logo">
            <VioLogo height={64} />
          </span>
        </h1>
        <p className="vio-landing__subtitle">
          Engage your viewers in new ways. Monetize your live events. Native SDKs for iOS and Android.
        </p>
        <div className="vio-landing__cta">
          <Link href="/swift/getting-started" className="vio-landing__btn vio-landing__btn--primary">
            Get started →
          </Link>
          <Link href="/swift/quick-start" className="vio-landing__btn vio-landing__btn--secondary">
            Quick start
          </Link>
        </div>
        <div className="vio-landing__meta">
          <a href="https://github.com/angelosv/vio-docs" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span>•</span>
          <span>docs.vio.live</span>
        </div>
        <div className="vio-landing__hero-preview">
          <div className="vio-landing__sandbox-inner">
            <div className="vio-landing__sandbox-bar">
              <div className="vio-landing__sandbox-dots">
                <span />
                <span />
                <span />
              </div>
              <span className="vio-landing__sandbox-label">Vio SDK Preview</span>
            </div>
            <div className="vio-landing__sandbox-content">
              <div className="vio-landing__sandbox-sidebar">
                <div className="vio-landing__sandbox-sidebar-title">COMPONENTS</div>
                <div className="vio-landing__sandbox-sidebar-item">PollCard</div>
                <div className="vio-landing__sandbox-sidebar-item">ContestCard</div>
                <div className="vio-landing__sandbox-sidebar-item vio-landing__sandbox-sidebar-item--active">ProductSpotlight</div>
                <div className="vio-landing__sandbox-sidebar-item">BroadcastStatus</div>
              </div>
              <div className="vio-landing__sandbox-preview">
                <div className="vio-landing__sandbox-preview-card">
                  <div className="vio-landing__sandbox-preview-icon" />
                  <h3>Product Spotlight</h3>
                  <p>During live event • Add to cart</p>
                </div>
              </div>
              <div className="vio-landing__sandbox-sidebar">
                <div className="vio-landing__sandbox-sidebar-title">INPUTS</div>
                <pre className="vio-landing__sandbox-code">
{`campaignId: "summer"
productId: "123"
live: true`}
                </pre>
              </div>
            </div>
          </div>
        </div>
        <div className="vio-landing__pillars">
          <div className="vio-landing__pillar">
            <strong>Engage</strong> — Polls, contests, live interactivity
          </div>
          <div className="vio-landing__pillar">
            <strong>Monetize</strong> — Shoppable live events, products, sponsors
          </div>
          <div className="vio-landing__pillar">
            <strong>Broadcast</strong> — Native integration for live event broadcasting
          </div>
        </div>

        <div className="vio-landing__sdks">
          <Link href="/swift/getting-started" className="vio-landing__sdk-card">
            <SiSwift className="vio-landing__sdk-icon" size={28} />
            <span>Swift SDK</span>
            <small>iOS, macOS, tvOS, watchOS</small>
          </Link>
          <Link href="/kotlin" className="vio-landing__sdk-card vio-landing__sdk-card--disabled">
            <SiKotlin className="vio-landing__sdk-icon" size={28} />
            <span>Kotlin SDK</span>
            <small>Android — Coming soon</small>
          </Link>
        </div>
      </section>

      <section className="vio-landing__features">
        <h2 className="vio-landing__features-title">Key Features</h2>
        <div className="vio-landing__features-grid">
          {[
            { icon: <FiVideo size={24} />, title: 'Engagement', desc: 'Polls and contests during live streams. Keep viewers hooked.' },
            { icon: <FiGrid size={24} />, title: 'Monetization', desc: 'Shoppable live events, product discovery, integrated checkout.' },
            { icon: <FiVideo size={24} />, title: 'Broadcasting', desc: 'Interactive + monetizable live events. The next era for broadcasters.' },
            { icon: <FiGrid size={24} />, title: 'Modular', desc: 'Core, UI, Engagement, LiveShow. Import only what you need.' },
            { icon: <FiSettings size={24} />, title: 'Real-time', desc: 'WebSocket events. Poll results, broadcast status, component updates.' },
            { icon: <><SiSwift size={24} /><SiKotlin size={24} /></>, title: 'Native', desc: 'Swift and Kotlin SDKs. SPM & CocoaPods.' },
          ].map((f, i) => (
            <div key={i} className="vio-landing__feature-card">
              <div className="vio-landing__feature-icon">{f.icon}</div>
              <h3 className="vio-landing__feature-title">{f.title}</h3>
              <p className="vio-landing__feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="vio-landing__cta-section">
        <p className="vio-landing__cta-social">Trusted by leading broadcasters</p>
        <h2 className="vio-landing__cta-title">Ready to get started?</h2>
        <p className="vio-landing__cta-desc">Add engagement and monetization to your live broadcasts. Get started with the Swift SDK.</p>
        <Link href="/swift/installation" className="vio-landing__btn vio-landing__btn--primary">
          Installation guide →
        </Link>
      </section>
    </div>
  )
}
