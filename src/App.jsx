import React from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Trophy, Layers, GraduationCap, Sparkles, ShieldCheck, Users, Clock, Briefcase, Stars, Rocket, Crown, Flame, Bolt, Target, Medal, LineChart, Code2 } from 'lucide-react'

// Small primitives (kept minimal and bespoke per section)
function Eyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 backdrop-blur px-3 py-1 text-xs text-white/80">
      <Sparkles size={14} />
      <span>{children}</span>
    </div>
  )
}

function Ribbon({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-white/90 backdrop-blur">
      <Icon size={14} className="text-white/80" />
      <span className="text-xs font-medium">{text}</span>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0b12] text-white overflow-hidden">
      {/* Nav */}
      <header className="sticky top-0 z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3">
            <a href="#" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 shadow-lg" />
              <div>
                <div className="text-sm text-white/70">AlgoUniversity</div>
                <div className="text-lg font-extrabold tracking-tight">ASCA — School of CS & AI</div>
              </div>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
              <a href="#program" className="hover:text-white transition">Program</a>
              <a href="#tracks" className="hover:text-white transition">Tracks</a>
              <a href="#faculty" className="hover:text-white transition">Faculty</a>
              <a href="#experience" className="hover:text-white transition">Experience</a>
            </nav>
            <a href="#apply" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400 text-black font-semibold px-4 py-2 shadow hover:opacity-95 transition">
              Apply for Entrance Exam
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </header>

      {/* Hero — layered with Spline + floating ribbons + gradient floor */}
      <section className="relative">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(32,8,52,0.55),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0b12]/30 to-[#0b0b12]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <Eyebrow>New 4-Year B.Tech. in CS & AI</Eyebrow>
              <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
                Build the next decade of AI. Graduate with 1.5 years of real experience.
              </h1>
              <p className="mt-5 text-white/80 text-base md:text-lg leading-relaxed max-w-2xl">
                A modern program taught by FAANG engineers and research leads. Choose elite tracks, ship production projects, and launch a portfolio that outclasses a typical fresher.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Ribbon icon={Users} text="Ex-FAANG & Research Leads" />
                <Ribbon icon={Trophy} text="HackerCup AI: 40 / Top 50" />
                <Ribbon icon={Layers} text="Tracks: GSoC • ICPC • AI" />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#apply" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400 text-black font-semibold px-5 py-3 shadow-lg hover:opacity-95 transition">
                  Apply for Exam
                  <ArrowRight size={18} />
                </a>
                <a href="#program" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10 transition">
                  Explore the Program
                </a>
              </div>
            </div>

            {/* Hero Highlight Strip (not cards) */}
            <div className="md:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-6">
                <div className="absolute -inset-px pointer-events-none bg-[conic-gradient(from_200deg,rgba(124,58,237,0.25),rgba(236,72,153,0.18),rgba(251,191,36,0.18),transparent_70%)]" />
                <div className="relative z-10 space-y-5">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="text-amber-300" />
                    <div>
                      <div className="font-semibold">Graduate Ahead</div>
                      <p className="text-white/70 text-sm">18 months of integrated internships, labs, and live deployments.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Briefcase className="text-emerald-300" />
                    <div>
                      <div className="font-semibold">Tier-1 Outcomes</div>
                      <p className="text-white/70 text-sm">AI/ML, Platform, and Product Engineering roles worldwide.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="text-sky-300" />
                    <div>
                      <div className="font-semibold">Studio Format</div>
                      <p className="text-white/70 text-sm">Critiques and mentorship from FAANG faculty every week.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Partner Ticker */}
          <div className="mt-14 relative">
            <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(ellipse_at_center,_rgba(120,119,198,0.25),transparent_60%)]" />
            <div className="overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur">
              <div className="animate-[marquee_18s_linear_infinite] whitespace-nowrap py-3 px-4 text-white/60 text-xs [--gap:2rem]">
                <span className="mx-6">Google</span>
                <span className="mx-6">Meta</span>
                <span className="mx-6">Amazon</span>
                <span className="mx-6">Apple</span>
                <span className="mx-6">Netflix</span>
                <span className="mx-6">Open Source Orgs</span>
                <span className="mx-6">Top Labs</span>
                <span className="mx-6">Startups</span>
                <span className="mx-6">Research Groups</span>
                <span className="mx-6">—</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program — Spiral path (zigzag), not cards */}
      <section id="program" className="relative py-24">
        <div className="absolute inset-0 -z-0 opacity-40 bg-[radial-gradient(ellipse_at_top,_rgba(120,119,198,0.18),transparent_50%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <Eyebrow>Program Snapshot</Eyebrow>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mt-3">A B.Tech. redesigned for the AI era</h2>
            <p className="mt-4 text-white/80 text-base md:text-lg">Hands-on from day one. Build, compete, research, and ship under guidance from FAANG mentors.</p>
          </div>

          <div className="relative">
            {/* vertical gradient spine */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-fuchsia-400/50 via-violet-400/50 to-amber-300/50" />
            <ul className="space-y-12">
              {[{
                side:'left', title:'FAANG-taught Core', icon: Crown, desc:'Systems, AI/ML, and product engineering led by engineers from Google, Meta, Amazon, Apple, and Netflix.'},
                {side:'right', title:'Specialized Tracks', icon: Layers, desc:'Pick your path: GSoC fast-track in year one, ACM ICPC training, or HackerCup AI systems.'},
                {side:'left', title:'Experience First', icon: Briefcase, desc:'Graduate with a portfolio and 18 months of real projects — not just grades.'}].map((s, i) => (
                <li key={i} className={`grid md:grid-cols-2 items-center gap-6 ${s.side==='left' ? '' : ''}`}>
                  {s.side==='left' ? (
                    <div className="md:pr-10">
                      <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 backdrop-blur px-3 py-1 text-xs text-white/80"><s.icon size={14} />Highlight</div>
                      <h3 className="mt-3 text-2xl font-semibold">{s.title}</h3>
                      <p className="mt-2 text-white/70">{s.desc}</p>
                    </div>
                  ) : <div />}
                  <div className={`relative md:pl-10 ${s.side==='left' ? 'md:col-start-2' : ''}`}>
                    <div className="relative h-40 rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur">
                      <div className="absolute inset-0 opacity-60 bg-[conic-gradient(from_90deg,rgba(124,58,237,0.15),rgba(236,72,153,0.12),rgba(251,191,36,0.12),transparent_60%)]" />
                      <div className="relative z-10 h-full w-full flex items-center justify-center">
                        {s.side==='left' ? <Rocket className="text-amber-300" /> : <LineChart className="text-fuchsia-300" />}
                      </div>
                    </div>
                  </div>
                  {s.side==='right' ? (
                    <div className="md:pl-10">
                      <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 backdrop-blur px-3 py-1 text-xs text-white/80"><s.icon size={14} />Highlight</div>
                      <h3 className="mt-3 text-2xl font-semibold">{s.title}</h3>
                      <p className="mt-2 text-white/70">{s.desc}</p>
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Tracks — Lane layout with progress rails */}
      <section id="tracks" className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <Eyebrow>Elite Tracks</Eyebrow>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mt-3">Choose a track and dominate globally</h2>
            <p className="mt-4 text-white/80 text-base md:text-lg">Our students reach the top of global rankings with focused mentorship and ruthless practice.</p>
          </div>

          <div className="space-y-8">
            {[{
              name:'Google Summer of Code', color:'from-emerald-400 to-cyan-400', icon: Code2, stats:[{k:'Goal', v:'Internship + 2L stipend'}, {k:'Timeline', v:'Year 1'}]
            },{
              name:'ACM ICPC', color:'from-sky-400 to-indigo-400', icon: Target, stats:[{k:'Outcome', v:'Global rankings'}, {k:'Cadence', v:'Daily'}]
            },{
              name:'Facebook HackerCup AI', color:'from-fuchsia-400 to-amber-400', icon: Flame, stats:[{k:'Record', v:'40 / Top 50'}, {k:'Focus', v:'AI Systems'}]
            }].map((t,i)=> (
              <div key={i} className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur">
                <div className={`absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r ${t.color} opacity-10`} />
                <div className="relative z-10 p-6 md:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${t.color}`} />
                      <h3 className="text-xl font-semibold">{t.name}</h3>
                    </div>
                    <t.icon className="text-white/70" />
                  </div>

                  {/* Progress Rail */}
                  <div className="mt-5">
                    <div className="h-2 rounded-full bg-white/10">
                      <div className={`h-2 rounded-full bg-gradient-to-r ${t.color}`} style={{ width: i===0? '78%': i===1? '64%':'86%' }} />
                    </div>
                    <div className="mt-2 flex gap-3 text-xs text-white/70">
                      {t.stats.map((s,idx)=> (
                        <span key={idx} className="inline-flex items-center gap-1 rounded-full bg-white/10 border border-white/20 px-2 py-0.5">{s.k}: <strong className="text-white ml-1">{s.v}</strong></span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty — Spotlight strip with parallax avatars */}
      <section id="faculty" className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <Eyebrow>Faculty</Eyebrow>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mt-3">Celebrities of tech. Your weekly mentors.</h2>
            <p className="mt-4 text-white/80 text-base md:text-lg">Engineers and scientists from FAANG and top labs — teaching studios, leading critiques, and mentoring projects.</p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur">
            <div className="absolute -inset-px pointer-events-none bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.25),transparent_40%)]" />
            <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
              {[{ name: 'A. Kapoor', tag: 'Ex-Google • Systems', hue:'from-violet-500 to-fuchsia-400' },
                { name: 'M. Chen', tag: 'Meta AI • NLP', hue:'from-sky-400 to-emerald-300' },
                { name: 'S. Rao', tag: 'Amazon • Platform', hue:'from-amber-400 to-pink-400' },
                { name: 'L. Garcia', tag: 'Apple • Vision', hue:'from-rose-400 to-purple-400' },
                { name: 'K. Tanaka', tag: 'Netflix • Infra', hue:'from-indigo-400 to-cyan-400' },
                { name: 'Y. Singh', tag: 'Research • RL', hue:'from-emerald-400 to-lime-300' }].map((f, i) => (
                <div key={i} className="group relative">
                  <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${f.hue} shadow-lg`} />
                  <div className="mt-4">
                    <div className="text-lg font-semibold flex items-center gap-2">{f.name} <ShieldCheck size={16} className="text-emerald-300" /></div>
                    <div className="text-white/70 text-sm">{f.tag}</div>
                  </div>
                  <div className="mt-3 text-xs text-white/60 flex items-center gap-2"><Medal size={14}/> Weekly mentorship • Studio critiques • Career design</div>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 opacity-0 group-hover:opacity-100 transition" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience — Vertical timeline beam */}
      <section id="experience" className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <Eyebrow>Graduate with Experience</Eyebrow>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mt-3">1.5 years of real industry work built-in</h2>
            <p className="mt-4 text-white/80 text-base md:text-lg">Stack co-ops, open-source milestones, and production labs. You will not graduate as a fresher.</p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-400/50 via-fuchsia-400/50 to-amber-300/50" />
            <div className="space-y-10">
              {[{ y:'Year 1', t:'Open Source + GSoC', d:'Ship PRs, earn mentorship badges, and target a funded summer with a 2L stipend.', icon: Bolt },
                { y:'Year 2', t:'Industry Studio', d:'Partner projects with production deadlines and real users.', icon: Briefcase },
                { y:'Year 3–4', t:'Co-ops & Research', d:'Extended internships or research labs culminating in a launch-ready portfolio.', icon: Stars }].map((e, i)=> (
                <div key={i} className="relative grid md:grid-cols-2 gap-6 items-center">
                  <div className="md:text-right md:pr-10">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs text-white/80">{e.y}</div>
                    <h3 className="mt-2 text-2xl font-semibold">{e.t}</h3>
                    <p className="mt-2 text-white/70">{e.d}</p>
                  </div>
                  <div className="relative md:pl-10">
                    <div className="relative h-28 rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur">
                      <div className="absolute inset-0 opacity-60 bg-[conic-gradient(from_120deg,rgba(124,58,237,0.15),rgba(236,72,153,0.12),rgba(251,191,36,0.12),transparent_60%)]" />
                      <div className="relative z-10 h-full w-full flex items-center justify-center">
                        <e.icon className="text-amber-300" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA — Curved banner */}
      <section id="apply" className="relative py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 md:p-12">
            <div className="absolute -inset-px pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.25),transparent_40%)]" />
            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <Eyebrow>Admissions Open</Eyebrow>
                <h3 className="mt-3 text-3xl md:text-4xl font-bold">Entrance Exam — Book your slot</h3>
                <p className="mt-3 text-white/80">Limited seats for the inaugural cohort. Show your potential, meet the faculty, and fast-track your offer.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#" className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400 text-black font-semibold px-5 py-3 shadow-lg hover:opacity-95 transition">
                  Apply Now
                  <ArrowRight size={18} />
                </a>
                <a href="#program" className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10 transition">
                  View Syllabus
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm">© {new Date().getFullYear()} ASCA — AlgoUniversity School of CS & AI</div>
            <div className="flex items-center gap-4 text-sm">
              <a className="hover:text-white transition" href="#program">Program</a>
              <a className="hover:text-white transition" href="#tracks">Tracks</a>
              <a className="hover:text-white transition" href="#faculty">Faculty</a>
              <a className="hover:text-white transition" href="#apply">Apply</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Local keyframes for marquee */}
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }
      `}</style>
    </div>
  )
}
