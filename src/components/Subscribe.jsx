import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Subscribe() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleHover = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-xl w-full">
        <h2 className="text-4xl font-bold mb-4">Subscribe to get updates</h2>
        <p className="text-gray-600 mb-8">
          Stay in the loop! Subscribe now to receive the latest news, updates, and exclusive
          offers from sApp directly to your inbox.
        </p>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-5 py-4 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <button
            onMouseEnter={handleHover}
            className="w-full flex items-center justify-center gap-2 px-5 py-4 bg-gradient-to-r from-violet-600 to-indigo-500 text-white font-semibold rounded-md transition-transform"
          >
            Subscribe
            <ArrowRight className={`transition-transform ${isAnimating ? "animate-arrow-move" : ""}`} size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
