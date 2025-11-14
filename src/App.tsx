import { LandingPage } from "./components/LandingPage";
import { UploadProcessing } from "./components/UploadProcessing";
import { CandidateExtraction } from "./components/CandidateExtraction";
import { ConversationalSearch } from "./components/ConversationalSearch";
import { CandidateDetail } from "./components/CandidateDetail";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="flex overflow-x-auto snap-x snap-mandatory">
        <div className="min-w-full snap-center">
          <LandingPage />
        </div>
        <div className="min-w-full snap-center">
          <UploadProcessing />
        </div>
        <div className="min-w-full snap-center">
          <CandidateExtraction />
        </div>
        <div className="min-w-full snap-center">
          <ConversationalSearch />
        </div>
        <div className="min-w-full snap-center">
          <CandidateDetail />
        </div>
      </div>
      
      {/* Screen Navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-3 bg-white/80 backdrop-blur-lg px-6 py-3 rounded-full shadow-lg border border-white/20">
        {[1, 2, 3, 4, 5].map((num) => (
          <div
            key={num}
            className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}
