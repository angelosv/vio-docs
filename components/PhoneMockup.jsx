'use client'

import { useEffect, useState, useRef } from 'react'
import {
  MessageCircle, BarChart3, Trophy, Hand, Video, Grid2X2,
  Send, ThumbsUp, Pause, VolumeX, ChevronDown, RotateCcw, RotateCw,
} from 'lucide-react'

const PHONE_BG = '#0C1A15'
const FEED_BG = '#081210'
const CARD_BG = '#0F211B'

const feedStream = [
  { type: 'chat', user: 'F', name: 'FanZone', color: '#257D71', time: '16s', text: 'Dette er gull!' },
  { type: 'chat', user: 'K', name: 'KickFan', color: 'rgba(102,220,235,0.8)', time: '12s', text: 'What a match! Incredible play' },
  { type: 'poll', question: 'Best player so far?', options: [{ label: 'A. Diallo', pct: 42 }, { label: 'Bruno Fernandes', pct: 31 }, { label: 'B. Mbeumo', pct: 27 }] },
  { type: 'chat', user: 'L', name: 'LigaMaster', color: 'rgba(37,125,113,0.7)', time: '8s', text: 'Best game this season!' },
  { type: 'chat', user: 'M', name: 'MatchDay', color: 'rgba(0,255,170,0.4)', time: '5s', text: 'Nobody stopping them today' },
  { type: 'chat', user: 'R', name: 'RealFan99', color: 'rgba(102,220,235,0.6)', time: '3s', text: '5-1 is insane!!' },
  { type: 'poll', question: 'Goal of the match?', options: [{ label: '1st - Volley', pct: 55 }, { label: '3rd - Free kick', pct: 30 }, { label: '5th - Counter', pct: 15 }] },
  { type: 'chat', user: 'A', name: 'ArenaLive', color: '#257D71', time: '2s', text: 'The crowd is electric right now!' },
  { type: 'chat', user: 'T', name: 'TikiTaka', color: 'rgba(102,220,235,0.7)', time: '1s', text: 'Pure dominance. What a show.' },
  { type: 'poll', question: 'Final score prediction?', options: [{ label: '5-1', pct: 48 }, { label: '6-1', pct: 35 }, { label: '5-2', pct: 17 }] },
  { type: 'chat', user: 'P', name: 'PitchSide', color: 'rgba(0,255,170,0.5)', time: 'now', text: 'Substitution incoming...' },
  { type: 'chat', user: 'G', name: 'GoalAlert', color: 'rgba(37,125,113,0.8)', time: 'now', text: 'Corner kick! Could be another!' },
]

function PhoneShell({ children, className = '' }) {
  return (
    <div className={`vio-phone-shell ${className}`}>
      <div className="vio-phone-frame" style={{ background: PHONE_BG }}>
        <div className="vio-phone-status">
          <span className="vio-phone-time">9:41</span>
          <div className="vio-phone-notch" />
          <div className="vio-phone-signal" />
        </div>
        <div className="vio-phone-content">{children}</div>
        <div className="vio-phone-home" style={{ background: PHONE_BG }} />
      </div>
    </div>
  )
}

function AnimatedTimeline() {
  const [progress, setProgress] = useState(82)
  useEffect(() => {
    const interval = setInterval(() => setProgress((p) => (p >= 95 ? 82 : p + 0.15)), 300)
    return () => clearInterval(interval)
  }, [])
  const events = [8, 15, 22, 30, 35, 42, 55, 60, 68, 73, 80]
  return (
    <div className="vio-timeline" style={{ background: PHONE_BG }}>
      <div className="vio-timeline-track">
        <div className="vio-timeline-bg" />
        <div className="vio-timeline-progress" style={{ width: `${progress}%` }} />
        {events.map((pos, i) => (
          <div key={i} className="vio-timeline-dot" style={{ left: `${pos}%` }} />
        ))}
        <div className="vio-timeline-head" style={{ left: `${progress}%`, borderColor: PHONE_BG }} />
      </div>
      <div className="vio-timeline-labels">
        <span>{"-15'"}</span>
        <span>{"0'"}</span>
        <span>{"81'"}</span>
        <span className="vio-timeline-live">LIVE</span>
        <span>{"90'"}</span>
        <span>{"105'"}</span>
      </div>
    </div>
  )
}

function InlinePoll({ question, options, animate }) {
  return (
    <div className="vio-inline-poll" style={{ background: CARD_BG }}>
      <div className="vio-inline-poll-header">
        <div className="vio-inline-poll-icon">
          <BarChart3 size={8} />
        </div>
        <span className="vio-inline-poll-badge">Poll</span>
        <span className="vio-inline-poll-live">Live</span>
      </div>
      <p className="vio-inline-poll-question">{question}</p>
      <div className="vio-inline-poll-options">
        {options.map((opt, i) => (
          <div key={opt.label} className={`vio-inline-poll-opt ${i === 0 ? 'vio-inline-poll-opt--leading' : ''}`}>
            <div className="vio-inline-poll-opt-bar" style={{ width: animate ? `${opt.pct}%` : '0%' }} />
            <div className="vio-inline-poll-opt-content">
              <span>{opt.label}</span>
              <span className={i === 0 ? 'vio-inline-poll-opt-pct' : ''} style={{ opacity: animate ? 1 : 0 }}>{opt.pct}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MainPhone() {
  const [visibleCount, setVisibleCount] = useState(2)
  const [pollsAnimated, setPollsAnimated] = useState(new Set())
  const feedRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((c) => (c >= feedStream.length ? 2 : c + 1))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      const newAnimated = new Set(pollsAnimated)
      feedStream.slice(0, visibleCount).forEach((item, i) => {
        if (item.type === 'poll') newAnimated.add(i)
      })
      setPollsAnimated(newAnimated)
    }, 400)
    return () => clearTimeout(timer)
  }, [visibleCount])

  useEffect(() => {
    if (feedRef.current) feedRef.current.scrollTo({ top: feedRef.current.scrollHeight, behavior: 'smooth' })
  }, [visibleCount])

  const tabs = [
    { icon: Grid2X2, label: 'All', active: true },
    { icon: MessageCircle, label: 'Chat' },
    { icon: Video, label: 'Highlights' },
    { icon: BarChart3, label: 'Stats' },
    { icon: Hand, label: 'Interactive' },
    { icon: Trophy, label: 'Scores' },
  ]

  return (
    <PhoneShell>
      <div className="vio-phone-scoreboard" style={{ background: PHONE_BG }}>
        <div className="vio-phone-teams">
          <div className="vio-phone-team">
            <div className="vio-phone-team-badge vio-phone-team-fcb">FCB</div>
            <span>FC Barcelona</span>
          </div>
          <div className="vio-phone-score">
            <div className="vio-phone-score-row">
              <span>5</span>
              <span className="vio-phone-score-dot" />
              <span>1</span>
            </div>
            <span className="vio-phone-score-time">{"81'"}</span>
          </div>
          <div className="vio-phone-team">
            <div className="vio-phone-team-badge vio-phone-team-psg">PSG</div>
            <span>Paris SG</span>
          </div>
        </div>
        <div className="vio-phone-match-info">Champions League · Camp Nou</div>
      </div>

      <div className="vio-phone-tabs" style={{ background: PHONE_BG }}>
        {tabs.map((tab) => (
          <button key={tab.label} className={`vio-phone-tab ${tab.active ? 'vio-phone-tab--active' : ''}`}>
            <tab.icon size={8} />
            {tab.label}
          </button>
        ))}
      </div>

      <div ref={feedRef} className="vio-phone-feed" style={{ background: FEED_BG }}>
        <div className="vio-phone-feed-highlight">Mbeumo dobler ledelsen! Fantastisk lagarbeid!</div>
        {feedStream.slice(0, visibleCount).map((item, i) => (
          <div key={i} className="vio-phone-feed-item vio-animate-fade-in-up">
            {item.type === 'chat' ? (
              <div className="vio-phone-chat">
                <div className="vio-phone-chat-avatar" style={{ background: item.color }}>{item.user}</div>
                <div>
                  <div className="vio-phone-chat-meta">
                    <span className="vio-phone-chat-name">{item.name}</span>
                    <span className="vio-phone-chat-time">{item.time}</span>
                  </div>
                  <p className="vio-phone-chat-text">{item.text}</p>
                </div>
              </div>
            ) : (
              <InlinePoll question={item.question} options={item.options} animate={pollsAnimated.has(i)} />
            )}
          </div>
        ))}
      </div>

      <div className="vio-phone-chat-input" style={{ background: PHONE_BG }}>
        <div className="vio-phone-chat-avatar vio-phone-chat-avatar-sm" style={{ background: '#257D71' }}>A</div>
        <div className="vio-phone-chat-placeholder">Send en melding...</div>
        <ThumbsUp size={8} style={{ color: 'rgba(0,255,170,0.4)' }} />
        <Send size={8} style={{ color: 'rgba(0,255,170,0.4)' }} />
      </div>

      <AnimatedTimeline />
      <div className="vio-phone-controls" style={{ background: PHONE_BG }}>
        <div className="vio-phone-control-time">
          {"81'"}
          <ChevronDown size={6} style={{ opacity: 0.4, marginLeft: 2 }} />
        </div>
        <div className="vio-phone-control-center">
          <RotateCcw size={8} />
          <div className="vio-phone-control-play"><Pause size={8} /></div>
          <RotateCw size={8} />
        </div>
        <VolumeX size={8} />
      </div>
    </PhoneShell>
  )
}

function RouletteWheel({ spinning }) {
  const segments = [
    { label: '50% Off', color: '#00FFAA' },
    { label: 'Free Ship', color: '#257D71' },
    { label: '10 Coins', color: '#66DCEB' },
    { label: 'Mystery', color: '#00FFAA' },
    { label: '2x Points', color: '#257D71' },
    { label: 'VIP Pass', color: '#66DCEB' },
  ]
  const angle = 360 / segments.length
  const round = (n) => Math.round(n * 100) / 100

  return (
    <div className="vio-roulette-wrap">
      <svg
        viewBox="0 0 200 200"
        className={`vio-roulette-svg ${spinning ? 'vio-roulette-spinning' : ''}`}
      >
        {segments.map((seg, i) => {
          const startAngle = i * angle - 90
          const endAngle = startAngle + angle
          const startRad = (startAngle * Math.PI) / 180
          const endRad = (endAngle * Math.PI) / 180
          const x1 = round(100 + 95 * Math.cos(startRad))
          const y1 = round(100 + 95 * Math.sin(startRad))
          const x2 = round(100 + 95 * Math.cos(endRad))
          const y2 = round(100 + 95 * Math.sin(endRad))
          const midAngle = ((startAngle + endAngle) / 2) * (Math.PI / 180)
          const tx = round(100 + 62 * Math.cos(midAngle))
          const ty = round(100 + 62 * Math.sin(midAngle))
          const labelRot = (startAngle + endAngle) / 2
          return (
            <g key={i}>
              <path
                d={`M100,100 L${x1},${y1} A95,95 0 0,1 ${x2},${y2} Z`}
                fill={seg.color}
                opacity={i % 2 === 0 ? 0.9 : 0.6}
                stroke="#0C1A15"
                strokeWidth="1.5"
              />
              <text x={tx} y={ty} textAnchor="middle" dominantBaseline="middle" transform={`rotate(${labelRot},${tx},${ty})`} fill="#0C1A15" fontSize="9" fontWeight="700">{seg.label}</text>
            </g>
          )
        })}
        <circle cx="100" cy="100" r="14" fill="#0C1A15" stroke="#00FFAA" strokeWidth="2" />
        <text x="100" y="101" textAnchor="middle" dominantBaseline="middle" fill="#00FFAA" fontSize="7" fontWeight="700">SPIN</text>
      </svg>
      <div className="vio-roulette-pointer" />
    </div>
  )
}

function ContestPhone() {
  const [phase, setPhase] = useState('idle')
  useEffect(() => {
    const loop = () => {
      setPhase('spinning')
      setTimeout(() => {
        setPhase('won')
        setTimeout(() => {
          setPhase('idle')
          setTimeout(loop, 2000)
        }, 3000)
      }, 3000)
    }
    const t = setTimeout(loop, 2000)
    return () => clearTimeout(t)
  }, [])

  return (
    <PhoneShell>
      <div className="vio-contest-content" style={{ background: PHONE_BG }}>
        <div className="vio-contest-header">
          <BarChart3 size={12} style={{ color: '#00FFAA' }} />
          <span className="vio-contest-title">Contest</span>
        </div>
        <RouletteWheel spinning={phase === 'spinning'} />
        <p className="vio-contest-status">
          {phase === 'idle' && 'Tap to spin!'}
          {phase === 'spinning' && 'Spinning...'}
          {phase === 'won' && 'You won!'}
        </p>
      </div>
    </PhoneShell>
  )
}

export function PhoneMockup() {
  return (
    <div className="vio-landing__phones">
      <div className="vio-landing__phone vio-landing__phone--left">
        <MainPhone />
      </div>
      <div className="vio-landing__phone vio-landing__phone--right">
        <ContestPhone />
      </div>
    </div>
  )
}
