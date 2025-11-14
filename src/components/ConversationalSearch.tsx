import { Bot, User, Send, Mic, Sparkles, TrendingUp } from "lucide-react";

const chatMessages = [
  {
    type: "user",
    text: "Find candidates with React + fintech experience."
  },
  {
    type: "ai",
    text: "3 candidates found. Displaying strongest matches based on technical skills and domain expertise."
  }
];

const candidates = [
  {
    name: "Sarah Chen",
    role: "Senior Software Engineer",
    matchScore: 95,
    skills: ["React", "TypeScript", "Fintech APIs", "Node.js", "AWS"],
    evidence: "5+ years building fintech platforms at TechCorp. Led development of payment processing system using React and microservices.",
    avatar: "SC"
  },
  {
    name: "Michael Torres",
    role: "Full Stack Developer",
    matchScore: 88,
    skills: ["React", "Python", "Banking Systems", "PostgreSQL"],
    evidence: "3 years at FinanceHub developing trading dashboards with React. Experience with payment gateway integrations.",
    avatar: "MT"
  },
  {
    name: "Jessica Williams",
    role: "Frontend Engineer",
    matchScore: 82,
    skills: ["React", "Redux", "Financial Data Viz", "D3.js"],
    evidence: "Built real-time stock trading interface at InvestCo. Strong React skills with focus on data visualization.",
    avatar: "JW"
  }
];

export function ConversationalSearch() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            Conversational Search
          </h1>
          <p className="text-slate-600">Ask questions in natural language to find the perfect candidates</p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-2 gap-8">
          {/* Left - Chat Panel */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white/50 shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex flex-col h-[700px]">
            {/* Chat Header */}
            <div className="p-6 border-b border-slate-200/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-slate-800">AI Search Assistant</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-slate-500">Online</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-6 overflow-y-auto space-y-4">
              {/* Welcome Message */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                  <p className="text-slate-700">
                    Hi! I can help you find candidates. Try asking things like "Find senior developers with AWS experience" or "Show me candidates who know both React and Python".
                  </p>
                </div>
              </div>

              {/* User Message */}
              {chatMessages.map((msg, idx) => (
                <div key={idx}>
                  {msg.type === "user" ? (
                    <div className="flex gap-3 justify-end">
                      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                        <p className="text-white">{msg.text}</p>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-slate-600" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles className="w-4 h-4 text-blue-600" />
                          <span className="text-blue-600">Searching...</span>
                        </div>
                        <p className="text-slate-700">{msg.text}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-6 border-t border-slate-200/50">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Ask me anything about candidates..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-700 placeholder:text-slate-400"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600 transition-colors">
                    <Mic className="w-5 h-5" />
                  </button>
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center gap-2">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right - Candidate Results */}
          <div className="space-y-4 overflow-y-auto max-h-[700px]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-800">Top Matches</h3>
              <span className="text-slate-500">3 candidates found</span>
            </div>

            {candidates.map((candidate, idx) => (
              <div
                key={idx}
                className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.12)] transition-all cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white flex-shrink-0">
                    {candidate.avatar}
                  </div>

                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-slate-800 mb-1">{candidate.name}</h4>
                        <p className="text-slate-600">{candidate.role}</p>
                      </div>
                      
                      {/* Match Score Badge */}
                      <div className="relative">
                        <div className="w-16 h-16">
                          <svg className="w-full h-full transform -rotate-90">
                            <circle
                              cx="32"
                              cy="32"
                              r="28"
                              stroke="#E2E8F0"
                              strokeWidth="4"
                              fill="none"
                            />
                            <circle
                              cx="32"
                              cy="32"
                              r="28"
                              stroke="url(#gradient)"
                              strokeWidth="4"
                              fill="none"
                              strokeDasharray={`${2 * Math.PI * 28}`}
                              strokeDashoffset={`${2 * Math.PI * 28 * (1 - candidate.matchScore / 100)}`}
                              className="transition-all duration-1000"
                            />
                            <defs>
                              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#3B82F6" />
                                <stop offset="100%" stopColor="#06B6D4" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                              {candidate.matchScore}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {candidate.skills.map((skill, skillIdx) => (
                        <span
                          key={skillIdx}
                          className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-lg border border-blue-200/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Evidence */}
                    <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-3 border border-slate-200/50">
                      <div className="flex items-start gap-2">
                        <TrendingUp className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <p className="text-slate-700 leading-relaxed">
                          {candidate.evidence}
                        </p>
                      </div>
                    </div>

                    {/* Action */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
                        View Full Profile →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
