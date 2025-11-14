import { FileText, CheckCircle2, Loader2, Brain, FileSearch, Network } from "lucide-react";

const resumes = [
  { name: "Sarah_Chen_Resume.pdf", progress: 100, status: "complete" },
  { name: "Michael_Torres_CV.pdf", progress: 75, status: "processing" },
  { name: "Jessica_Williams.docx", progress: 45, status: "processing" },
  { name: "David_Kumar_Resume.pdf", progress: 20, status: "processing" },
  { name: "Emily_Rodriguez.pdf", progress: 0, status: "queued" }
];

const stages = [
  { label: "OCR", icon: FileSearch },
  { label: "Extracting Skills", icon: Brain },
  { label: "Building Knowledge Graph", icon: Network }
];

export function UploadProcessing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h1 className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Processing Resumes
            </h1>
          </div>
          <p className="text-slate-600">
            AI is analyzing and extracting insights from your uploaded resumes
          </p>
        </div>

        {/* Resume Cards */}
        <div className="space-y-4 mb-12">
          {resumes.map((resume, idx) => (
            <div
              key={idx}
              className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.12)] transition-all"
            >
              <div className="flex items-center gap-6">
                {/* File Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                  resume.status === "complete" 
                    ? "bg-gradient-to-br from-green-400 to-emerald-500" 
                    : "bg-gradient-to-br from-blue-400 to-indigo-500"
                }`}>
                  {resume.status === "complete" ? (
                    <CheckCircle2 className="w-7 h-7 text-white" />
                  ) : (
                    <FileText className="w-7 h-7 text-white" />
                  )}
                </div>

                {/* File Info */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-slate-800">{resume.name}</h3>
                    <span className="text-slate-500">{resume.progress}%</span>
                  </div>

                  {/* Progress Stages */}
                  <div className="flex items-center gap-4 mb-3">
                    {stages.map((stage, stageIdx) => {
                      const isComplete = resume.progress >= (stageIdx + 1) * 33;
                      const isActive = resume.progress >= stageIdx * 33 && resume.progress < (stageIdx + 1) * 33;
                      
                      return (
                        <div key={stageIdx} className="flex items-center gap-2">
                          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all ${
                            isComplete 
                              ? "bg-gradient-to-r from-green-100 to-emerald-100 text-green-700" 
                              : isActive
                              ? "bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700"
                              : "bg-slate-100 text-slate-400"
                          }`}>
                            {isActive && <Loader2 className="w-3 h-3 animate-spin" />}
                            {isComplete && <CheckCircle2 className="w-3 h-3" />}
                            <stage.icon className="w-3 h-3" />
                            <span className="text-xs">{stage.label}</span>
                          </div>
                          {stageIdx < stages.length - 1 && (
                            <div className={`w-4 h-0.5 ${isComplete ? "bg-green-300" : "bg-slate-200"}`} />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-teal-400 rounded-full transition-all duration-500 relative"
                      style={{ width: `${resume.progress}%` }}
                    >
                      {resume.status === "processing" && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Progress */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-slate-800 mb-1">Overall Progress</h3>
              <p className="text-slate-500">3 of 5 resumes processed</p>
            </div>
            <div className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl">
              <span className="text-blue-700">48% Complete</span>
            </div>
          </div>
          
          <div className="relative w-full h-4 bg-gradient-to-r from-slate-100 to-slate-50 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-teal-400 rounded-full transition-all duration-1000"
                 style={{ width: "48%" }}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-lg border-2 border-blue-500" />
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <div className="text-blue-600 mb-1">1</div>
              <div className="text-slate-600">Completed</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
              <div className="text-indigo-600 mb-1">3</div>
              <div className="text-slate-600">Processing</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl">
              <div className="text-slate-600 mb-1">1</div>
              <div className="text-slate-500">Queued</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
