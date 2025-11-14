import { Briefcase, GraduationCap, Code, Award, FileText, Sparkles } from "lucide-react";

const skills = [
  "React", "TypeScript", "Node.js", "Python", "Machine Learning", 
  "AWS", "Docker", "PostgreSQL", "GraphQL", "CI/CD"
];

const experience = [
  { 
    role: "Senior Software Engineer", 
    company: "TechCorp Inc.", 
    period: "2021 - Present",
    highlight: true
  },
  { 
    role: "Software Engineer", 
    company: "StartupXYZ", 
    period: "2019 - 2021",
    highlight: false
  },
  { 
    role: "Junior Developer", 
    company: "DevStudio", 
    period: "2017 - 2019",
    highlight: false
  }
];

const projects = [
  { name: "E-commerce Platform", tech: "React, Node.js, MongoDB" },
  { name: "ML Recommendation Engine", tech: "Python, TensorFlow, AWS" },
  { name: "Real-time Analytics Dashboard", tech: "React, GraphQL, WebSocket" }
];

export function CandidateExtraction() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full w-fit mb-4">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700">AI Extraction Complete</span>
          </div>
          <h1 className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            Candidate Profile Extraction
          </h1>
          <p className="text-slate-600">Structured data extracted from resume</p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-2 gap-8">
          {/* Left Panel - Structured Data */}
          <div className="space-y-6">
            {/* Profile Header */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white">
                  SC
                </div>
                <div>
                  <h2 className="text-slate-800 mb-1">Sarah Chen</h2>
                  <p className="text-slate-600">Senior Software Engineer</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-slate-500">San Francisco, CA</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-500">5+ years experience</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
                  <Code className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-slate-800">Technical Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-xl border border-blue-200/50 hover:scale-105 transition-transform cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-slate-800">Experience</h3>
              </div>
              <div className="space-y-6">
                {experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-8">
                    {/* Timeline line */}
                    {idx < experience.length - 1 && (
                      <div className="absolute left-2 top-8 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 to-transparent" />
                    )}
                    {/* Timeline dot */}
                    <div className={`absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-white ${
                      exp.highlight 
                        ? "bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg" 
                        : "bg-slate-300"
                    }`} />
                    <div>
                      <h4 className="text-slate-800">{exp.role}</h4>
                      <p className="text-slate-600">{exp.company}</p>
                      <p className="text-slate-500">{exp.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center">
                  <Award className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-slate-800">Key Projects</h3>
              </div>
              <div className="space-y-4">
                {projects.map((project, idx) => (
                  <div key={idx} className="p-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border border-slate-200/50 hover:shadow-md transition-shadow">
                    <h4 className="text-slate-800 mb-2">{project.name}</h4>
                    <p className="text-slate-500">{project.tech}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-slate-800">Education</h3>
              </div>
              <div>
                <h4 className="text-slate-800">B.S. Computer Science</h4>
                <p className="text-slate-600">Stanford University</p>
                <p className="text-slate-500">2013 - 2017</p>
              </div>
            </div>
          </div>

          {/* Right Panel - Resume Preview */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-[0_8px_30px_rgba(0,0,0,0.08)] h-fit sticky top-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                <FileText className="w-5 h-5 text-slate-600" />
              </div>
              <h3 className="text-slate-800">Resume Preview</h3>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-inner max-h-[800px] overflow-y-auto">
              {/* Resume Content with highlights */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-slate-900 mb-2">SARAH CHEN</h2>
                  <p className="text-slate-700">Senior Software Engineer</p>
                  <p className="text-slate-600">sarah.chen@email.com | +1 (555) 123-4567</p>
                </div>

                <div>
                  <h3 className="text-slate-800 mb-3 pb-2 border-b border-slate-200">TECHNICAL SKILLS</h3>
                  <p className="text-slate-700 leading-relaxed">
                    <span className="bg-blue-100 px-1 rounded">React</span>,{" "}
                    <span className="bg-blue-100 px-1 rounded">TypeScript</span>,{" "}
                    <span className="bg-blue-100 px-1 rounded">Node.js</span>,{" "}
                    <span className="bg-blue-100 px-1 rounded">Python</span>,{" "}
                    <span className="bg-blue-100 px-1 rounded">Machine Learning</span>,{" "}
                    AWS, Docker, PostgreSQL, GraphQL, CI/CD
                  </p>
                </div>

                <div>
                  <h3 className="text-slate-800 mb-3 pb-2 border-b border-slate-200">EXPERIENCE</h3>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h4 className="text-slate-800">Senior Software Engineer</h4>
                      <p className="text-slate-600">TechCorp Inc. | 2021 - Present</p>
                      <p className="text-slate-700 mt-2 leading-relaxed">
                        Led development of microservices architecture serving 1M+ users. 
                        Implemented CI/CD pipelines reducing deployment time by 60%.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-slate-800">Software Engineer</h4>
                      <p className="text-slate-600">StartupXYZ | 2019 - 2021</p>
                      <p className="text-slate-700 mt-2 leading-relaxed">
                        Built real-time analytics dashboard using React and GraphQL.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-slate-800 mb-3 pb-2 border-b border-slate-200">EDUCATION</h3>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="text-slate-800">B.S. Computer Science</h4>
                    <p className="text-slate-600">Stanford University | 2013 - 2017</p>
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
