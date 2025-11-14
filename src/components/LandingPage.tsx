import { CloudUpload, Sparkles, Brain, Upload } from "lucide-react";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-teal-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl" />
      
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-12 py-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            HirePulse
          </span>
        </div>
        <div className="flex items-center gap-8">
          <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Features</a>
          <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Pricing</a>
          <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
          <button className="px-6 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-slate-700">
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center px-12 py-20">
        <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-blue-200/50 mb-8">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span className="text-blue-600">Powered by Advanced AI</span>
        </div>

        <h1 className="text-center mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 bg-clip-text text-transparent max-w-4xl">
          AI Resume Intelligence System
        </h1>
        
        <p className="text-slate-600 text-center max-w-2xl mb-16">
          Upload resumes to begin intelligent screening. Our AI-powered system extracts insights, builds knowledge graphs, and matches candidates with precision.
        </p>

        {/* Upload Area */}
        <div className="w-full max-w-3xl">
          <div className="relative group">
            {/* Glassy card */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-16 border border-white/50 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-all duration-300">
              <div className="border-2 border-dashed border-blue-300 rounded-2xl p-12 flex flex-col items-center justify-center hover:border-blue-500 transition-colors cursor-pointer group-hover:bg-blue-50/50">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CloudUpload className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-slate-800 mb-2">
                  Drop your resumes here
                </h3>
                <p className="text-slate-500 mb-6">
                  or click to browse files
                </p>
                
                <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-2">
                  <Upload className="w-5 h-5" />
                  Upload Resumes
                </button>
                
                <p className="text-slate-400 mt-6">
                  Supports PDF, DOC, DOCX • Max 10MB per file
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature hints */}
        <div className="grid grid-cols-3 gap-8 mt-20 max-w-4xl w-full">
          {[
            { icon: Brain, title: "Smart Extraction", desc: "AI-powered data extraction" },
            { icon: Sparkles, title: "Knowledge Graph", desc: "Intelligent skill mapping" },
            { icon: CloudUpload, title: "Instant Processing", desc: "Real-time analysis" }
          ].map((feature, i) => (
            <div key={i} className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:bg-white/70 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-slate-800 mb-2">{feature.title}</h4>
              <p className="text-slate-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
