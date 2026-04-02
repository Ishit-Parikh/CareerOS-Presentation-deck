import { motion } from 'framer-motion'
import {
  FileSearch,
  Target,
  BarChart3,
  Code2,
  Database,
  Shield,
  Cpu,
  Globe,
  Layers,
  Lightbulb,
  TrendingUp,
  Briefcase,
  Sparkles,
  CreditCard,
  MonitorPlay,
  BadgeCheck,
  Zap,
  ArrowRight,
} from 'lucide-react'
import type { SlideData } from '../data/slides'
import { SectionHeader, CardBox } from './ui/BoxComponents'

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' as const },
  },
}

interface SlideContentProps {
  slide: SlideData
}

export function SlideContent({ slide }: SlideContentProps) {
  switch (slide.type) {
    case 'title':
      return <TitleSlide slide={slide} />
    case 'product':
      return <ProductSlide slide={slide} />
    case 'tech':
      return <TechSlide slide={slide} />
    case 'why':
      return <WhySlide slide={slide} />
    case 'competitors':
      return <CompetitorsSlide slide={slide} />
    case 'category':
      return <CategorySlide slide={slide} />
    case 'monetization':
      return <MonetizationSlide slide={slide} />
    default:
      return null
  }
}

function TitleSlide({ slide }: { slide: SlideData }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center text-center"
    >
      <motion.div variants={itemVariants} className="mb-8">
        <SectionHeader label="Introducing" />
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="font-display text-6xl font-800 tracking-tight text-foreground sm:text-7xl lg:text-8xl"
      >
        Career
        <span className="text-primary relative">
          OS
          <motion.span
            className="absolute -inset-1 rounded-sm bg-primary/10"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="mt-6 max-w-lg text-lg text-muted-foreground sm:text-xl"
      >
        {slide.subtitle}
      </motion.p>

      <motion.div variants={itemVariants} className="mt-14 flex gap-6 sm:gap-10">
        {[
          { label: 'Market Intelligence', icon: BarChart3 },
          { label: 'Resume Analysis', icon: FileSearch },
          { label: 'Personalized Guidance', icon: Target },
        ].map(({ label, icon: Icon }, idx) => (
          <motion.div
            key={label}
            className="flex flex-col items-center gap-2.5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + idx * 0.1 }}
          >
            <div className="rounded-sm bg-primary/10 p-2.5">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
              {label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

function ProductSlide({ slide }: { slide: SlideData }) {
  const features = [
    {
      icon: BarChart3,
      title: 'Market Intelligence',
      desc: 'Real-time job market data from Adzuna, GitHub, Hacker News, and Stack Overflow.',
    },
    {
      icon: FileSearch,
      title: 'Resume Analysis',
      desc: 'AI-powered feedback on skill gaps, transferable skills, and market alignment.',
    },
    {
      icon: Target,
      title: 'Personalized Guidance',
      desc: 'Actionable recommendations whether starting, switching roles, or changing companies.',
    },
  ]

  const steps = [
    { num: '01', text: 'Sign up and set career intent' },
    { num: '02', text: 'Define your target role' },
    { num: '03', text: 'Upload your resume' },
    { num: '04', text: 'Get analysis with skill gaps & market score' },
    { num: '05', text: 'View market snapshots for your role' },
  ]

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-10"
    >
      <div>
        <motion.h2
          variants={itemVariants}
          className="font-display text-4xl font-700 text-foreground sm:text-5xl"
        >
          {slide.title}
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mt-3 text-lg text-muted-foreground"
        >
          {slide.subtitle}
        </motion.p>
      </div>

      <motion.div variants={itemVariants} className="grid gap-4 sm:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-sm border border-border bg-surface p-5"
          >
            <f.icon className="mb-3 h-5 w-5 text-primary" />
            <h3 className="font-display text-lg font-600 text-foreground">
              {f.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {f.desc}
            </p>
          </div>
        ))}
      </motion.div>

      <motion.div variants={itemVariants}>
        <SectionHeader label="User Flow" className="mb-4" />
        <div className="space-y-2">
          {steps.map((step) => (
            <CardBox key={step.num} className="flex items-center gap-4 !p-4">
              <span className="font-mono text-sm font-500 text-primary">
                {step.num}
              </span>
              <span className="text-sm text-foreground">{step.text}</span>
            </CardBox>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

function TechSlide({ slide }: { slide: SlideData }) {
  const stacks = [
    {
      category: 'Backend',
      items: ['FastAPI (async Python)', 'MongoDB Atlas + Motor', 'APScheduler', 'pdfplumber + python-docx'],
      icon: Code2,
    },
    {
      category: 'Auth & Security',
      items: ['JWT (python-jose)', 'bcrypt password hashing', 'Fernet data encryption'],
      icon: Shield,
    },
    {
      category: 'Frontend',
      items: ['React 19 + TypeScript', 'Vite + Tailwind CSS v4', 'Framer Motion + React Router'],
      icon: Globe,
    },
    {
      category: 'AI & APIs',
      items: ['OpenAI GPT models', 'Adzuna job listings', 'GitHub trending repos', 'Hacker News (Algolia)', 'Stack Overflow data'],
      icon: Cpu,
    },
    {
      category: 'Infrastructure',
      items: ['Render.com hosting', 'render.yaml config', 'python-dotenv env management'],
      icon: Database,
    },
  ]

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <div>
        <motion.h2
          variants={itemVariants}
          className="font-display text-4xl font-700 text-foreground sm:text-5xl"
        >
          {slide.title}
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mt-3 text-lg text-muted-foreground"
        >
          {slide.subtitle}
        </motion.p>
      </div>

      <motion.div variants={itemVariants} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {stacks.map((stack) => (
          <div
            key={stack.category}
            className="rounded-sm border border-border bg-surface p-5"
          >
            <div className="mb-3 flex items-center gap-2">
              <stack.icon className="h-4 w-4 text-primary" />
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-foreground">
                {stack.category}
              </h3>
            </div>
            <ul className="space-y-1.5">
              {stack.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary/60" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}

function WhySlide({ slide }: { slide: SlideData }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <div>
        <motion.h2
          variants={itemVariants}
          className="font-display text-4xl font-700 text-foreground sm:text-5xl"
        >
          {slide.title}
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mt-3 text-lg text-muted-foreground"
        >
          {slide.subtitle}
        </motion.p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <motion.div variants={itemVariants}>
          <CardBox borderColor="border-destructive/30" className="h-full">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-destructive/20">
                <span className="font-mono text-xs text-destructive">!</span>
              </div>
              <h3 className="font-display text-lg font-600 text-foreground">
                The Problem
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Job searching is inefficient. Candidates spend hours on LinkedIn and Indeed without clarity on what skills are in demand, whether their resume aligns, or what gaps to close. Existing guidance is generic and coaching is expensive.
            </p>
          </CardBox>
        </motion.div>

        <motion.div variants={itemVariants}>
          <CardBox borderColor="border-primary/30" className="h-full">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-primary/20">
                <Lightbulb className="h-3.5 w-3.5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-600 text-foreground">
                Domain Expertise
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Background in software development with firsthand experience in job searches and role transitions. Observed peers struggling with career decisions due to a lack of data-driven guidance.
            </p>
          </CardBox>
        </motion.div>

        <motion.div variants={itemVariants}>
          <CardBox borderColor="border-success/30" className="h-full">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-success/20">
                <TrendingUp className="h-3.5 w-3.5 text-success" />
              </div>
              <h3 className="font-display text-lg font-600 text-foreground">
                Why Now
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Reduced OpenAI API costs and improved LLM capabilities make accurate resume analysis feasible. Modern tooling enables solo developers to build focused, valuable products users will pay for.
            </p>
          </CardBox>
        </motion.div>
      </div>

      <motion.div variants={itemVariants}>
        <CardBox>
          <SectionHeader label="Validation" className="mb-3" />
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              'Clear demand for resume tools: Resume.io, Enhancv, Resume Genius',
              'Existing tools lack live market data integration',
              'Initial user testing confirmed skill gap analysis is valuable',
              'Open-source tools exist but lack complete product experience',
            ].map((point) => (
              <div key={point} className="flex items-start gap-2">
                <BadgeCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-success" />
                <span className="text-sm text-muted-foreground">{point}</span>
              </div>
            ))}
          </div>
        </CardBox>
      </motion.div>
    </motion.div>
  )
}

function CompetitorsSlide({ slide }: { slide: SlideData }) {
  const competitors = [
    {
      name: 'Resume Builders',
      examples: 'Resume.io, Enhancv, Canva',
      gap: 'Focus on formatting, not market alignment',
    },
    {
      name: 'AI Resume Tools',
      examples: 'Rezi, Kickresume',
      gap: 'Optimize for ATS keywords, no real-time market data',
    },
    {
      name: 'Job Platforms',
      examples: 'LinkedIn, Indeed',
      gap: 'Listings without personalized, resume-specific guidance',
    },
    {
      name: 'Career Coaching',
      examples: 'BetterUp, Maven',
      gap: 'Expensive, not scalable, lack data-driven infrastructure',
    },
  ]

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <div>
        <motion.h2
          variants={itemVariants}
          className="font-display text-4xl font-700 text-foreground sm:text-5xl"
        >
          {slide.title}
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mt-3 text-lg text-muted-foreground"
        >
          {slide.subtitle}
        </motion.p>
      </div>

      <motion.div variants={itemVariants} className="grid gap-3 sm:grid-cols-2">
        {competitors.map((c) => (
          <div
            key={c.name}
            className="rounded-sm border border-border bg-surface p-5"
          >
            <h3 className="font-display text-base font-600 text-foreground">
              {c.name}
            </h3>
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              {c.examples}
            </p>
            <div className="mt-3 flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive" />
              <p className="text-sm text-muted-foreground">{c.gap}</p>
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="rounded-sm border border-primary/40 bg-primary/5 p-6"
      >
        <div className="mb-4 flex items-center gap-2">
          <Zap className="h-4 w-4 text-primary" />
          <h3 className="font-display text-lg font-600 text-foreground">
            The Core Insight
          </h3>
        </div>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          Most competitors treat resume building, job searching, and career guidance as separate problems. They should be connected.
        </p>
        <div className="flex flex-wrap items-center gap-2 font-mono text-sm">
          <span className="rounded-sm border border-border bg-surface px-2.5 py-1 text-foreground">
            Your Resume
          </span>
          <span className="text-primary">+</span>
          <span className="rounded-sm border border-border bg-surface px-2.5 py-1 text-foreground">
            Target Role
          </span>
          <span className="text-primary">+</span>
          <span className="rounded-sm border border-border bg-surface px-2.5 py-1 text-foreground">
            Live Market Data
          </span>
          <ArrowRight className="h-4 w-4 text-primary" />
          <span className="rounded-sm border border-primary/40 bg-primary/10 px-2.5 py-1 text-primary">
            Actionable Guidance
          </span>
        </div>
      </motion.div>
    </motion.div>
  )
}

function CategorySlide({ slide }: { slide: SlideData }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center text-center"
    >
      <motion.div variants={itemVariants} className="mb-6">
        <SectionHeader label="Category" justify="center" />
      </motion.div>

      <motion.h2
        variants={itemVariants}
        className="font-display text-5xl font-800 text-foreground sm:text-6xl lg:text-7xl"
      >
        {slide.title}
      </motion.h2>

      <motion.div variants={itemVariants} className="mt-10">
        <CardBox borderColor="border-primary/40" className="px-8 py-5 inline-block">
          <span className="font-display text-2xl font-700 text-primary">
            B2C SaaS
          </span>
          <p className="mt-2 text-sm text-muted-foreground">
            Focused on individual job seekers as end users
          </p>
        </CardBox>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-8 flex flex-wrap justify-center gap-3"
      >
          {[
            { icon: Sparkles, label: 'AI-Powered Product' },
            { icon: Layers, label: 'Data-Driven Platform' },
            { icon: Briefcase, label: 'Career Technology' },
          ].map(({ icon: Icon, label }) => (
            <CardBox key={label} className="flex items-center gap-2 !py-2.5 !px-4">
              <Icon className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{label}</span>
            </CardBox>
          ))}
      </motion.div>
    </motion.div>
  )
}

function MonetizationSlide({ slide }: { slide: SlideData }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <div>
        <motion.h2
          variants={itemVariants}
          className="font-display text-4xl font-700 text-foreground sm:text-5xl"
        >
          {slide.title}
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mt-3 text-lg text-muted-foreground"
        >
          {slide.subtitle}
        </motion.p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <motion.div variants={itemVariants}>
          <CardBox className="!p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary/10">
                <CreditCard className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-600 text-foreground">
                Credit System
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                'New users receive X credits on account creation',
                'Credits are consumed per analysis or insight request',
                'Watch ads to earn Y credits per ad viewed',
                'Self-sustaining loop: engage → earn → analyze',
              ].map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </CardBox>
        </motion.div>

        <motion.div variants={itemVariants}>
          <CardBox className="!p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary/10">
                <MonitorPlay className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-600 text-foreground">
                Targeted Advertising
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                'Ads are matched to user interests extracted from resume',
                'Example: Python-skilled user sees AI Engineering workshop ads',
                'Relevant ads provide value instead of interrupting experience',
                'Dual revenue: ad impressions + credit purchases',
              ].map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </CardBox>
        </motion.div>
      </div>

      <motion.div
        variants={itemVariants}
      >
        <CardBox className="text-center !p-5">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">Model:</span>{' '}
            Free tier with credits → Ad-supported earning → Premium credit purchases
          </p>
        </CardBox>
      </motion.div>
    </motion.div>
  )
}
