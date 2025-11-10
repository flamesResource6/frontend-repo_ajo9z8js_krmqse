import React from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Trophy, Layers, GraduationCap, Sparkles, ShieldCheck, Users, Clock, Briefcase, Stars } from 'lucide-react'

function StatPill({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-white/90 backdrop-blur">
      <Icon size={16} className="text-white/80" />
      <span className="text-xs">{label}</span>
      <span className="text-xs font-semibold text-white">{value}</span>
    </div>
  )
}

function GlassCard({ children, className = '' }) {
  return (
    <div className={`relative rounded-2xl p-6 bg-white/10 border border-white/20 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] ${className}`}>
      {children}
    </div>
  )
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 border border-white/20 backdrop-blur">
          <Sparkles size={14} />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-white/80 text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0b12] text-white overflow-hidden">
      {/* Navbar */}
      <header className="sticky top-0 z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 shadow-lg" />
              <div>
                <div className="text-sm text-white/70">AlgoUniversity</div>
                <div className="text-lg font-extrabold tracking-tight">ASCA — School of CS & AI</div>
              </div>
            </div>
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

      {/* Hero */}
      <section className="relative">
        {/* Spline canvas */}
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Gradient overlays that do not block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(32,8,52,0.6),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0b12]/30 to-[#0b0b12]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-28">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 backdrop-blur px-3 py-1 text-xs text-white/80">
                <ShieldCheck size={14} />
                <span>New 4-Year B.Tech. in CS & AI</span>
              </div>
              <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
                Build the next decade of AI. Graduate with 1.5 years of real experience.
              </h1>
              <p className="mt-5 text-white/80 text-base md:text-lg leading-relaxed">
                A modern program taught by FAANG engineers and research leads. Choose elite competitive and industry tracks, ship production projects, and launch your career far beyond a typical fresher.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <StatPill icon={Users} label="Faculty" value="Ex-FAANG & Research Leads" />
                <StatPill icon={Trophy} label="HackerCup AI" value="40/Top 50 World" />
                <StatPill icon={Layers} label="Tracks" value="GSoC • ICPC • AI" />
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

            <div className="hidden md:flex justify-center">
              <GlassCard className="w-full max-w-md">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="text-amber-300" />
                    <div>
                      <div className="font-semibold">Graduate Ahead</div>
                      <p className="text-white/70 text-sm">Finish with 18 months of industry-grade experience across internships, labs, and live deployments.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="text-emerald-300" />
                    <div>
                      <div className="font-semibold">Career Outcomes</div>
                      <p className="text-white/70 text-sm">Target Tier-1 roles in AI/ML, Platform, and Product Engineering worldwide.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="text-sky-300" />
                    <div>
                      <div className="font-semibold">Modern Format</div>
                      <p className="text-white/70 text-sm">Studios, critiques, and mentorship from FAANG faculty every week.</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Program snapshot */}
      <section id="program" className="relative py-20">
        <div className="absolute inset-0 -z-0 opacity-40 bg-[radial-gradient(ellipse_at_top,_rgba(120,119,198,0.25),transparent_50%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Program Snapshot"
            title="A B.Tech. redesigned for the AI era"
            subtitle="Hands-on from day one. Build, compete, research, and ship in public under guidance from FAANG mentors."
          />

          <div className="grid md:grid-cols-3 gap-6">
            <GlassCard>
              <div className="flex items-start gap-4">
                <Stars className="text-amber-300" />
                <div>
                  <h3 className="text-xl font-semibold">FAANG-Taught Core</h3>
                  <p className="text-white/80 mt-1">Systems, AI/ML, and product engineering taught by engineers from Google, Meta, Amazon, Apple, and Netflix.</p>
                </div>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="flex items-start gap-4">
                <Layers className="text-fuchsia-300" />
                <div>
                  <h3 className="text-xl font-semibold">Specialized Tracks</h3>
                  <p className="text-white/80 mt-1">Pick your path: GSoC fast-track in year one, ACM ICPC competitive programming, or Facebook HackerCup AI research and systems.</p>
                </div>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="flex items-start gap-4">
                <Briefcase className="text-emerald-300" />
                <div>
                  <h3 className="text-xl font-semibold">1.5 Years Experience</h3>
                  <p className="text-white/80 mt-1">Cumulative internships, co-ops, and studio projects so you graduate with a portfolio, not just grades.</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section id="tracks" className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Elite Tracks"
            title="Choose a track and dominate globally"
            subtitle="Our students consistently rank at the top of global competitions with focused mentorship and ruthless practice."
          />

          <div className="grid md:grid-cols-3 gap-6">
            <GlassCard>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Google Summer of Code</h3>
                <Trophy className="text-amber-300" />
              </div>
              <p className="text-white/80">Start in year one with a targeted path to open-source success. Mentors from past GSoC orgs guide you every week.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <StatPill icon={Sparkles} label="Goal" value="Internship + 2L stipend" />
                <StatPill icon={Clock} label="Timeline" value="Year 1" />
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">ACM ICPC Track</h3>
                <Layers className="text-sky-300" />
              </div>
              <p className="text-white/80">Algorithmic mastery with daily problem sets, onsite camps, and live contests. Train with medalists and world finalists.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <StatPill icon={Trophy} label="Outcome" value="Global rankings" />
                <StatPill icon={Clock} label="Cadence" value="Daily" />
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Facebook HackerCup AI</h3>
                <Trophy className="text-fuchsia-300" />
              </div>
              <p className="text-white/80">Advanced AI systems, optimization, and ML for competition. Our cohort dominated 40 of the top 50 world ranks.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <StatPill icon={ShieldCheck} label="Record" value="40 / Top 50" />
                <StatPill icon={Clock} label="Focus" value="AI Systems" />
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Faculty as celebrities */}
      <section id="faculty" className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Faculty"
            title="Celebrities of tech. Your weekly mentors."
            subtitle="Engineers and scientists from FAANG and top labs — teaching studios, leading critiques, and mentoring projects."
          />

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: 'A. Kapoor', tag: 'Ex-Google • Systems', color: 'from-violet-500 to-fuchsia-400' },
              { name: 'M. Chen', tag: 'Meta AI • NLP', color: 'from-sky-400 to-emerald-300' },
              { name: 'S. Rao', tag: 'Amazon • Platform', color: 'from-amber-400 to-pink-400' },
              { name: 'L. Garcia', tag: 'Apple • Vision', color: 'from-rose-400 to-purple-400' },
              { name: 'K. Tanaka', tag: 'Netflix • Infra', color: 'from-indigo-400 to-cyan-400' },
              { name: 'Y. Singh', tag: 'Research • RL', color: 'from-emerald-400 to-lime-300' },
            ].map((f, i) => (
              <GlassCard key={i} className="p-5">
                <div className="flex items-center gap-4">
                  <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${f.color} shadow-lg`} />
                  <div>
                    <div className="text-lg font-semibold">{f.name}</div>
                    <div className="text-white/70 text-sm">{f.tag}</div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-white/70">
                  <ShieldCheck size={14} />
                  <span>Weekly live mentorship • Studio critiques • Career design</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Graduate with Experience"
            title="1.5 years of real industry work built-in"
            subtitle="Stack co-ops, open-source milestones, and production labs. You won’t graduate as a fresher — you’ll graduate as an engineer."
          />

          <div className="grid md:grid-cols-3 gap-6">
            <GlassCard>
              <div className="text-sm text-white/70">Year 1</div>
              <div className="mt-2 text-xl font-semibold">Open Source + GSoC</div>
              <p className="text-white/80 mt-2">Ship PRs, earn mentorship badges, and target a funded summer with a 2L stipend.</p>
            </GlassCard>
            <GlassCard>
              <div className="text-sm text-white/70">Year 2</div>
              <div className="mt-2 text-xl font-semibold">Industry Studio</div>
              <p className="text-white/80 mt-2">Work on partner projects with production deadlines and real users.</p>
            </GlassCard>
            <GlassCard>
              <div className="text-sm text-white/70">Year 3–4</div>
              <div className="mt-2 text-xl font-semibold">Co-ops & Research</div>
              <p className="text-white/80 mt-2">Extended internships or research labs culminating in a launch-ready portfolio.</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="apply" className="relative py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 md:p-12">
            <div className="absolute -inset-px pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.25),transparent_40%)]" />
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 border border-white/20 backdrop-blur">
                  <Sparkles size={14} />
                  <span>Admissions Open</span>
                </div>
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
    </div>
  )
}
