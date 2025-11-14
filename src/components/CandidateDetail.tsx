import { 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Mail, 
  Phone, 
  Award, 
  CheckCircle2,
  X,
  Sparkles,
  TrendingUp,
  Calendar,
  Building2
} from "lucide-react";

const matchedSkills = [
  "React", "TypeScript", "Node.js", "Fintech APIs", "AWS", "Docker", "PostgreSQL"
];

const missingSkills = [
  "Kubernetes", "GraphQL"
];

const experience = [
  {
    role: "Senior Software Engineer",
    company: "TechCorp Inc.",
    period: "2021 - Present",
    duration: "2 years",
    description: "Led development of payment processing microservices. Implemented real-time transaction monitoring system serving 1M+ users.",
    highlights: ["React", "Node.js", "AWS", "Microservices"]
  },
  {
    role: "Software Engineer",
    company: "FinanceHub",
    period: "2019 - 2021",
    duration: "2 years",
    description: "Built trading dashboard and portfolio management tools. Integrated with multiple banking APIs.",
    highlights: ["React", "Python", "Fintech APIs"]
  },
  {
    role: "Junior Developer",
    company: "StartupXYZ",
    period: "2017 - 2019",
    duration: "2 years",
    description: "Developed frontend features for SaaS platform. Collaborated with design team on UI/UX improvements.",
    highlights: ["JavaScript", "React", "CSS"]
  }
];

const projects = [
  {
    name: "Real-time Payment Processing System",
    description: "Architected and deployed microservices handling 10K+ transactions/day",
    tech: ["Node.js", "React", "AWS Lambda", "DynamoDB"],
    impact: "Reduced processing time by 60%"
  },
  {
    name: "Trading Analytics Dashboard",
    description: "Built comprehensive data visualization platform for stock market analysis",
    tech: ["React", "D3.js", "WebSocket", "Python"],
    impact: "Used by 5K+ daily active users"
  }
];

export function CandidateDetail() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Card */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-[0_8px_30px_rgba(0,0,0,0.08)] mb-8">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-6">
              {/* Avatar */}
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white flex-shrink-0">
                SC
              </div>
              
              {/* Basic Info */}
              <div>
                <h1 className="text-slate-900 mb-2">Sarah Chen</h1>
                <p className="text-slate-700 mb-3">Senior Software Engineer</p>
                <div className="flex flex-wrap gap-4 text-slate-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>sarah.chen@email.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Match Score Gauge */}
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 mb-3">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="#E2E8F0"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="url(#scoreGradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.95)}`}
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                  <defs>
                    <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="50%" stopColor="#6366F1" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 bg-clip-text text-transparent">
                    95
                  </div>
                  <span className="text-slate-500">Match</span>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full">
                <TrendingUp className="w-4 h-4 text-green-700" />
                <span className="text-green-700">Top 5% Match</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - 2/3 width */}
          <div className="col-span-2 space-y-8">
            {/* Skills Section */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <h3 className="text-slate-800 mb-6">Skills Analysis</h3>
              
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <h4 className="text-slate-700">Matched Skills</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {matchedSkills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 rounded-xl border border-green-200/50 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <X className="w-5 h-5 text-slate-400" />
                  <h4 className="text-slate-700">Missing Skills</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {missingSkills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-slate-100 text-slate-500 rounded-xl border border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-slate-800">Work Experience</h3>
              </div>

              <div className="space-y-6">
                {experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-8">
                    {/* Timeline */}
                    {idx < experience.length - 1 && (
                      <div className="absolute left-2 top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 to-transparent" />
                    )}
                    <div className={`absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-white ${
                      idx === 0 
                        ? "bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg" 
                        : "bg-slate-300"
                    }`} />

                    <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-5 border border-slate-200/50">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-slate-800 mb-1">{exp.role}</h4>
                          <div className="flex items-center gap-2 text-slate-600">
                            <Building2 className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 text-slate-500">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <span className="text-slate-400">{exp.duration}</span>
                        </div>
                      </div>
                      
                      <p className="text-slate-700 mb-3 leading-relaxed">{exp.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="px-3 py-1 bg-white rounded-lg text-blue-600 border border-blue-200/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
                  <Award className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-slate-800">Key Projects</h3>
              </div>

              <div className="space-y-4">
                {projects.map((project, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-xl p-5 border border-slate-200/50">
                    <h4 className="text-slate-800 mb-2">{project.name}</h4>
                    <p className="text-slate-700 mb-3 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-white rounded-lg text-purple-600 border border-purple-200/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-green-700">
                      <TrendingUp className="w-4 h-4" />
                      <span>{project.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Explainability Panel */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-slate-800">AI Match Explanation</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200/50">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                      95
                    </div>
                    <div>
                      <h4 className="text-slate-800 mb-2">Strong Technical Match</h4>
                      <p className="text-slate-700 leading-relaxed">
                        "5+ years building <span className="bg-yellow-100 px-1 rounded">fintech platforms</span> at TechCorp. 
                        Led development of <span className="bg-yellow-100 px-1 rounded">payment processing system</span> using 
                        <span className="bg-yellow-100 px-1 rounded"> React</span> and microservices."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200/50">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green-600 text-white flex items-center justify-center flex-shrink-0">
                      90
                    </div>
                    <div>
                      <h4 className="text-slate-800 mb-2">Relevant Domain Experience</h4>
                      <p className="text-slate-700 leading-relaxed">
                        "Experience with <span className="bg-yellow-100 px-1 rounded">banking APIs</span> and 
                        <span className="bg-yellow-100 px-1 rounded"> payment gateway integrations</span>. 
                        Built trading dashboard at FinanceHub."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* CTA */}
            <button className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Add to Shortlist
            </button>

            {/* Quick Stats */}
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <h4 className="text-slate-800 mb-4">Quick Stats</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Total Experience</span>
                  <span className="text-slate-800">6 years</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Current Role</span>
                  <span className="text-slate-800">Senior</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Companies</span>
                  <span className="text-slate-800">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Projects</span>
                  <span className="text-slate-800">12+</span>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-green-600" />
                </div>
                <h4 className="text-slate-800">Education</h4>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="text-slate-800">B.S. Computer Science</h4>
                  <p className="text-slate-600">Stanford University</p>
                  <p className="text-slate-500">2013 - 2017</p>
                </div>
              </div>
            </div>

            {/* Domain Expertise */}
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <h4 className="text-slate-800 mb-4">Domain Expertise</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-700">Fintech</span>
                    <span className="text-blue-600">Expert</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[95%] bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-700">Web Development</span>
                    <span className="text-blue-600">Expert</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[90%] bg-gradient-to-r from-blue-500 to-indigo-400 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-700">Cloud Infrastructure</span>
                    <span className="text-indigo-600">Advanced</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[75%] bg-gradient-to-r from-indigo-500 to-purple-400 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
